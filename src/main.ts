import { serverConfig as config } from '@/config'
import {
  connectDatabase,
  disconnectedDatabase
} from '@/infrastructure/database/connection'
import app from '@/server'
import log from '@/shared/utils/logger'

const startServer = async () => {
  try {
    await connectDatabase()

    app.listen(config.port, () => {
      log.info(`🔨 API available on the route ${config.apiBasePath}`)
    })
    process.on('SIGINT', disconnectedDatabase)
    process.on('SIGTERM', disconnectedDatabase)
  } catch (error) {
    log.error(`❌ Failed to start server ${error}`)
    process.exit()
  }
}
startServer()
