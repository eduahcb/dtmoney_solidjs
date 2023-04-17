import { faker } from '@faker-js/faker'

import { createServer, Model } from 'miragejs'

import { factories } from './factories'

export default () => {

}

export const fakeApi = (environment = 'development') => {
  return createServer({
    environment,
    models: {
      transaction: Model
    },

    factories,

    seeds (server) {
      server.createList('transaction', 10)
    },

    routes () {
      this.namespace = 'api'

      this.get('/transactions', (schema) => {
        return {
          transactions: schema.all('transaction').models
        }

        // return new Response(500, {}, {
        //   message: 'error'
        // })
      })

      this.post('/transactions', (schema, request) => {
        const transaction = JSON.parse(request.requestBody)

        transaction.createdAt = faker.date.recent().toISOString()

        const result = schema.create('transaction', transaction)

        return {
          result
        }
      })
    }
  })
}
