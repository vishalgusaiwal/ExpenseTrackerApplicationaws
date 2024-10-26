import express from 'express';
import authCtrl from '../controllers/auth.controller.js';

const router = express.Router();

router.route('/auth').post(authCtrl.signin);
router.route('/auth').get(authCtrl.signout);

export default router;