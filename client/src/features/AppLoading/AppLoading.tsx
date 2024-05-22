import { FC, useEffect } from 'react';
import { dashboardActions } from '../../store/dashboard.slice';
import { useAppDispatch } from '../../app/hooks';
import { useGetDataQuery } from '../../store/dashboard.api';
import { SVGIcon } from '../SvgIcon';
import { Outlet } from 'react-router-dom';

export const AppLoading: FC = () => {
  const dispatch = useAppDispatch();
  const { data, isSuccess, isLoading } = useGetDataQuery();

  useEffect(() => {
    if (isSuccess && data) {
      const {
        hommaPersonalWatchlist,
        sectorWatchList,
        youtubeVideos,
        hpaVideos,
        chartLinkScanners,
        telegramChannel,
        tradingViewHPAIndicators,
        chartLinkDashboards,
      } = data;
      dispatch(
        dashboardActions.setDashboardData({
          hommaPersonalWatchlist,
          sectorWatchList,
          youtubeVideos,
          hpaVideos,
          chartLinkScanners,
          telegramChannel,
          tradingViewHPAIndicators,
          chartLinkDashboards,
        })
      );
    }
  }, [data, isSuccess]);

  return (
    <>
      {isLoading ? (
        <span className="flex items-center justify-center h-screen">
          <SVGIcon name="loading-spinner" />
        </span>
      ) : (
        <Outlet />
      )}
    </>
  );
};
