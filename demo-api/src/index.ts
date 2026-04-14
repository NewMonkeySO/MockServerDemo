import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { orders } from './router/orders/index.js'
import { terms } from './router/terms/index.js'
import { services } from './router/services/index.js'
import { passengers } from './router/passengers/index.js'
import { stops } from './router/stops/index.js'
import { reservations } from './router/reservations/index.js'
import { vehicles } from './router/vehicles/index.js'
import { operation } from './router/operation/index.js'

const app = new Hono()

app.route('/', orders)
app.route('/', terms)
app.route('/', services)
app.route('/', passengers)
app.route('/', stops)
app.route('/', reservations)
app.route('/', vehicles)
app.route('/', operation)

serve({
  fetch: app.fetch,
  port: 8000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})

export default app;