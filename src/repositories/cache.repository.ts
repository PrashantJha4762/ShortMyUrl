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