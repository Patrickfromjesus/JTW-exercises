const CarsModel = (sequelize, DataTypes) => {
  const Car = sequelize.define('Car', {
    id: { primaryKey: true, type: DataTypes.INTEGER },
    car: DataTypes.STRING,
  }, { timestamps: false });
  return Car;
};

module.exports = CarsModel;
