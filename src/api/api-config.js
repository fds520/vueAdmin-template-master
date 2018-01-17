// 后台api接口根据不同环境切换不同地址
const nodeEnv = process.env.NODE_ENV
if (nodeEnv === 'development') {
  module.exports = require('./api-dev')
} else if (nodeEnv === 'production') {
  module.exports = require('./api-prod')
}
