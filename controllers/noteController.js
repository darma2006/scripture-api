const Note = require("../models/noteModel");

// GET ALL
exports.getAll = async (req, res) => {
  try {
    const data = await Note.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET ONE
exports.getOne = async (req, res) => {
  try {
    const data = await Note.findById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// POST
exports.create = async (req, res) => {
  try {
    const newItem = new Note(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json(error);
  }
};

// PUT
exports.update = async (req, res) => {
  try {
    await Note.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json("Updated");
  } catch (error) {
    res.status(500).json(error);
  }
};

// DELETE
exports.delete = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};