export default {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  apiPrefix: process.env.API_PREFIX || '/api',
  apiVersion: process.env.API_VERSION || 'v1',
  apiBasePath: `${process.env.API_PREFIX || '/api'}/${process.env.API_VERSION || 'v1'}`
}
