// Model
const User = require('../models/user.model');

// Get user data
const getProfile = async (req, res) => {
    const userId = req.user.userId;

    const user = await User.findById(userId);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    delete user.password;

    res.json(user);
};

module.exports = {
    getProfile
}