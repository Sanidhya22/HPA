import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Input,
  Typography,
} from '@material-tailwind/react';
import { useAppSelector } from '../../app/hooks';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { searchItems } from '../../shared/Utills/commonUtils';

export const CLScanners: FC = () => {
  const { chartLinkScanners } = useAppSelector((state) => state.dashboard);
  const [searchTerm, setSearchTerm] = useState('');
  const [renderItems, setRenderItems] = useState(chartLinkScanners);

  const handlSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const result = searchItems(searchTerm, chartLinkScanners);
    setRenderItems(result);
  }, [searchTerm]);

  useEffect(() => {
    setSearchTerm('');
    setRenderItems(chartLinkScanners);
  }, [chartLinkScanners]);

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="flex justify-between md:items-center gap-y-4 flex-col md:flex-row">
          <div>
            <Typography variant="h5" className="flex gap-2" color="blue-gray">
              Chartlink Scanners
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all Scanners
            </Typography>
          </div>
          <div className="flex gap-2">
            <div className="lg:w-96">
              <Input
                value={searchTerm}
                onChange={handlSearchInput}
                crossOrigin={null}
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </div>
        </div>
      </CardHeader>

      <CardBody className="flex flex-wrap justify-evenly">
        {renderItems.map((i) => (
          <Card className="mt-6 max-w-80 border border-blue-gray-100 shadow-sm">
            <CardBody className="p-4">
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {i.title}
              </Typography>
              <Typography variant="paragraph">{i.description}</Typography>
            </CardBody>
            <CardFooter className="p-4 pt-0 ">
              <a href={i.link} target="_blank" className="inline-block">
                <Button variant="outlined" className="flex items-center gap-2">
                  Link
                </Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </CardBody>
    </Card>
  );
};
