class UserService {
  constructor({repository}) {
    this.repository = repository;
  }

  async createUserOrError(userData) {
    try{
      /**
       * tambahin validasi kalo pake validasi disini
       */
      const userCreated = await this.repository.createUser(userData)
      return { status: 201, data: 'User created' };
    }catch(error) {
      return { status: 500, data: error}
    }
  }

  async getAllUserAsList() {
    const users = await this.repository.gets();
    return { status: 200, data: users }
  }
}

module.exports = UserService;