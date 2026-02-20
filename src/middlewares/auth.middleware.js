// Json Web Token
const jwt = require('jsonwebtoken');

// Check authentication
// ...
const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    // No authorization
    if (!authHeader) {
        return res.status(401).json({ message: 'Token missing' });
    }

    // Get token
    const token = authHeader.split(' ')[1];

    // Compare token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = authenticate;