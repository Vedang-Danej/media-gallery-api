import express from 'express';
import dotenv from 'dotenv';
import animalRoutes from './routes/animalRoutes.js';
import familyRoutes from './routes/familyRoutes.js';
import friendsRoutes from './routes/friendsRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import connectDB from './config/db.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import { homePhotos } from './data/Family/Home/homePhotos.js';
import { homeVideos } from './data/Family/Home/homeVideos.js';
import { friendsPhotosData } from './data/Friends/friendsPhotos.js';
import Image from './models/imageModel.js';
import Video from './models/videoModel.js';
import { miscPhotos } from './data/Family/MISC/familyMISC.js';
import { dogPhotos } from './data/Animals/Dogs/dogPhotos.js';
import { dogVideos } from './data/Animals/Dogs/dogVideos.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use('/api/animals', animalRoutes);
app.use('/api/family', familyRoutes);
app.use('/api/friends', friendsRoutes);
app.use('/api/admin', adminRoutes);

if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.status(301);
    res.redirect('https://media-gallery-vedang.netlify.app/');
  });
}

app.use(notFound);
app.use(errorHandler);

// const familyMisc = new Image({
//   name: 'animals/cats/photos',
//   photos: [],
// });

// familyMisc.save();

// const newVideosUpload = new Video({
//   name: 'animals/cats/videos',
//   videos: [],
// });
// newVideosUpload.save();

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('API is running...'));
