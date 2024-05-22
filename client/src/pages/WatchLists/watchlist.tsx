import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useState, useEffect, FC } from 'react';
import { LinkIcon } from '@heroicons/react/24/solid';
import {
  Card,
  CardHeader,
  Input,
  Typography,
  CardBody,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  IconButton,
  Tooltip,
} from '@material-tailwind/react';
import { Pagination } from '../../features/Pagination';
import { SVGIcon } from '../../features/SvgIcon';
import { useAppSelector } from '../../app/hooks';

const TABLE_HEAD = ['Name', 'Description', 'Link'];

export const Watchlist = () => {
  const { hommaPersonalWatchlist, sectorWatchList } = useAppSelector(
    (state) => state.dashboard
  );
  const TABS = [
    {
      label: 'Personal',
      value: 'Personal',
      data: hommaPersonalWatchlist,
    },
    {
      label: 'Sector',
      value: 'Sector',
      data: sectorWatchList,
    },
  ];

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" className="flex gap-2" color="blue-gray">
              <SVGIcon name="tradingview" />
              Tradingview Watchlist
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all members
            </Typography>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="HPA" className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              crossOrigin={null}
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>

        {TABS.map(({ data }) => (
          <WatchListGrid items={data} />
        ))}
      </CardHeader>
    </Card>
  );
};

const WatchListGrid: FC<{ items: any }> = ({ items }) => {
  console.log(items);

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
      <CardBody className="overflow-y-auto px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((i: any, index: number) => {
              const isLast = index === items.length - 1;
              const classes = isLast
                ? 'p-4'
                : 'p-4 border-b border-blue-gray-50';

              return (
                <tr key={i.title}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {i.title}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {i.link}
                      </Typography>
                    </div>
                  </td>

                  <td className={classes}>
                    <Tooltip content="Edit User">
                      <IconButton variant="text">
                        <LinkIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
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
