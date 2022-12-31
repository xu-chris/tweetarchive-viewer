// Require the framework and instantiate it
import fastify from 'fastify';
import { Tweet } from 'components/models';

const server = fastify()

server.get('/archive', async (request, reply) => {
    return [
        {
            id: '1596816374197760000',
            created_at: 'Sun Nov 27 10:41:05 +0000 2022',
            description: '乌鲁木齐中路 时间不详 https://t.co/Jcniv7YiTv',
            isMedia: true,
            favorite_count: 2879,
            retweet_count: 237,
            reply_count: 309,
            quote_count: 48,
            isImage: true,
            media_url: [
                {
                    url: 'https://pbs.twimg.com/media/FikH0-3XoAAVerD.jpg',
                    content_type: 'img/jpg'
                }
            ]
          },
          {
            id: '1596816374197760001',
            created_at: 'Sun Nov 27 10:41:05 +0000 2022',
            description: '乌鲁木齐中路 时间不详 https://t.co/Jcniv7YiTv',
            isMedia: true,
            favorite_count: 2879,
            retweet_count: 237,
            reply_count: 309,
            quote_count: 48,
            isImage: true,
            media_url: [
                {
                    url: 'https://pbs.twimg.com/media/FikH0-3XoAAVerD.jpg',
                    content_type: 'img/jpg'
                }
            ]
          }
    ]
})

server.listen({port: 9000}, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})