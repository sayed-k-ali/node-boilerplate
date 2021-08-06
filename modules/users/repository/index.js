class UserRepository {
  constructor({model}){
    this.model = model;
  }

  async createUser(userData) {
    return new Promise((resolve, reject) => {
      this.model.create(userData)
        .then((document) => resolve(document))
        .catch((error) => reject(error))
    })
  }

  async gets() {
    return new Promise((resolve, reject) => {
      this.model.findAll()
        .then((document) => resolve(document))
        .catch((error) => reject(error))
    })
  }

  async deleteAllData() {
    require('assert').equal(process.env.NODE_ENV, 'test')
    return new Promise((resolve, reject) => {
      this.model.destroy({truncate: true})
        .then((status) => resolve(status))
        .catch((error) => reject(error))
    })
  }
}

module.exports = UserRepository;