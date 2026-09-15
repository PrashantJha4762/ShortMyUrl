import { createClient } from "redis";
import { serverconfig } from ".";

export const redisClient=createClient({
    url: serverconfig.RedisUrl,
    RESP: 2 // this is because we were not able to connect to redis
    //  because of older version issue
})
redisClient.on("error",(err)=>console.log("Redis Client Error",err))

redisClient.on("connect",()=>console.log("Redis Client Connected"))

export async function connectRedis(){
    try{
        await redisClient.connect()
        console.log("Redis Client Connected")
    } catch (error) {
        console.error("Error connecting to Redis:", error)
        throw error
    }
}
export async function disconnectRedis(){
    try{
        await redisClient.quit()
        console.log("Redis Client Disconnected")
    } catch (error) {
        console.error("Error disconnecting from Redis:", error)
        throw error
    }
}

