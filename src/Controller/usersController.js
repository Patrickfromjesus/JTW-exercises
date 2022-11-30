require('dotenv').config();
const usersService = require('../Services/usersService');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

const cadaster = async (req, res) => {
  try {
  if (!req.body.name || !req.body.password) return res.status(400).json({ message: 'Informe name e password' });
  const { name, password } = req.body;
  const response = await usersService.cadaster({ name, password });
  return res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCadastered = async (req, res) => {
  try {
    const { id } = req.params;
  if (!id) return res.status(400).json({ message: 'Informe o id' });
  const response = await usersService.deleteCadastered(id);
  return res.status(204).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
try {
  if (!req.body.name || !req.body.password) return res.status(400).json({ message: 'Informe name e password' });
  const { name, password } = req. body;
  const response = await usersService.login({ name, password });
  if (!response) return res.status(404).json({ message: 'Usuário não cadastrado!' });
  const token = jwt.sign({ data: { userId: response } }, SECRET, { expiresIn: 600 });
  return res.status(200).json({ message: 'Login sucessufy', token });
} catch (error) {
  return res.status(500).json({ message: error.message });
}
};

const getAll = async (req, res) => {
  try {
    const id = req.userId;
    const response = await usersService.getAll();
    return res.status(200).json({ id, response });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  cadaster,
  login,
  getAll,
  deleteCadastered,
};