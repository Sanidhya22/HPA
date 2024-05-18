import { FC } from "react";
import { Link } from "react-router-dom";

export const Button: FC<{ name: string; to: string }> = ({ name, to }) => {
  return (
    <Link
      to={to}
      className="flex items-center justify-center h-8 px-3 text-sm text-center text-gray-600 transition-colors duration-200 transform border border-2 rounded-lg xl:h-10 dark:text-gray-300 dark:border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
    >
      {name}
    </Link>
  );
};
