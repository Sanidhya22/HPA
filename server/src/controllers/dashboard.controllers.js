import { Dashboard } from '../models/dashboard.modal.js';
// import {
//   mockChartlinkDashboards,
//   mockChartLinkScanners,
//   mockHPAVideos,
//   mocksectorWatchlistData,
//   mockTelegramChannel,
//   mockTradingVidewHPAIndicators,
// } from '../public/mockData.js';

export const getDashboardData = async (req, res) => {
  const dashboardId = process.env.DASHBOARD_ID;

  // const newWatchlist = await Dashboard.findByIdAndUpdate(dashboardId, {
  //   hommaPersonalWatchlist: [
  //     {
  //       title: 'Homma PF',
  //       link: 'https://in.tradingview.com/watchlists/129403857/',
  //     },
  //     {
  //       title: 'Homma Tight Watchlist',
  //       link: 'https://in.tradingview.com/watchlists/129014128/',
  //     },
  //     {
  //       title: 'Top 100 ultimate Homma',
  //       link: 'https://in.tradingview.com/watchlists/142233210/',
  //     },
  //   ],
  //   sectorWatchList: mocksectorWatchlistData,

  //   tradingViewHPAIndicators: mockTradingVidewHPAIndicators,
  //   chartLinkDashboards: mockChartlinkDashboards,
  //   chartLinkScanners: mockChartLinkScanners,
  //   telegramChannel: mockTelegramChannel,
  //   hpaVideos: mockHPAVideos,
  // });
  // console.log(newWatchlist);
  const result = await Dashboard.findById(dashboardId);
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
};
