const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, JWT_SECRET);

      // Get admin from token
      req.admin = await Admin.findById(decoded.adminId).select('-password');

      if (!req.admin) {
        return res.status(401).json({ message: '找不到管理者' });
      }

      next();
    } catch (error) {
      console.error('Auth error:', error);
      return res.status(401).json({ message: '認證失敗' });
    }
  }

  if (!token) {
    return res.status(401).json({ message: '未提供認證令牌' });
  }
};

module.exports = { protect };
