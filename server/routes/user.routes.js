import express from 'express';
import userCtrl from '../controllers/user.controller.js';
import authCtrl from '../controllers/auth.controller.js';

const router = express.Router();

router.route('/users')
    .get(userCtrl.list) // Listing users with GET
    .post(userCtrl.create); //Creating new users with POST

router.route('/users/:userId')
    .get(authCtrl.requireSignin, userCtrl.read) // Fetching user details with GET
    .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update) // Updating user with PUT
    .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove); //Deleting user with DELETE

router.param('userId', userCtrl.userById);

export default router;