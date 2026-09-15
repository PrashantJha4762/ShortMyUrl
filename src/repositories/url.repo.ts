import type { CreateUrlDto } from "../dto/createUrl.dto";
import urls from "../db/models/index.js";

export async function CreateUrl(data:CreateUrlDto){
    const url = await urls.create(data)
    return url
}
export async function GetUrlByShortUrl(short_url:string){
    const url = await urls.findOne({where:{short_url}})
    return url
}
export async function GetUrlById(id:number){
    const url = await urls.findByPk(id)
    return url
}
export async function GetAllUrls(){
    const urlsList = await urls.findAll()
    return urlsList
}
export function IncrementUrlClicks(id:number,clicks:number){
    return urls.increment({clicks},{where:{id}})
}
export async function FindStatsByShortUrl(short_url:string){
    const url = await urls.findOne({where:{short_url}})
    return url
}
