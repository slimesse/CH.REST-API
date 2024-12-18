const User = require("../models/User");

exports.listUsers = async (_req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };


  exports.getUserById = async (req, res) => {
    try {
        const { id } = req.params; 
        const user = await User.findById(id); 
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


exports.adduser = async (req, res) => {
    try {
      const { name, email, age, Phone } = req.body;
      const newUser = new User({ name, email, age, Phone });
      await newUser.save();
      res.status(200).json(newUser);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

exports.updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
      res.json(updatedUser);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  exports.delUser = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedUser = await User.findByIdAndDelete(id);
      res.json(deletedUser);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }