export const Watchlist = () => {
  return (
    <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
      <span className="inline-block text-blue-500 dark:text-blue-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      </span>

      <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
        Simple & clean designs
      </h1>

      <p className="text-gray-500 dark:text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab
        nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
      </p>

      <a
        href="#"
        className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500"
      >
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
      </a>
    </div>
  );
};
