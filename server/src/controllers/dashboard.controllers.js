import { Dashboard } from '../models/dashboard.modal.js';
import { sectorWatchlistData } from '../public/mockData.js';

export const getDashboardData = async (req, res) => {
  const dashboardId = process.env.DASHBOARD_ID;
  //   const newWatchlist = await Dashboard.findByIdAndUpdate(dashboardId, {
  //     hommaPersonalWatchlist: [
  //       {
  //         name: 'Homma PF',
  //         link: 'https://in.tradingview.com/watchlists/129403857/',
  //       },
  //       {
  //         name: 'Homma Tight Watchlist',
  //         link: 'https://in.tradingview.com/watchlists/129014128/',
  //       },
  //       {
  //         name: 'Top 100 ultimate Homma',
  //         link: 'https://in.tradingview.com/watchlists/142233210/',
  //       },
  //     ],
  //     sectorWatchList: sectorWatchlistData,
  //   });
  const t = await Dashboard.findById(dashboardId);
  return res.status(200).json({ t });
};
