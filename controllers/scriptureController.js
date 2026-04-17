const Scripture = require("../models/scriptureModel");

// GET ALL
exports.getAll = async (req, res) => {
  try {
    const data = await Scripture.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ONE
exports.getOne = async (req, res) => {
  try {
    const data = await Scripture.findById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST
exports.create = async (req, res) => {
  try {
    if (!req.body.title || !req.body.book) {
      return res.status(400).json("Missing fields");
    }

    const newItem = new Scripture(req.body);
    await newItem.save();

    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT
exports.update = async (req, res) => {
  try {
    await Scripture.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json("Updated");
  } 
  catch (error) {
    res.status(500).json({ error: error.message });
  }
  if (!req.body.title || !req.body.book) {
  return res.status(400).json("Missing fields");
    }
};

// DELETE
exports.delete = async (req, res) => {
  try {
    await Scripture.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};