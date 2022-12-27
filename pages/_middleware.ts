import { NextRequest, NextResponse } from "next/server";
import {getUrl } from "../lib/redis-db"

export async function middleware (req: NextRequest) {
    const route = req.nextUrl.pathname.split("/")[1]

    if(["favicon.ico", "api", ""].includes(route)) {
        return;
    }

    const url = await getUrl(route);

    if(url) {
        return NextResponse.redirect(url);
    }
}