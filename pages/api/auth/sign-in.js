import { setCookie, getCookie, getCookies } from 'cookies-next';
import jwt from "jsonwebtoken";
import { Redis } from "@upstash/redis";

export default function handler(req, res) {
    const body = req.body;
    /*const redis = new Redis({
        url: process.env.UPSTASH_REDIS_URL,
        token: process.env.UPSTASH_REDIS_TOKEN
    });*/
    res.status(200).json({
        "cookies": getCookies(),
        "jwt": jwt.sign({ foo: 'bar' }, 'shhhhh'),
        "body": body
    });
}