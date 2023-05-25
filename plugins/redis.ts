import { Redis } from '@upstash/redis/cloudflare'
export default defineNuxtPlugin(nuxtApp => {
    

    const redisClient = new Redis({
        url: 'https://evolving-hare-35355.upstash.io',
        token: 'AYobASQgZmE3NThiYWItMTAzZi00MzgyLWIxZmQtNmI0ZmYxYzAxZTdkMTI2NzBjZTUzNzliNDY5ZDg1ZGRlZTQ1N2E2OTQ5MmI=',
    })

    return {
        provide: {
            redis: redisClient,
        }
    }
});