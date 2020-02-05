const User = require('../models').User

module.exports = {
  list (req, res) {
    return User.findAll({})
      .then(User => res.status(200).send(User))
      .catch(error => {
        res.status(400).send(error)
      })
  },
  getById (req, res) {
    return User.findById(req.params.id)
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found'
          })
        }
        return res.status(200).send(user)
      })
      .catch(error => res.status(400).send(error))
  },
  add (req, res) {
    return User.create({
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender
    })
      .then(User => res.status(201).send(User))
      .catch(error => res.status(400).send(error))
  },
  updateUser (req, res) {
    return User.findById(req.params.id, {})
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found'
          })
        }
        return user
          .update({
            name: req.body.name || user.gender,
            age: req.body.age || user.age,
            gender: req.body.gender || user.gender
          })
          .then(() => res.status(200).send(user))
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error))
  }
}
