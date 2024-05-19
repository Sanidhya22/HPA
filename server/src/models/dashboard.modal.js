import mongoose, { Schema } from 'mongoose';

const DashboardSchema = new Schema({
  hommaPersonalWatchlist: [
    {
      name: String,
      link: String,
    },
  ],
  sectorWatchList: [
    {
      name: String,
      link: String,
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
      name: String,
      link: String,
      description: String,
    },
  ],

  telegramChannel: [
    {
      name: String,
      description: String,
      link: String,
    },
  ],
  tradingViewHPAIndicators: [
    {
      title: String,
      description: String,
      link: String,
    },
  ],
});

export const Dashboard = mongoose.model('Dashboard', DashboardSchema);
