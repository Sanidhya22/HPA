import HPARequest from '../models/premiumRequests.modal.js';
import { User } from '../models/user.model.js';

// Submit a new premium service request
export const submitRequest = async (req, res, next) => {
  try {
    const { username, email } = req.body;
    const newRequest = await HPARequest.create({ username, email });

    await User.findOneAndUpdate(
      { email: email },
      { $set: { premiumStatus: 'pending' } },
      { new: true }
    );

    res.status(201).json(newRequest);
  } catch (error) {
    next(error);
  }
};

// Accept a premium service request
export const acceptRequest = async (req, res, next) => {
  try {
    const request = await HPARequest.findByIdAndUpdate(
      req.params.id,
      { status: 'accepted', respondedAt: new Date() },
      { new: true }
    );
    const premiumExpires = new Date();
    premiumExpires.setFullYear(premiumExpires.getFullYear() + 1);

    await User.findOneAndUpdate(
      { email: request.email },
      {
        $set: {
          premiumStatus: 'accepted',
          isPremium: true,
          premiumSince: new Date(),
          premiumExpires: premiumExpires,
        },
      },
      { new: true }
    );

    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }
    res.status(200).json(request);
  } catch (error) {
    next(error);
  }
};

// Decline a premium service request
export const declineRequest = async (req, res, next) => {
  try {
    const request = await HPARequest.findByIdAndUpdate(
      req.params.id,
      { status: 'declined', respondedAt: new Date() },
      { new: true }
    );
    await User.findOneAndUpdate(
      { email: request.email },
      { $set: { premiumStatus: 'declined' } },
      { new: true }
    );

    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }
    res.status(200).json(request);
  } catch (error) {
    next(error);
  }
};
