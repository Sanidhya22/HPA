import { Link } from "react-router-dom";
import { SVGIcon } from "../../features/SvgIcon";
import { TileCard } from "../../features/TileCard";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

export const Dashboard = () => {
  return (
    <section className="flex flex-wrap gap-6 ">
      <TileCard
        title="  Tradingview Watchlist"
        action={
          <Link to="watchlists" className="flex items-center gap-1">
            <p className="text-gray-500 dark:text-gray-300 hover:underline ">
              All Watchlists
            </p>

            <span className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform rtl:-scale-x-100 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              <ArrowRightCircleIcon className="block h-6 w-6" />
            </span>
          </Link>
        }
      >
        <ul className="my-4 space-y-3">
          <li>
            <a
              href="https://in.tradingview.com/watchlists/129403857/"
              className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <SVGIcon name="tradingview" />
              <span className="flex-1 ms-3 whitespace-nowrap">Homma PF</span>
              <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                Popular
              </span>
            </a>
          </li>
        </ul>
      </TileCard>
    </section>
  );
};
