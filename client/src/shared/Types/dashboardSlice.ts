interface WatchlistItem {
  title: string;
  link: string;
}

interface SectorWatchlistItem extends WatchlistItem {
  description: string;
}
interface VideoItem {
  title: string;
  link: string;
}

interface ChartLinkScannerItem {
  title: string;
  link: string;
  description: string;
}

interface TelegramChannelItem {
  title: string;
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
  title: string;
  link: string;
  description: string;
}

export interface Dashboard {
  hommaPersonalWatchlist: WatchlistItem[];
  sectorWatchList: SectorWatchlistItem[];
  youtubeVideos: VideoItem[];
  hpaVideos: VideoItem[];
  chartLinkScanners: ChartLinkScannerItem[];
  chartLinkDashboards: ChartLinkDashboards[];
  telegramChannel: TelegramChannelItem[];
  tradingViewHPAIndicators: TradingViewHPAIndicatorItem[];
}
