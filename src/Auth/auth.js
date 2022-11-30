require('dotenv').config();
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

const validateToken = async (req, res, next) => {
  const header = req.header('Authorization');
  const decode = jwt.verify(header, SECRET);
  if (!decode) return res.status(401).json({ message: "Access Denied." });
  req.userId = decode;
  next();
};

module.exports = validateToken;