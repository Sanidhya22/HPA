import { Dashboard } from '../models/dashboard.modal.js';

export const getDashboardData = async (req, res, next) => {
  try {
    const dashboardId = process.env.DASHBOARD_ID;

    const result = await Dashboard.findById(dashboardId);

    if (!result) {
      throw new ApiError(404, 'Something went wrong.');
    }

    const {
      hommaPersonalWatchlist,
      sectorWatchList,
      youtubeVideos,
      hpaVideos,
      chartLinkScanners,
      telegramChannel,
      tradingViewHPAIndicators,
      chartLinkDashboards,
    } = result;

    return res.status(200).json({
      hommaPersonalWatchlist,
      sectorWatchList,
      youtubeVideos,
      hpaVideos,
      chartLinkScanners,
      telegramChannel,
      tradingViewHPAIndicators,
      chartLinkDashboards,
    });
  } catch (error) {
    next(error);
  }
};

export const updateDashboardData = async (req, res, next) => {
  const { attributeName, data } = req.body;

  if (!attributeName || !data) {
    throw new ApiError(400, 'Data are required.');
  }

  try {
    const dashboardId = process.env.DASHBOARD_ID;

    const updatedDashboard = await Dashboard.findByIdAndUpdate(
      dashboardId,
      { [attributeName]: data },
      { new: true }
    );

    if (!updatedDashboard) {
      throw new ApiError(404, 'Dashboard not found or could not be updated.');
    }

    return res.status(200).json({
      message: 'Dashboard attribute updated successfully.',
      updatedDashboard,
    });
  } catch (error) {
    next(error);
  }
};
