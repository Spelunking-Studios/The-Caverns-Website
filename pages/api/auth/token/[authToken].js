import jwt from "jsonwebtoken";
import { Redis } from "@upstash/redis";

export default function handler(req, res) {
    // Ensure token exists
    const redis = new Redis({
        url: process.env.UPSTASH_REDIS_URL,
        token: process.env.UPSTASH_REDIS_TOKEN
    });
    // Attempt to get token
    const dbtok = redis.get(`${process.env.UPSTASH_REDIS_BASEKEY}:users:accounts:${req.query.authToken}`);
    if (!dbtok || JSON.stringify(dbtok) == "{}") {
        //res.redirect(302, "/sign-up?error=BadTOK");
        //return;
    }
    res.json({
        authToken: req.query.authToken,
        dbtok: dbtok
    });
    //res.redirect(302, "/sign-in");
}