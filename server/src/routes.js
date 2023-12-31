const UserController = require('./controllers/UserController')

module.exports = (app) => {
  app.get('/users', UserController.index),

  app.post('/add', UserController.add),

  app.put('/user/:userId', UserController.put),

  app.delete('/user/:userId', UserController.delete),

  app.get('/user/:userId', UserController.show)

}