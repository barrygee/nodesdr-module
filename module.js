const NodeSDRModule = require('../../core/NodeSDRModule')
const router        = require('./router')

class TemplateModule extends NodeSDRModule {

  constructor() {
    super()

    return router.routes(this.router)
  }
}

module.exports = TemplateModule