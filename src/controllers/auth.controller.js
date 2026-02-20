// Json Web Token
const jwt = require('jsonwebtoken');
// Models
const User = require('../models/user.model');
// Utils
const { hashPassword, compearePassword, comparePassword } = require('../utils/password');

// Register an user
// ...
const register = async (req, res) => {
    const { email, password } = req.body;

    // Find the user
    const existingUser = await User.findByEmail(email);

    // Already exist
    if (existingUser) {
        return res.status(409).json({ message: 'User already exists' });
    }

    // Create user
    const hashedPassword = await hashPassword(password);
    await User.create({ email, password: hashedPassword });

    res.status(201).json({ message: 'User created' });
};

// Connection attempt
// ...
const login = async (req, res) => {
    const { email, password } = req.body;

    // Check email
    const user = await User.findByEmail(email);
    if (!user) {
        return res.status(401).json({ message: 'Email user not find' });
    }

    // Compare password
    const isValid = await comparePassword(password, user.password);
    if (!isValid) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Define token
    const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.json({ token });
};

module.exports = {
    register,
    login
};