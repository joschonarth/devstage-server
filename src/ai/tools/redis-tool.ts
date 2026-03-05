import { tool } from 'ai'
import z from 'zod'
import { redis } from '../../redis/client'

const redisParams = z.object({
  command: z
    .string()
    .describe('O comando a ser executado no Redis como GET, HGET, ZREVRANGE.'),
  args: z
    .array(z.string())
    .describe('Argumentos que vêm logo após o comando do Redis.'),
})

type RedisParams = z.infer<typeof redisParams>

export const redisTool = tool({
  description: `
        Realiza um comando no Redis para buscar informações sobre o sistema de indicações, como número de cliques no link, número de indicações (convites) realizados e ranking de indicações.
         
         Só pode ser utilizada para buscar dados do Redis, não pode executar nenhum comando de escrita.

        Você pode buscar dados de:
          - Um hash chamado "referral:access-count" que guarda o número de cliques/acessos no link de convite/indicação de cada usuário no formato { "SUBSCRIBER_ID": NUMERO_DE_CLIQUES } onde o SUBSCRIBER_ID vem do Postgres. 
          - Um zset chamado "referral:ranking" que guarda o total de convites/indicações feitas por cada usuário onde o score é a quantidade de convites e o conteúdo é o SUBSCRIBER_ID que vem do Postgres.
        `.trim(),
  inputSchema: redisParams,
  execute: async ({ command, args }: RedisParams) => {
    const result = await redis.call(command, args)

    return JSON.stringify(result)
  },
})
