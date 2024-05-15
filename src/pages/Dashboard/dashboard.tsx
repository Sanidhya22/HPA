import { Link } from "react-router-dom";
import { SVGIcon } from "../../features/SvgIcon";
import { TileCard } from "../../features/TileCard";

export const Dashboard = () => {
  return (
    <section className="flex flex-wrap gap-6 ">
      <TileCard
        title="  Tradingview Watchlist"
        action={
          <Link to="watchlists" className="flex gap-4">
            <p className="text-gray-500 dark:text-gray-300 hover:underline ">
              All Watchlists
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
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
