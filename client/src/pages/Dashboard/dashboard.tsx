import { Link } from 'react-router-dom';
import { SVGIcon } from '../../features/SvgIcon';
import { TileCard } from '../../features/TileCard';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import { useGetDataQuery } from '../../store/dashboard.api';
import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { dashboardActions } from '../../store/dashboard.slice';
import ReactPlayer from 'react-player/youtube';
import {
  List,
  ListItem,
  ListItemSuffix,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Typography,
} from '@material-tailwind/react';

export const Dashboard = () => {
  const dispatch = useAppDispatch();
  const dashboardData = useAppSelector((state) => state.dashboard);
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

  if (isLoading) {
    return (
      <span className="flex items-center justify-center h-screen">
        <SVGIcon name="loading-spinner" />
      </span>
    );
  }

  return (
    <section className="flex flex-wrap justify-evenly gap-6 ">
      <DashboardWatchListView items={dashboardData.hommaPersonalWatchlist} />
      <DashboardRecentVideo />
      <DashboardWScannerView items={dashboardData.chartLinkScanners} />
    </section>
  );
};

const DashboardWatchListView: FC<{ items: any[] }> = ({ items }) => {
  return (
    <>
      <TileCard
        title="Tradingview Watchlist"
        action={
          <Link to="watchlists" className="flex items-center gap-3">
            <Typography variant="paragraph">All Watchlists</Typography>
            <ArrowRightCircleIcon className="block h-5 w-5" />
          </Link>
        }
      >
        <List>
          {items?.map((i) => (
            <a key={i.title} href={i.link} target="_blank">
              <ListItem className="gap-2">
                <SVGIcon name="tradingview" />
                <Typography variant="small">{i.title}</Typography>
                <ListItemSuffix>
                  <Chip
                    value="Popular"
                    variant="ghost"
                    size="sm"
                    className="rounded"
                  />
                </ListItemSuffix>
              </ListItem>
            </a>
          ))}
        </List>
      </TileCard>
    </>
  );
};

const DashboardRecentVideo: FC = () => {
  return (
    <>
      <Card className="mt-7 w-full lg:w-[45%] max-[380px]:w-full h-full gap-3">
        <CardHeader color="blue-gray" className="relative h-56">
          <ReactPlayer
            className="w-full h-full"
            width="100%"
            height="100%"
            url={'https://youtu.be/pVBaP7JUI-k'}
            controls={true}
          />
        </CardHeader>

        <CardBody>
          <div className="flex items-center gap-3 mb-2">
            <Typography variant="h5" color="black">
              A Trading System: FnO example
            </Typography>
            <span>
              <Chip
                variant="ghost"
                color="green"
                size="sm"
                value="NEW"
                icon={
                  <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />
                }
              />
            </span>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Link to="videos" className="contents">
            <Button variant="gradient" className="flex items-center gap-2">
              View All
              <ArrowRightCircleIcon className="block h-5 w-5" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

const DashboardWScannerView: FC<{ items: any[] }> = ({ items }) => {
  return (
    <>
      <TileCard
        title="ChartLink Scanners"
        action={
          <Link to="watchlists" className="flex items-center gap-3">
            <Typography color="black" variant="paragraph">
              All Scanners
            </Typography>
            <ArrowRightCircleIcon className="block h-5 w-5" />
          </Link>
        }
      >
        <List>
          {items?.map((i) => (
            <a key={i.title} href={i.link} target="_blank">
              <ListItem className="gap-2">
                <Typography variant="small">{i.title}</Typography>
                <ListItemSuffix>
                  <Chip
                    value="Popular"
                    variant="ghost"
                    size="sm"
                    className="rounded"
                  />
                </ListItemSuffix>
              </ListItem>
            </a>
          ))}
        </List>
      </TileCard>
    </>
  );
};
