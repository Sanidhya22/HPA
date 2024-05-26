import { Card, CardBody, Chip, Typography } from '@material-tailwind/react';
import { FC, PropsWithChildren } from 'react';
interface TileCardProps {
  title?: string;
  action?: JSX.Element;
  badgeNew?: boolean;
}

export const TileCard: FC<PropsWithChildren<TileCardProps>> = ({
  children,
  title,
  action,
  badgeNew = false,
}) => {
  return (
    <Card className="w-full max-[380px]:w-full h-fit border border-blue-gray-100">
      <CardBody className="px-4 py-8">
        {(title || action) && (
          <div className="flex items-center justify-between mb-3 ">
            {title && (
              <div className="flex items-center gap-4">
                <Typography variant="h6" color="black" className="mb-2">
                  {title}
                </Typography>
                {badgeNew && (
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
                )}
              </div>
            )}
            {action && action}
          </div>
        )}
        {children && children}
      </CardBody>
    </Card>
  );
};
