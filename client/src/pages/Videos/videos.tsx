import { useState, useEffect, FC } from 'react';
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  TabPanel,
  TabsBody,
} from '@material-tailwind/react';
import { Pagination } from '../../features/Pagination';
import { SVGIcon } from '../../features/SvgIcon';
import { useAppSelector } from '../../app/hooks';
import ReactPlayer from 'react-player';

export const Videos = () => {
  const { youtubeVideos, hpaVideos } = useAppSelector(
    (state) => state.dashboard
  );

  const TABS = [
    {
      label: `HPA`,
      value: 'HPA',
      data: hpaVideos,
    },
    {
      label: 'Youtube',
      value: 'Youtube',
      data: youtubeVideos,
    },
  ];

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" className="flex gap-2" color="blue-gray">
              <SVGIcon name="tradingview" />
              All Videos
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all Videos
            </Typography>
          </div>
        </div>
        <Tabs value="HPA">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="w-full md:w-max">
              <TabsHeader>
                {TABS.map(({ label, value }) => (
                  <Tab key={value} value={value}>
                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                  </Tab>
                ))}
              </TabsHeader>
            </div>
          </div>
          <TabsBody
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            {TABS.map(({ value, data }) => (
              <TabPanel className="p-0" key={value} value={value}>
                <VideosGrid items={data} />
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </CardHeader>
    </Card>
  );
};

const VideosGrid: FC<{ items: any }> = ({ items }) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const [currentItems, setCurrentItems] = useState<any>([]);

  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const itemsToShow = items.slice(start, start + itemsPerPage);
    setCurrentItems(itemsToShow);
  }, [currentPage, items]);

  return (
    <>
      <CardBody className="p-0 pt-2">
        <Card className="overflow-hidden overflow-x-auto xl:col-span-2 border border-blue-gray-100 shadow-sm">
          {currentItems.map((i: any) => (
            <Card className="w-full flex-col md:flex-row p-10 gap-6 border ">
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-full h-56 min-[320px]:h-20 sm:h-52 md:h-56 lg:h-60 md:w-1/2 lg:w-1/3 shrink-0"
              >
                <ReactPlayer
                  className="w-full h-full"
                  width="100%"
                  height="100%"
                  url={i.link}
                  controls={true}
                />
              </CardHeader>
              <CardBody className="p-0">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  {i.title}
                </Typography>
                <Typography
                  variant="h6"
                  color="gray"
                  className="mb-4 uppercase"
                >
                  HPA
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                  Video Description ......
                </Typography>
              </CardBody>
            </Card>
          ))}
        </Card>
      </CardBody>

      <CardFooter className="flex items-center justify-between overflow-x-auto border-t border-blue-gray-50 p-4">
        <Pagination
          itemsCount={items.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </CardFooter>
    </>
  );
};
