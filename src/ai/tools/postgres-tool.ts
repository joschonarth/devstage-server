import { tool } from 'ai'
import z from 'zod'
import { pg } from '../../drizzle/client'

const postgresParams = z.object({
  query: z.string().describe('A query do PostgreSQL para ser executada.'),
  params: z.array(z.string()).describe('Parâmetros da query a ser executada.'),
})

type PostgresParams = z.infer<typeof postgresParams>

export const postgresTool = tool({
  description: `
         Realiza uma query no Postgres para buscar informações sobre as tabelas do banco de dados.
         
         Só pode realizar operações de busca (SELECT), não é permitido a geração de qualquer operação de escrita.

         Tables:
          """
          CREATE TABLE "subscriptions" (
            "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
            "name" text NOT NULL,
            "email" text NOT NULL,
            "created_at" timestamp DEFAULT now() NOT NULL,
            CONSTRAINT "subscriptions_email_unique" UNIQUE("email")
          );
          """

          Todas operações devem retornar um máximo de 50 itens.
        `.trim(),
  inputSchema: postgresParams,
  execute: async ({ query, params }: PostgresParams) => {
    const result = await pg.unsafe(query, params)

    return JSON.stringify(result)
  },
})
