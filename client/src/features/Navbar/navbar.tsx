import React from "react";
import {
  Navbar,
  Typography,
  MenuItem,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import { NavbarUserInfo } from "../../widgets/Navbar-User-Info";
import { Link } from "react-router-dom";

const navListItems = [
  {
    label: "Dashboard",
    icon: UserCircleIcon,
    to: "/dashboard",
  },
  {
    label: "Blogs",
    icon: CubeTransparentIcon,
    to: "/blogs",
  },
];

function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, icon, to }, key) => (
        <Link key={key} to={to}>
          <Typography
            key={label}
            as="a"
            variant="small"
            color="gray"
            className="font-medium text-blue-gray-500"
          >
            <MenuItem className="flex items-center gap-2 lg:rounded-full">
              {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
              <span className="text-gray-900"> {label}</span>
            </MenuItem>
          </Typography>
        </Link>
      ))}
    </ul>
  );
}

export function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-1xl p-2 lg:rounded-full lg:pl-6">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          Material Tailwind
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>

        <NavbarUserInfo />
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse>
    </Navbar>
  );
}
