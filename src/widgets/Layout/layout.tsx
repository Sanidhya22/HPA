import { Outlet } from "react-router-dom";
import { Navbar } from "../../features/Navbar";
import { Breadcrumbs } from "../../features/Breadcrumbs";

export const Layout = () => {
  return (
    <>
      <div>
        <Navbar />
        <Breadcrumbs />
        <main role="main" className="w-full px-6 py-2">
          <Outlet />
        </main>
      </div>
    </>
  );
};
