import { Link } from 'react-router-dom';
import { SVGIcon } from '../../features/SvgIcon';
import { TileCard } from '../../features/TileCard';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import { FC } from 'react';
import { useAppSelector } from '../../app/hooks';
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
  const dashboardData = useAppSelector((state) => state.dashboard);

  return (
    <section className="flex flex-wrap justify-center gap-8">
      <section className="flex flex-col w-[587px] gap-6 ">
        <DashboardRecentVideo />
        <DashboardWatchListView items={dashboardData.hommaPersonalWatchlist} />
      </section>
      <section className="flex flex-col w-[587px] gap-6 ">
        <DashboardScannerView items={dashboardData.chartLinkScanners} />
        <DashboardClDashboardView items={dashboardData.chartLinkDashboards} />
      </section>
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
            <Typography color="black" variant="paragraph">
              All Watchlists
            </Typography>
            <ArrowRightCircleIcon className="block h-5 w-5" />
          </Link>
        }
      >
        <List>
          {items?.map((i) => (
            <a key={i.title} href={i.link} target="_blank">
              <ListItem className="gap-2">
                <SVGIcon name="tradingview" />
                <Typography color="black" variant="small">
                  {i.title}
                </Typography>
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
      <Card className="mt-7 w-full max-[380px]:w-full h-full gap-3">
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
                value="Latest"
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

const DashboardScannerView: FC<{ items: any[] }> = ({ items }) => {
  return (
    <>
      <TileCard
        title="ChartLink Scanners"
        action={
          <Link to="chartlink-scanners" className="flex items-center gap-3">
            <Typography color="black" variant="paragraph">
              All Scanners
            </Typography>
            <ArrowRightCircleIcon className="block h-5 w-5" />
          </Link>
        }
      >
        <List>
          {items?.slice(0, 3).map((i) => (
            <a key={i.title} href={i.link} target="_blank">
              <ListItem className="gap-2">
                <Typography color="black" variant="small">
                  {i.title}
                </Typography>
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

const DashboardClDashboardView: FC<{ items: any[] }> = ({ items }) => {
  return (
    <>
      <TileCard
        title="ChartLink Dashboard"
        action={
          <Link to="chartlink-dashboard" className="flex items-center gap-3">
            <Typography color="black" variant="paragraph">
              All Chartlink Dashboard
            </Typography>
            <ArrowRightCircleIcon className="block h-5 w-5" />
          </Link>
        }
      >
        <List>
          {items?.slice(0, 3).map((i) => (
            <a key={i.title} href={i.link} target="_blank">
              <ListItem className="gap-2">
                <Typography color="black" variant="small">
                  {i.title}
                </Typography>
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
