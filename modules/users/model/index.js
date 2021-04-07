const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../../database/models");

class UserModel extends Model{}

UserModel.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: DataTypes.STRING,
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

/**
 * lebih baik jangan di sinkron, tapi pake migration aja di /database/migrations
 * biar aman
 */
process.env.NODE_ENV == 'development' && UserModel.sync({alter: true, force: false}) //line ini boleh di hapus kalo pake migration

module.exports = UserModel;