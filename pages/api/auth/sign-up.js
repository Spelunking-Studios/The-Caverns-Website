import { setCookie, getCookie, getCookies } from 'cookies-next';
import jwt from "jsonwebtoken";
import { Redis } from "@upstash/redis";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
    const body = req.body;
    // Validate request
    if (!body.email || !body.password) {
        res.redirect(302, "/sign-up?error=IvalidRq");
        return;
    }
    // Make sure user doesn't already exist
    const redis = new Redis({
        url: process.env.UPSTASH_REDIS_URL,
        token: process.env.UPSTASH_REDIS_TOKEN
    });
    const data = await redis.get(`${process.env.UPSTASH_REDIS_BASEKEY}:users:accounts:${body.email}`);
    if (data) {
        res.redirect(302, "/sign-up?error=UExists");
        return;
    }
    // Generate token
    const token = jwt.sign({
        email: body.email,
        password: body.password
    }, "THEcaverns");
    // Save token to DB
    await redis.set(`${process.env.UPSTASH_REDIS_BASEKEY}:users:register:${body.email}`, token, {
        ex: 86400
    });
    // Send email
    let transporter = nodemailer.createTransport({
        host: "mail.ee",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_FROM,
            pass: process.env.EMAIL_SERVER_PASSWORD,
        },
    });
    let info = await transporter.sendMail({
        from: `"The-Caverns" <${process.env.EMAIL_FROM}>`,
        to: body.email,
        subject: "Sign up for The Caverns",
        text: `
You have 24 hours to complete your registration.
Sign up here: ${process.env.DEPLOYMENT_URL}/api/auth/token/${body.email}.

If this was not you, please ignore this email.`,
        html: `
<h1>One More Step</h1>
<p>You have 24 hours to complete your registration.</p>
<a href=\"${process.env.DEPLOYMENT_URL}/api/auth/token/${body.email}\">Sign Up</a>
<p>If this was not you, please ignore this email.</p>
`,
    });
    res.redirect(302, "/checkYourEmail");
    return;
    res.status(200).json({
        "cookies": getCookies(),
        "jwt": jwt.sign({ foo: 'bar' }, 'shhhhh'),
        "body": body,
        "data": data
    });
}