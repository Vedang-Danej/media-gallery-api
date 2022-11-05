import mongoose from 'mongoose';

const videoSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  videos: [
    {
      src: { type: String, required: true },
      potrait: { type: Boolean, required: true },
    },
  ],
});

const Video = mongoose.model('Video', videoSchema);

export default Video;
