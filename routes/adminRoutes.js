import express from 'express';
import { adminLogin, uploadPhoto, uploadVideo } from '../controllers/adminController.js';

const router = express.Router();

router.post('/login', adminLogin);

router.post('/upload/photo', uploadPhoto);

router.post('/upload/video', uploadVideo);

export default router;
