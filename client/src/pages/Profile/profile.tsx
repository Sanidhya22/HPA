import {
  Card,
  CardBody,
  Avatar,
  Typography,
  Tooltip,
} from '@material-tailwind/react';
import { PencilIcon } from '@heroicons/react/24/solid';

import { ProfileInfoCard } from '../../shared/Profile-Info-Card';
import { useAppSelector } from '../../app/hooks';

export const Profile = () => {
  const user = useAppSelector((state) => state.user);
  return (
    <>
      <div className="relative mt-8 h-28 w-full overflow-hidden rounded-xl bg-grey-100 bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src={`/${user.avatar}.png`}
                alt="bruce-mars"
                size="xl"
                variant="rounded"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  {user.username}
                </Typography>
              </div>
            </div>
          </div>
          <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
            <ProfileInfoCard
              title="Profile Information"
              description="Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
              details={{
                'first name': user.username,
                mobile: '(+91) 9993481424',
                email: user.email,
                location: 'India',
              }}
              action={
                <Tooltip content="Edit Profile">
                  <PencilIcon className="h-4 w-4 cursor-pointer text-blue-gray-500" />
                </Tooltip>
              }
            />
          </div>
        </CardBody>
      </Card>
    </>
  );
};
