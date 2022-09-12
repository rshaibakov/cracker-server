import dotenv from 'dotenv'
import fastify from 'fastify'
import mongoose from 'mongoose'

dotenv.config()

const {
  DB_PROTOCOL = 'mongodb',
  DB_HOST = 'localhost',
  DB_PORT = '27017',
  DB_NAME = 'test',
  DB_USERNAME = 'test',
  DB_PASSWORD = ''
} = process.env
const DB_URI = `${DB_PROTOCOL}://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`

init().catch(err => console.log(err))

async function init (): Promise<void> {
  await mongoose.connect(DB_URI)

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
}
