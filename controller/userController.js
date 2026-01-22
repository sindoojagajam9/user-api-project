const { use } = require("react");
const users = require("../models/userModel");

exports.createUser = (req, res) => {
    const user = {
        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email
    }

    users.push(user);
    res.status(201).json(user);
}

exports.getUsers = (req, res) => {
    res.status(200).json(users);
}

exports.getUserById = (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    if(!user) {
        return res.status(404).json({ message: "User not found"});
    }

    res.status(200).json(user);
}

exports.updateUser = (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    if(!user) {
        return res.status(404).json({ message: "User not found"});
    }

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    res.status(200).json(user);
}

exports.deleteUser = (req, res) => {
    const index = users.findIndex(u => u.id === req.params.id);
    if(index === -1) {
        return res.status(404).json({ message: "User not found"});
    }

    users.splice(index, 1);
    res.status(200).json({ message: "User has been deleted successfully"})
}