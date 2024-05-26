import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { IconButton } from '@material-tailwind/react';
import { MarketData } from 'react-ts-tradingview-widgets';
import {
  useContextDispatch,
  useContextState,
} from '../../shared/AppReducer/app-reducer';

export function OverlayLayout() {
  const MOCK = [
    {
      name: 'Indices',
      originalName: 'Indices',
      symbols: [
        {
          name: 'FOREXCOM:SPXUSD',
          displayName: 'S&P 500',
        },
        {
          name: 'FOREXCOM:NSXUSD',
          displayName: 'Nasdaq 100',
        },
        {
          name: 'FOREXCOM:DJI',
          displayName: 'Dow 30',
        },
        {
          name: 'INDEX:NKY',
          displayName: 'Nikkei 225',
        },
        {
          name: 'INDEX:DEU30',
          displayName: 'DAX Index',
        },
        {
          name: 'FOREXCOM:UKXGBP',
          displayName: 'UK 100',
        },

        {
          name: 'CME_MINI:ES1!',
          displayName: 'S&P 500',
        },
        {
          name: 'CME:6E1!',
          displayName: 'Euro',
        },
        {
          name: 'COMEX:GC1!',
          displayName: 'Gold',
        },
        {
          name: 'NYMEX:CL1!',
          displayName: 'Crude Oil',
        },
        {
          name: 'NYMEX:NG1!',
          displayName: 'Natural Gas',
        },
        {
          name: 'CBOT:ZC1!',
          displayName: 'Corn',
        },

        {
          name: 'CME:GE1!',
          displayName: 'Eurodollar',
        },
        {
          name: 'CBOT:ZB1!',
          displayName: 'T-Bond',
        },
        {
          name: 'CBOT:UB1!',
          displayName: 'Ultra T-Bond',
        },
        {
          name: 'EUREX:FGBL1!',
          displayName: 'Euro Bund',
        },
        {
          name: 'EUREX:FBTP1!',
          displayName: 'Euro BTP',
        },
        {
          name: 'EUREX:FGBM1!',
          displayName: 'Euro BOBL',
        },

        {
          name: 'FX:EURUSD',
        },
        {
          name: 'FX:GBPUSD',
        },
        {
          name: 'FX:USDJPY',
        },
        {
          name: 'FX:USDCHF',
        },
        {
          name: 'FX:AUDUSD',
        },
        {
          name: 'FX:USDCAD',
        },
      ],
    },
  ];
  const { isSideNavOpen } = useContextState();
  const dispatch = useContextDispatch();

  const toggleSideNav = () => dispatch({ type: 'TOGGLE_SIDENAV' });
  // const setWatchlist = (watchlist: string) =>
  //   dispatch({ type: 'SET_WATCHLIST', payload: watchlist });

  return (
    <aside
      className={`fixed top-0 right-0 z-50 h-screen w-1/2 bg-white px-2.5 shadow-lg transition-transform duration-300 ${
        isSideNavOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {isSideNavOpen && (
        <div className="flex flex-col w-full h-full px-1 pt-3 pb-1">
          <IconButton
            className="relative left-[-54px] top-16 rounded-r-none border border-r-0 border-blue-gray-100"
            variant="filled"
            color="white"
            onClick={toggleSideNav}
          >
            <ChevronRightIcon strokeWidth={2.5} className="h-5 w-5" />
          </IconButton>

          <MarketData
            symbolsGroups={MOCK}
            colorTheme="dark"
            width="100%"
            height="100%"
          ></MarketData>
        </div>
      )}
    </aside>
  );
}
