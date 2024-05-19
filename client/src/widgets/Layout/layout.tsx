import { Outlet } from "react-router-dom";
import { Navbar } from "../../features/Navbar";

export const Layout = () => {
  return (
    <>
      <div>
        <Navbar />
        <main
          role="main"
          className="w-full px-6 py-4 bg-white dark:bg-gray-900"
        >
          <Outlet />
        </main>
      </div>
    </>
  );
};
