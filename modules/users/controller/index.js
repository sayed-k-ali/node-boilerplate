class UserController {
  constructor({service}) {
    this.service = service;
    this.create = this.create.bind(this);
    this.getAllUser = this.getAllUser.bind(this);
  }

  async create(req, res) {
    const {status, data} = await this.service.createUserOrError(req.body);
    return res.status(status).json(data)
  }

  async getAllUser(req, res) {
    const {status, data} = await this.service.getAllUserAsList();
    return res.status(status).json(data);
  }
}

module.exports = UserController;