const mongoose = require('mongoose');
const { user, thought } = require('./../models');
const { userSeed, thoughtSeed } = require('./data');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

async function seedDB() {
    user.deleteMany({})
    .then(() => user.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.insertedCount + " users seeded");
    })
    .then(() => thought.deleteMany({}))
    .then(() => thought.collection.insertMany(thoughtSeed))
    .then(data => {
        console.log(data.insertedCount + " thoughts seeded");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
}

seedDB();