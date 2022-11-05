import express from 'express';
const router = express.Router();
import {
  getCatPhotos,
  getCatVideos,
  getDogPhotos,
  getDogVideos,
  getMyPetPhotos,
  getMyPetVideos,
} from '../controllers/animalController.js';

router.get('/mypets/photos', getMyPetPhotos);

router.get('/mypets/videos', getMyPetVideos);

router.get('/cats/photos', getCatPhotos);

router.get('/dogs/photos', getDogPhotos);

router.get('/cats/videos', getCatVideos);

router.get('/dogs/videos', getDogVideos);

export default router;
