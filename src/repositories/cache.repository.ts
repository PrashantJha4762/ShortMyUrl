import { serverconfig } from "../config"
import { redisClient } from "../config/redis.config"

export async function GetNextId(): Promise<number> {
    const key=serverconfig.REDIS_COUNTER_KEY

    if(!redisClient.isOpen){
        await redisClient.connect()
    }
    const counter=await redisClient.incr(key)
    return counter
}
export async function SetUrlMapping(short_url:string,Original_url:string):Promise<void>{
    const key=`url:${short_url}`
    if(!redisClient.isOpen){
        await redisClient.connect()
    }
    await redisClient.set(key, Original_url,{EX: 60*60*24*7}) // Set expiration time to 7 days})
}
export async function DeleteUrlMapping(short_url:string):Promise<void>{
    const key=`url:${short_url}`
    if(!redisClient.isOpen){
        await redisClient.connect()
    }
    await redisClient.del(key)
}