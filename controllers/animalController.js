import asyncHandler from 'express-async-handler';
import { shuffle } from '../Utils/RandomShuffle.js';
import Image from '../models/imageModel.js';
import Video from '../models/videoModel.js';

export const getMyPetPhotos = asyncHandler(async (req, res) => {
  const { photos } = await Image.findOne({ name: 'animals/mypets/photos' });
  // shuffle(photos);
  res.json(photos);
});

export const getMyPetVideos = asyncHandler(async (req, res) => {
  const { videos } = await Video.findOne({ name: 'animals/mypets/videos' });
  shuffle(videos);
  res.json(videos);
});
export const getCatPhotos = asyncHandler(async (req, res) => {
  const { photos } = await Image.findOne({ name: 'animals/cats/photos' });
  // shuffle(photos);
  res.json(photos);
});

export const getCatVideos = asyncHandler(async (req, res) => {
  const { videos } = await Video.findOne({ name: 'animals/cats/videos' });
  // shuffle(videos);
  res.json(videos);
});
export const getDogPhotos = asyncHandler(async (req, res) => {
  const { photos } = await Image.findOne({ name: 'animals/dogs/photos' });
  // shuffle(photos);
  res.json(photos);
});

export const getDogVideos = asyncHandler(async (req, res) => {
  const { videos } = await Video.findOne({ name: 'animals/dogs/videos' });
  // shuffle(videos);
  res.json(videos);
});
