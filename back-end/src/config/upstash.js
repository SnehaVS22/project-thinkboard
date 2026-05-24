 import {Ratelimit} from "@upstash/ratelimit";
 import {Redis} from "@upstash/redis";
 import dotenv from "dotenv";
 dotenv.config();
 

//console.log("UPSTASH URL:", process.env.UPSTASH_REDIS_REST_URL);
//console.log("UPSTASH TOKEN:", process.env.UPSTASH_REDIS_REST_TOKEN?.slice(0, 10) + "...");
 // create a ratelimiter that alloes 100 request per 60 sec
 const ratelimit = new Ratelimit({
    redis:Redis.fromEnv(),
    limiter:Ratelimit.slidingWindow(10,"20 s")
 });

 export default ratelimit;

