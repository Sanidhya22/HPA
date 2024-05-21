import { FC } from 'react';
import { SVGIcon } from '../SvgIcon';

export const GoogleButton: FC<{ title: string; onClick: () => unknown }> = ({
  title,
  onClick,
}) => {
  return (
    <a
      onClick={onClick}
      className="flex items-center justify-center w-full text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
    >
      <div className="px-4 py-2">
        <SVGIcon name="google" />
      </div>
      <button className="flex items-center justify-center w-full px-6 py-2 text-sm font-medium text-black dark:text-white transition-colors duration-300 transform rounded-lg focus:outline-none">
        {title}
      </button>
    </a>
  );
};
