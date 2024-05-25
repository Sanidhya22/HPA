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
  ListItem,
  TabPanel,
  TabsBody,
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
      label: `Homma's`,
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
              See information about all Watchlists
            </Typography>
          </div>
        </div>
        <Tabs value="Personal">
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
            <div className="w-full md:w-72">
              <Input
                crossOrigin={null}
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
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
                <WatchListGrid items={data} />
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </CardHeader>
    </Card>
  );
};

const WatchListGrid: FC<{ items: any }> = ({ items }) => {
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
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-50 py-3 px-6 text-left"
                  >
                    <Typography
                      variant="small"
                      color="black"
                      className="text-[11px] font-medium uppercase"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentItems.map((i: any) => {
                return (
                  <tr key={i.title}>
                    <td>
                      <ListItem className="gap-2">
                        <SVGIcon name="tradingview" />
                        <Typography variant="small">{i.title}</Typography>
                      </ListItem>
                    </td>
                    <td>
                      <Typography variant="small">{i.description}</Typography>
                    </td>

                    <td>
                      <a href={i.link} target="_blank">
                        <Tooltip content="Tradingview Link">
                          <IconButton variant="text">
                            <LinkIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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
