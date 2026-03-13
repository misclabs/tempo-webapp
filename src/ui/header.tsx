import { Link } from "react-router";
import misclabsIcon from "../images/misclabs-icon.svg";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex flex-1">
          <a href="https://misclabs.com" className="-m-1.5 p-1.5">
            <span className="sr-only">Misc. Labs</span>
            <img alt="" src={misclabsIcon} className="h-8 w-auto dark:hidden" />
            <img
              alt=""
              src={misclabsIcon}
              className="h-8 w-auto not-dark:hidden"
            />
          </a>
        </div>
        <div className="flex gap-x-12">
          <Link
            to="/"
            className="text-sm/6 font-semibold text-gray-900 dark:text-white"
          >
            Timer
          </Link>
          <Link
            to="/404"
            className="text-sm/6 font-semibold text-gray-900 dark:text-white"
          >
            404
          </Link>
          <Link
            to="/about"
            className="text-sm/6 font-semibold text-gray-900 dark:text-white"
          >
            About
          </Link>
        </div>
        <div className="flex flex-1 justify-end">
          <Link
            to="/login"
            className="text-sm/6 font-semibold text-gray-900 dark:text-white"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
