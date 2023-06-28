const mongoose = require('mongoose');
const { User, Thought } = require('./../models');
const { userSeed, thoughtSeed } = require('./data');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

async function seedDB() {
    User.deleteMany({})
    .then(() => User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.insertedCount + " records inserted!");
    })
    .then(() => Thought.deleteMany({}))
    .then(() => Thought.collection.insertMany(thoughtSeed))
    .then(data => {
        console.log(data.insertedCount + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
}