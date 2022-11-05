import express from 'express';
import { friendsPhotos, loginFriends } from '../controllers/friendsController.js';

const router = express.Router();

router.post('/login', loginFriends);

router.post('/photos', friendsPhotos);

export default router;
