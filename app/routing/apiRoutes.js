const friends = require('../data/friends.js')

module.exports = app => {
  app.get('/friends', (req, res) => {
    res.json(friends)
  })

  app.post('/friends', (req, res) => {
    
  })

  //app.get('../public/home')
}