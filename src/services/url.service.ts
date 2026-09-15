import { serverconfig } from "../config";
import { GetNextId, GetUrlMapping, SetUrlMapping } from "../repositories/cache.repository";
import { CreateUrl, GetUrlByShortUrl, IncrementUrlClicks } from "../repositories/url.repo";
import { toBase62 } from "../utils/conversion";


//this fn first fetches up the id from redis in order to make sure conccurency is handled
//so that no two urls get the same short url, then it converts the id to base62 and 
// then saves the original url and short url in the database and also in redis cache for faster retrieval
export async function CreateUrlService(originalUrl: string): Promise<{ //ye pta nhi kya h ig return kr rhe h isiliye krna pada yha pe
    id: number;
    original_url: string;
    short_url: string;
    clicks: number;
    createdAt: Date;
    updatedAt: Date;
}> {
    const id=await GetNextId();
    const shortUrl=toBase62(id);
    const url=await CreateUrl({original_url:originalUrl,short_url:shortUrl});
    await SetUrlMapping(shortUrl, originalUrl);

    const BaseUrl=serverconfig.BASE_URL;

    const fullUrl=`${BaseUrl}/${shortUrl}`;
    return {
        id:url.id,
        original_url:url.original_url,
        short_url:fullUrl,
        clicks:url.clicks,
        createdAt:url.createdAt,
        updatedAt:url.updatedAt
    };
}

export async function GetOriginalUrlService(shortUrl: string) {
    const originalUrl=await GetUrlMapping(shortUrl)
    if(originalUrl){
        return {
            original_url:originalUrl,
            short_url:shortUrl
        }
    }
    const url=await GetUrlByShortUrl(shortUrl);
    if(!url){
        return null
    }
    await IncrementUrlClicks(url.id,url.clicks) //incrementing the clicks in the databases so that we can keep track of how many times the short url has been clicked
    await SetUrlMapping(shortUrl,url.original_url) //setting the mapping in redis cache so that next time we can get the original url from cache instead of hitting the database
    return {
        original_url:url.original_url,
        short_url:url.short_url
    }
}
