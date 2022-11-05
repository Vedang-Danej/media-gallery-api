import asyncHandler from 'express-async-handler';
import { shuffle } from '../Utils/RandomShuffle.js';
import Image from '../models/imageModel.js';
import Video from '../models/videoModel.js';

export const loginFamily = asyncHandler(async (req, res) => {
  if (req.body.password !== process.env.FAMILY_PASSWORD) {
    res.status(401);
    throw new Error('Incorrect Password. Try again or ask Admin for Password');
  }
  res.json({ message: 'Logged In' });
});

export const familyHomePhotos = asyncHandler(async (req, res) => {
  if (req.body.password !== process.env.FAMILY_PASSWORD) {
    res.status(401);
    throw new Error('Incorrect Password. Try again or ask Admin for Password');
  }
  const { photos } = await Image.findOne({ name: 'family/home/photos' });
  shuffle(photos);
  res.json(photos);
});

export const familyHomeVideos = asyncHandler(async (req, res) => {
  if (req.body.password !== process.env.FAMILY_PASSWORD) {
    res.status(401);
    throw new Error('Incorrect Password. Try again or ask Admin for Password');
  }
  const { videos } = await Video.findOne({ name: 'family/home/videos' });
  shuffle(videos);
  res.json(videos);
});

export const familyMiscPhotos = asyncHandler(async (req, res) => {
  if (req.body.password !== process.env.FAMILY_PASSWORD) {
    res.status(401);
    throw new Error('Incorrect Password. Try again or ask Admin for Password');
  }
  const { photos } = await Image.findOne({ name: 'family/misc/photos' });
  shuffle(photos);
  res.json(photos);
});
