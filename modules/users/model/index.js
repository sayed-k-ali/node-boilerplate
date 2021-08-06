const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../../database/models");
const bcrypt = require('bcrypt');

class UserModel extends Model{}

UserModel.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
    /**
     * lanjutin aja, ini cuma sampel
     */
  },
  {
    sequelize: sequelize,
    timestamps: true,
    tableName: 'users'
  }
);

UserModel.beforeSave(function(user, options){
  const salt = bcrypt.genSaltSync(10)
  user.password = bcrypt.hashSync(user.email + user.password, salt)
  return user.password
});

UserModel.sync({
  alter: process.env.NODE_ENV == 'test' || false,
  force: false
})

module.exports = UserModel;