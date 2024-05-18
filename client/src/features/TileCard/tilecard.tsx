import { FC, PropsWithChildren } from "react";
import { themeBase } from "../../styles";

interface TileCardProps {
  title?: string;
  action?: JSX.Element;
}

export const TileCard: FC<PropsWithChildren<TileCardProps>> = ({
  children,
  title,
  action,
}) => {
  return (
    <div
      className={` ${themeBase} w-full max-[320px]:w-full lg:w-1/2 p-4 grid gap-4 border border-gray-200 rounded-lg shadow sm:p-6 dark:border-gray-700`}
    >
      {(title || action) && (
        <div className="flex items-center justify-between mb-3 ">
          {title && (
            <h5 className="text-base font-semibold text-gray-900 md:text-xl dark:text-white">
              {title}
            </h5>
          )}
          {action && action}
        </div>
      )}
      {children && children}
    </div>
  );
};
