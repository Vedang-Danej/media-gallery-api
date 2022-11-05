import express from 'express';
import {
  familyHomePhotos,
  familyHomeVideos,
  familyMiscPhotos,
  loginFamily,
} from '../controllers/familyController.js';

const router = express.Router();

router.post('/login', loginFamily);

router.post('/home/photos', familyHomePhotos);
router.post('/home/videos', familyHomeVideos);
router.post('/misc/photos', familyMiscPhotos);

export default router;
