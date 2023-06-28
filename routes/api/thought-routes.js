const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

router
.route('/thoughts')
.get(getAllThoughts);

router
.route('thoughts/:id')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

router
.route('thoughts/:userId')
.post(createThought);

router
.route('thoughts/:thoughtId/reactions')
.post(addReaction)
.delete(removeReaction);

module.exports = router;