const User = require('../models/user');
const Thought = require('../models/Thought');
const userController = {

    getAllUsers: async (req, res) => {
        try {
            const dbUserData = await User.find({});
            res.json(dbUserData);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Error getting all users', details: err.message });
        }
    },
};


module.exports = userController;