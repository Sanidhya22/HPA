import { RouterProvider } from 'react-router-dom';
import './app.css';
import { router } from './routes';
import { GoogleOAuthProvider } from '@react-oauth/google';
function App() {
  return (
    <GoogleOAuthProvider clientId="43530715813-44ddc0e4b84ot62e0lhill6ovm74ulq6.apps.googleusercontent.com">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  );
}

export default App;
