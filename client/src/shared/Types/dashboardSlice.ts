interface WatchlistItem {
  name: string;
  link: string;
}

interface VideoItem {
  title: string;
  link: string;
}

interface ChartLinkScannerItem {
  name: string;
  link: string;
  description: string;
}

interface TelegramChannelItem {
  name: string;
  description: string;
  link: string;
}

interface TradingViewHPAIndicatorItem {
  title: string;
  description: string;
  link: string;
  youtubeVideos: string[];
}
interface ChartLinkDashboards {
  name: string;
  link: string;
  description: string;
}

export interface Dashboard {
  hommaPersonalWatchlist: WatchlistItem[];
  sectorWatchList: WatchlistItem[];
  youtubeVideos: VideoItem[];
  hpaVideos: VideoItem[];
  chartLinkScanners: ChartLinkScannerItem[];
  chartLinkDashboards: ChartLinkDashboards[];
  telegramChannel: TelegramChannelItem[];
  tradingViewHPAIndicators: TradingViewHPAIndicatorItem[];
}
