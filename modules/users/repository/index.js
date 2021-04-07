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
}

module.exports = UserRepository;