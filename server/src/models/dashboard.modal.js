import mongoose, { Schema } from 'mongoose';

const DashboardSchema = new Schema({
  hommaPersonalWatchlist: [
    {
      title: String,
      link: String,
      description: String,
      items: String,
    },
  ],
  sectorWatchList: [
    {
      title: String,
      link: String,
      description: String,
      items: String,
    },
  ],
  youtubeVideos: [
    {
      title: String,
      link: String,
    },
  ],
  hpaVideos: [
    {
      title: String,
      link: String,
    },
  ],
  chartLinkScanners: [
    {
      title: String,
      link: String,
      description: String,
    },
  ],
  chartLinkDashboards: [
    {
      title: String,
      link: String,
      description: String,
    },
  ],

  telegramChannel: [
    {
      title: String,
      description: String,
      link: String,
    },
  ],
  tradingViewHPAIndicators: [
    {
      title: String,
      description: String,
      link: String,
      youtubeVideos: [String],
    },
  ],
});

export const Dashboard = mongoose.model('Dashboard', DashboardSchema);
