function routes(router) {

  router.get('/my-module', (req, res) => {
    res.send('My Module')
  })

  return router
}

module.exports = {
  routes
}