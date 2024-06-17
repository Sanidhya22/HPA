import React from 'react';
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
} from '@material-tailwind/react';
import { Bars2Icon } from '@heroicons/react/24/solid';
import { NavbarUserInfo } from '../../widgets/Navbar-User-Info';
import { Link, useLocation } from 'react-router-dom';

const navListItems = [
  {
    label: 'Dashboard',

    to: '/dashboard',
  },
  {
    label: 'Cources',
    to: '/cources',
  },
  {
    label: 'The Technical Take',
    to: 'https://sakatas.substack.com/',
  },
];

function NavList() {
  const { pathname } = useLocation();

  return (
    <>
      <ul className="mt-2 mb-4 pl-2 flex flex-col h-full grow self-end gap-6 lg:my-0 lg:flex-row lg:items-center">
        {navListItems.map(({ label, to }, key) => (
          <Link key={key} to={to} className="h-full">
            <li className="relative flex h-full items-center text-sm  nav-li-after border-text-primary dark:border-text-primary">
              <span
                className={`relative whitespace-nowrap h-full flex items-center text-base leading-[22px] cursor-pointer font-medium text-text-primary dark:text-text-primary ${pathname.includes(to) ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black" : ''} hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-black`}
              >
                {label}
              </span>
            </li>
          </Link>
        ))}
        <Link to={'/premium'}>
          <span className="display-none h-8 w-full px-2 cursor-pointer  rounded-[8px] bg-[#ffa1161f] text-center leading-8 transition-colors hover:bg-[#ffa11633] lg:inline-block premiumBtnStyle__8s3V">
            <span className="text-brand-orange">Homma Private Access</span>
          </span>
        </Link>
      </ul>
    </>
  );
}

export function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar
      variant="gradient"
      className="mx-auto w-full p-0 px-2 lg:rounded lg:pl-6 shadow-none border-b-1.5 border-slate-900"
    >
      <div className="relative h-[50px] mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          variant="h4"
          color="blue-gray"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          TTK
        </Typography>
        <div className="hidden lg:block lg:h-[50px]">
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

        <div className="flex items-center gap-2">
          <NavbarUserInfo />
        </div>
      </div>
      <Collapse open={isNavOpen}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
