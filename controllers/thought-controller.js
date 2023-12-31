const Thought = require("../models/thought");
const User = require("../models/user");
const userController = {
  //Get all thoughts
  getAllThoughts: async (req, res) => {
    try {
      const dbThoughtData = await Thought.find({});
      res.json(dbThoughtData);
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ error: "Error getting all thoughts", details: err.message });
    }
  },
  // Create a new thought
  createThought: async (req, res) => {
    try {
      const { thoughtText, username, userId } = req.body;

      const newThought = new Thought({
        thoughtText,
        username,
        userId,
      });

      const dbThoughtData = await newThought.save();

      await User.findByIdAndUpdate(
        userId,
        { $push: { thoughts: dbThoughtData._id } },
        { new: true, useFindAndModify: false }
      );

      res.status(200).json(dbThoughtData);
    } catch (err) {
      res
        .status(500)
        .json({ error: "Error creating a thought", details: err.message });
    }
  },
  // Update a thought by id
  updateThought: async (req, res) => {
    try {
      const { thoughtText } = req.body;

      const updatedThought = await Thought.findByIdAndUpdate(
        req.params.id,
        { thoughtText },
        { new: true, runValidators: true, context: "query" }
      );

      if (!updatedThought) {
        return res.status(404).json({ message: "No thought with this id" });
      }

      res.json(updatedThought);
    } catch (err) {
      res
        .status(500)
        .json({ error: "Error updating a thought", details: err.message });
    }
  },
  // Get a thought by id
  getThoughtById: async (req, res) => {
    try {
      const dbThoughtData = await Thought.findById(req.params.id);

      if (!dbThoughtData) {
        return res.status(404).json({ message: "No thought with this id" });
      }

      res.json(dbThoughtData);
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ error: "Error getting a thought by id", details: err.message });
    }
  },
  // Delete a thought by id
  deleteThought: async (req, res) => {
    try {
      const dbThoughtData = await Thought.findByIdAndDelete(req.params.id);
      if (!dbThoughtData) {
        return res.status(404).json({ message: "No thought with this id" });
        return;
      }
      res.send(`Thought ${req.params.id} deleted`);
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ error: "Error deleting a thought", details: err.message });
    }
  },
  // Add a reaction to a thought
  addReaction: async (req, res) => {
    try {
      const { reactionBody, username } = req.body;

      const updatedThought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $push: { reactions: { reactionBody, username } } },
        { new: true, runValidators: true, context: "query" }
      );

      if (!updatedThought) {
        return res.status(404).json({ message: "No thought with this id" });
      }

      res.json(updatedThought);
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ error: "Error adding a reaction", details: err.message });
    }
  },
  // Remove a reaction from a thought
  removeReaction: async (req, res) => {
    try {
      const updatedThought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true, useFindAndModify: false }
      );

      if (!updatedThought) {
        return res.status(404).json({ message: "No thought with this id" });
      }

      res.json(updatedThought);
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ error: "Error removing a reaction", details: err.message });
    }
  },
};

module.exports = userController;
