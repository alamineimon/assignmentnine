import React ,{useState} from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function Header(props) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <header className="p-4 bg-gray-600 text-gray-100">
        <div className="container flex justify-between h-16 mx-auto">
          <div
            onClick={() => setOpen(!open)}
            className="h-6 w-6 text-left dark:bg-gray-800 md:hidden"
          >
            {open ? <XMarkIcon /> : <Bars3Icon />}
          </div>

          <Link
            rel="noopener noreferrer"
            to="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <h1 className="font-bold text-3xl">Real Time Quiz</h1>
          </Link>
          <ul
            className={`items-stretch  absolute duration-500 ease-in md:static md:flex ${
              open ? "top-9 left-[20px]" : "top-[-120px] left-[20px]"
            }`}
          >
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="/home"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent "
              >
                Home
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="/blogs"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                Blogs
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="topics"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                Topics
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="statics"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                Statics
              </Link>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <button className="self-center px-12 py-3 font-semibold rounded bg-green-400 hover:bg-blue-700 hover:text-white text-gray-900">
              Login
            </button>
          </div>
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
