import type { NextApiRequest, NextApiResponse } from "next";
import { setNewUrl } from "../../lib/redis-db";


export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse
) { 
    const url = req.body.url;
    const short = await setNewUrl(url)

    res.status(200).json({url, short});
}