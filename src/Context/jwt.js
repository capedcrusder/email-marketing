const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./config');

function generateToken(email) {
    return jwt.sign({ email }, JWT_SECRET);
}

function verifyToken(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: "Unauthorized: No token provided" });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: "Unauthorized: Invalid token" });
        }
        req.email = decoded.email;
        next();
    });
}

module.exports = { generateToken, verifyToken };
