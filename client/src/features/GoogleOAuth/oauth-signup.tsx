import { Button } from '@material-tailwind/react';
import { FC } from 'react';

export const GoogleSignUp: FC<{ login: () => void }> = ({ login }) => {
  return (
    <>
      <Button
        variant="outlined"
        size="sm"
        className="flex h-10 items-center justify-center gap-2"
        fullWidth
        onClick={() => login()}
      >
        <img
          src={`https://www.material-tailwind.com/logos/logo-google.png`}
          alt="google"
          className="h-6 w-6"
        />{' '}
        sign in with google
      </Button>
    </>
  );
};
