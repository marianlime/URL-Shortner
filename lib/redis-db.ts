import { Redis } from '@upstash/redis'

const redis = new Redis({
    url: 'https://eu1-guided-unicorn-38060.upstash.io',
    token: 'AZSsACQgN2Y1YmUxMzQtN2FhNC00NzAyLWIzODQtNDZjOTViMmE0ZDdiNzVlZGZjNTRmMWE4NGQyY2I2ZDNhNWI4YTE5Nzg5ZWY=',
})

export async function setNewUrl(url:string) {
    const short = getNewUrl();
    await redis.set(`shortened/${short}`, url)
    return short;
}
export async function getUrl(short: string): Promise<string> {
    const  { data }  = await redis.get(`short/${short}`);
    return data;
  }
function getNewUrl(): string {
    const pieces = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("")
    return [... new Array(4)]
    .map((_) => pieces[Math.floor(Math.random() * pieces.length)])
    .join("")
}
