import dotenv from 'dotenv'
import fastify from 'fastify'

dotenv.config()
console.log(process.env)

const server = fastify()

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

server.listen({ port: 8080 }, (err, address) => {
  if (err != null) {
    console.error(err)
    process.exit(1)
  }

  console.log(`Server listening at ${address}`)
})
