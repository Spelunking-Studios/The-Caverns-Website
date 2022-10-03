import { setCookie, getCookie, getCookies, deleteCookie } from 'cookies-next';
import jwt from "jsonwebtoken";
import { Redis } from "@upstash/redis";

export default async function handler(req, res) {
    let c = getCookie("ahc", { req, res });
    if (!c) {
        res.redirect(302, "/?error=SoF");
        return;
    }
    deleteCookie("ahc", { req, res });
    res.redirect(302, "/sign-in");
    /*const redis = new Redis({
        url: process.env.UPSTASH_REDIS_URL,
        token: process.env.UPSTASH_REDIS_TOKEN
    });*/
    /*var dbq = await redis.get(`${process.env.UPSTASH_REDIS_BASEKEY}:users:users:${body.email}`);
    if (!dbq.email || !dbq.password) {
        res.redirect(302, "/sign-in?error=Internal");
        return;
    }
    var valid = (dbq.email == body.email) && (dbq.password == body.password);
    if (valid) {
        var token = uuidv4();
        redis.set(`${process.env.UPSTASH_REDIS_BASEKEY}:auth:sessions:${token}`, `${process.env.UPSTASH_REDIS_BASEKEY}:users:users:${dbq.email}`, {
            ex: 604800
        });
        setCookie("ahc", token, {
            req, res,
            maxAge: 604800
        });
        res.redirect(302, "/");
        return;
    } else {
        res.redirect(302, "/sign-in?error=BadInfo");
        return;
    }*/
}