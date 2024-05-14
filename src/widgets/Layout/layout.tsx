import { Outlet } from "react-router-dom";
import { Navbar } from "../../features/Navbar";
import { Breadcrumbs } from "../../features/Breadcrumbs";

export const Layout = () => {
  return (
    <>
      <div>
        <Navbar />
        <Breadcrumbs />
        <div className="flex flex-row flex-wrap py-4">
          <main role="main" className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};
