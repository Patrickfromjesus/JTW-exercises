const CadasteredModel = (sequelize, DataTypes) => {
  const Cadastered = sequelize.define('Cadastered', {
    id: { primaryKey: true, type: DataTypes.INTEGER, autoIncrement: true },
    name: DataTypes.STRING,
    password: DataTypes.STRING,
  }, { timestamps: false, tableName: 'Cadastered' });
  return Cadastered;
};

module.exports = CadasteredModel;
