import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { IconButton } from '@material-tailwind/react';
import { MarketData } from 'react-ts-tradingview-widgets';
import {
  useContextDispatch,
  useContextState,
} from '../../shared/AppReducer/app-reducer';
import { transformObjectToArray } from '../../shared/Utills/commonUtils';
import { useEffect, useRef, useState } from 'react';

export function OverlayLayout() {
  const { isSideNavOpen } = useContextState();

  return (
    <aside
      className={`fixed top-0 right-0 z-50 h-screen w-1/2 bg-white px-2.5 shadow-lg transition-transform duration-300 ${
        isSideNavOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {isSideNavOpen && <OverlayLayoutContent />}
    </aside>
  );
}

{
  /*  <TradingViewWidget items={watchlistData} /> */
}

const OverlayLayoutContent = () => {
  const { selectedWatchlist } = useContextState();
  const dispatch = useContextDispatch();
  const [watchlistData, setwatchlistData] = useState<any>([]);
  const toggleSideNav = (value: boolean) => {
    dispatch({ type: 'TOGGLE_SIDENAV', payload: value });
    dispatch({ type: 'SET_WATCHLIST', payload: null });
  };

  useEffect(() => {
    if (selectedWatchlist) {
      setwatchlistData(transformObjectToArray(selectedWatchlist));
    }
  }, [selectedWatchlist]);

  const modalRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (e: MouseEvent) => {
    const element = e.target as HTMLElement;
    if (
      modalRef.current &&
      !element.closest('#watchlist-item') &&
      !modalRef.current.contains(e.target as Node)
    ) {
      toggleSideNav(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="flex flex-col w-full h-full px-1 pt-3 pb-1" ref={modalRef}>
      <IconButton
        className="relative left-[-54px] top-16 rounded-r-none border border-r-0 border-blue-gray-100"
        variant="filled"
        color="white"
        onClick={() => {
          toggleSideNav(false);
        }}
      >
        <ChevronRightIcon strokeWidth={2.5} className="h-5 w-5" />
      </IconButton>

      {watchlistData.length > 0 && (
        // <MarketData
        //   symbolsGroups={watchlistData}
        //   colorTheme="dark"
        //   width="100%"
        //   height="100%"
        // ></MarketData>

        <TradingViewWidget items={watchlistData} />
      )}
    </div>
  );
};

const TradingViewWidget: React.FC<{ items: any }> = ({ items }) => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (widgetRef.current && !widgetRef.current.children.length) {
      const script = document.createElement('script');
      script.src =
        'https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js';
      script.async = true;

      script.innerHTML = JSON.stringify({
        width: '100%',
        height: '100%',
        symbolsGroups: items,
        showSymbolLogo: true,
        isTransparent: false,
        colorTheme: 'dark',
        locale: 'en',
      });

      widgetRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container" style={{ height: '100%' }}>
      <div
        ref={widgetRef}
        className="tradingview-widget-container__widget"
        style={{ display: 'contents' }}
      ></div>

      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};
