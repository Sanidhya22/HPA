import { Link, useLocation } from 'react-router-dom';

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathname = location.pathname.split('/').filter((x) => x);
  return (
    <nav className="flex px-6 py-4 text-gray-700 " aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 rtl:space-x-reverse">
        {pathname.map((value, index) => {
          const last = index === pathname.length - 1;
          const to = `/${pathname.slice(0, index + 1).join('/')}`;
          const title = value.charAt(0).toUpperCase() + value.slice(1);

          return (
            <li className="inline-flex items-center">
              {index === 0 && (
                <svg
                  className="w-3 h-3 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
              )}
              <div className="flex items-center">
                {last ? (
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {title}
                  </span>
                ) : (
                  <>
                    <Link
                      to={to}
                      className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 md:me-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      {title}
                    </Link>
                    <svg
                      className="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
