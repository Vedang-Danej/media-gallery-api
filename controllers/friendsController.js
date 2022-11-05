import asyncHandler from 'express-async-handler';
import { shuffle } from '../Utils/RandomShuffle.js';
import Image from '../models/imageModel.js';
import Video from '../models/videoModel.js';

export const loginFriends = asyncHandler(async (req, res) => {
  if (req.body.password !== process.env.FRIENDS_PASSWORD) {
    res.status(401);
    throw new Error('Incorrect Password. Try again or ask Admin for Password');
  }
  res.json({ message: 'Logged In' });
});

export const friendsPhotos = asyncHandler(async (req, res) => {
  if (req.body.password !== process.env.FRIENDS_PASSWORD) {
    res.status(401);
    throw new Error('Incorrect Password. Try again or ask Admin for Password');
  }
  const { photos } = await Image.findOne({ name: 'friends/photos' });
  // shuffle(photos);
  res.json(photos);
});
