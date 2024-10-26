import User from '../models/user.model.js';
import extend from 'lodash/extend.js';
import errorHandler from '../helper/dbErrorHandler.js';

const create = async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        return res.status(200).json({
            message: "Successfully signed up!"
        });
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        });
    }
}
const list = async (req, res) => {
    try {
        let users = await User.find().select('name email updated created');
        res.json(users);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        });
    }
}
const userById = async (req, res, next,id) => {
    try {
        let user = await User.findById(id);
        if (!user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        req.profile = user;
        next();
    } catch (err) {
        res.status(400).json({
            error: 'Could not retrieve User'
        });
    }
}

const read = (req, res, next) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    return res.json(req.profile);
}
const update = async (req, res) => {
    try {
        let user = req.profile;
        user = extend(user, req.body);
        user.updated = Date.now();
        await user.save();
        user.hashed_password = undefined;
        user.salt = undefined;
        res.json(user);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        });
    }
}
const remove = async (req, res) => {
    try {
        let user = req.profile;
        let deleteUser = await user.remove();
        deleteUser.hashed_password = undefined;
        deleteUser.salt = undefined;
        res.json(deleteUser);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        });
    }
}

export default { create, list, userById, read, update, remove };
