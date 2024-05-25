import mongoose from 'mongoose';

const HPARequestSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'declined'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  respondedAt: Date,
});

const HPARequest = mongoose.model('HPARequest', HPARequestSchema);

export default HPARequest;
