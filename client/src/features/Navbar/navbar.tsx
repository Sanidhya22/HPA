import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { themeBase } from "../../styles";
import { NavbarUserInfo } from "../../widgets/Navbar-User-Info";

const navigation = [
  { name: "Dashboard", href: "/dashboard", current: true },
  { name: "Blog", href: "/blog", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="bg-gray-50 dark:bg-gray-800 dark:border-gray-700 shadow"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 shadow-lg">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        className={classNames(
                          item.current
                            ? "text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500"
                            : "text-gray-600 capitalize dark:text-gray-300 border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
                        )}
                        aria-current={item.current ? "page" : undefined}
                        to={item.href}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <NavbarUserInfo />
            </div>
          </div>

          <DisclosurePanel className="sm:hidden static w-full">
            <div className={`${themeBase} shadow-2xl space-y-1 px-2 pb-3 pt-2`}>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-white bg-gray-600"
                      : "hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50",
                    "text-base text-gray-900 dark:text-white block rounded-md px-3 py-2 font-medium "
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
