import { fastify} from 'fastify'
import {fastifyCors} from '@fastify/cors'
import {z} from 'zod'
import {validatorCompiler, serializerCompiler} from 'fastify-type-provider-zod'
import { ZodTypeProvider } from 'fastify-type-provider-zod'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyCors)

app.post('/subscriptions', {
  schema: {
    body: z.object({
      name: z.string(),
      email: z.email(),
    }),
    response: {
      201: z.object({
        name: z.string(),
        email: z.string(),
      })
    }
  }
}, async (request, reply) => {
  const {name, email} = request.body

  return reply.status(201).send({
    name,
    email
  })
})

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running!')
})