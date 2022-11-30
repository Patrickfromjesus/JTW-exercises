const { User, Cadastered } = require('../models');

const cadaster = async (infos) => {
  const data = await Cadastered.create(infos);
  return data;
};

const login = async ({ name, password }) => {
  const data = await Cadastered.findAll({ where: { name, password } });
  return data;
};

const getAll = async () => {
  const data = await User.findAll();
  return data;
}

const deleteCadastered = async (id) => {
  const data = await Cadastered.destroy({ where: { id } });
  return data;
};

module.exports = {
  login,
  cadaster,
  getAll,
  deleteCadastered,
};
