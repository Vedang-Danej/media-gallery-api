import mongoose from 'mongoose';

const imageSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  photos: [
    {
      src: { type: String, required: true },
      width: { type: Number, required: true },
      height: { type: Number, required: true },
    },
  ],
});

const Order = mongoose.model('Image', imageSchema);

export default Order;
