import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { FC } from 'react';

export const GoogleSignIn: FC<{
  handleGoogleSuccess: (credentialResponse: CredentialResponse) => void;
  handleGoogleError?: (() => void) | undefined;
}> = ({ handleGoogleSuccess, handleGoogleError }) => {
  return (
    <GoogleLogin
      shape="rectangular"
      size="large"
      text="signin_with"
      width={350}
      onSuccess={handleGoogleSuccess}
      onError={handleGoogleError}
      useOneTap
    />
  );
};
