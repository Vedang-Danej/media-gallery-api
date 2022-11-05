import asyncHandler from 'express-async-handler';
import Image from '../models/imageModel.js';
import Video from '../models/videoModel.js';

export const adminLogin = asyncHandler(async (req, res) => {
  if (req.body.password !== process.env.ADMIN_PASSWORD) {
    res.status(401);
    throw new Error('Access denied. Admin only.');
  }
  res.json({ message: 'Logged In' });
});

export const uploadPhoto = asyncHandler(async (req, res) => {
  if (req.body.passwordAdmin !== process.env.ADMIN_PASSWORD) {
    res.status(401);
    throw new Error('Access denied. Admin only.');
  }
  const { root, branch, mediaID, orientation } = req.body;
  const resolution = orientation.split(':');
  resolution[0] = Number(resolution[0]);
  resolution[1] = Number(resolution[1]);
  if (mediaID.length !== 33) throw new Error('ID format is Wrong');
  let path = root + '/';
  if (branch !== 'nobranch') path += branch + '/';
  path += 'photos';
  const imageObject = {
    src: `https://drive.google.com/uc?id=${mediaID}`,
  };
  imageObject.width = resolution[0];
  imageObject.height = resolution[1];
  const imageArray = await Image.findOne({ name: path });
  imageArray.photos.push(imageObject);
  imageArray.save();
  res.json({ message: 'Logged In' });
});

export const uploadVideo = asyncHandler(async (req, res) => {
  if (req.body.passwordAdmin !== process.env.ADMIN_PASSWORD) {
    res.status(401);
    throw new Error('Access denied. Admin only.');
  }
  const { root, branch, mediaID, potrait } = req.body;
  if (mediaID.length !== 33) throw new Error('ID format is Wrong');
  let path = root + '/';
  if (branch !== 'nobranch') path += branch + '/';
  path += 'videos';
  const videoObject = {
    src: `https://drive.google.com/file/d/${mediaID}/preview?autoplay=0`,
  };
  videoObject.potrait = potrait;
  const videoArray = await Video.findOne({ name: path });
  videoArray.videos.push(videoObject);
  videoArray.save();
  res.json({ message: 'Logged In' });
});
