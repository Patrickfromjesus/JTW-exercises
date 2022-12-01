require('dotenv').config();
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

const validateToken = async (req, res, next) => {
  const header = req.header('Authorization');
  jwt.verify(header, SECRET, (err, decode) => {
    if (err) return res.status(401).json({ message: "Access Denied." });
    req.userId = decode;
    next();
  });
};

module.exports = validateToken;
