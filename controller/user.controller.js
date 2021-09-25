// import User from '../model/user-schema.js';
import User from '../model/user-schema.js';

export const getUsers = async (req, res) => {
    try {
        let user = await User.find();
        res.json(user);
    }
    catch (e) {
        res.json({ 'getUsers message': e.message });
    }
    // res.status(200).json("hi from users req res");
}

export const getUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id);
        res.json(user);
    } catch (e) {
        res.json({ 'getUserById message': e.message });
    }
}

export const addUser = async (req, res) => {
    const user = req.body;
    const newUser = new User(user);
    try {
        await newUser.save(); //save method of mongodb to save data there// save is async call so we need await because data ane me time lagega. jab tak save na ho tab tak hold rakhna hai
        res.json(newUser);
    } catch (e) {
        res.json({ 'addUser message': e.message });
    }
    console.log("hellow from post");
    // res.send('post req for add users ');
}

export const editUser = async (req, res) => {
    const user = req.body;
    const editUser = new User(user); //kia wo hamare model(user schema) se match ho ra h?
    try {
        await User.updateOne({ _id: req.params.id }, editUser); //update func depricate ho chuka hai
        res.json(editUser);
    } catch (e) {
        res.json({ 'editUser message': e.message });
    }
}

export const deleteUser = async (req, res) => {
    try {
        await user.deleteOne({ _id: req.params.id });
        res.json("user deleted ");
    } catch (e) {
        res.json({ 'deleteUser message': e.message });
    }
}