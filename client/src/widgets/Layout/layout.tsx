import { Outlet } from 'react-router-dom';
import { ComplexNavbar } from '../../features/Navbar';
import { OverlayLayout } from '../OverlayLayout/overlay-layout';
import { Footer } from '../../features/Footer';

export const Layout = () => {
  return (
    <>
      <div>
        <ComplexNavbar />
        <OverlayLayout />
        <main
          role="main"
          className="w-full px-6 py-4 bg-white dark:bg-gray-900"
        >
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};
