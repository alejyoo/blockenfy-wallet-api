import express from 'express'
import { errorHandler, securityMiddleware } from '@/presentation/middleware'
import authRoutes from '@/presentation/routes/authRoutes'
import transactionRoutes from '@/presentation/routes/transactionRoutes'
import userRoutes from '@/presentation/routes/userRoutes'
import { serverConfig as config } from './config'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
securityMiddleware(app)

app.use(`${config.apiBasePath}/users`, userRoutes)
app.use(`${config.apiBasePath}/transactions`, transactionRoutes)
app.use(`${config.apiBasePath}/auth`, authRoutes)

app.use(errorHandler)

export default app
