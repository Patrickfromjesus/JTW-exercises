const UsersModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { primaryKey: true, type: DataTypes.INTEGER },
    name: DataTypes.STRING,
  }, { timestamps: false });
  return User;
};

module.exports = UsersModel;
