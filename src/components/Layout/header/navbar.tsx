import { useState } from "react";
import { Link } from "react-router-dom";
import NavbarLinks from "@/components/Ui/navbarLinks";
import ToggleBtn from "@/components/Ui/toggleButton";
import { useSelector } from "react-redux";
import { RootState } from "@/context/store/rootReducer";
import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  CogIcon,
  CreditCardIcon,
  PencilIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { Fragment } from "react";
import { user } from "../../../../public";
import { MdDashboard } from "react-icons/md";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const userdata = useSelector((state: RootState) => state.auth?.user);
  const username = userdata?.username;
  console.log(username);
  return (
    <>
      <header className="fixed top-0 w-full z-10 mb-8 bg-white shadow-md">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center">
            <Link to="/">
              <img
                src="assets/images/logo.png"
                alt="navbar logo"
                className="h-10"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-16">
            <NavbarLinks />
            {username ? (
              <Menu as={"div"} className={"relative inline-block text-left"}>
                <Menu.Button
                  className={
                    "inline-flex w-full justify-center items-center gap-1"
                  }
                >
                  <img
                    src={user}
                    alt={"User"}
                    width={32}
                    height={32}
                    className={
                      "rounded-full mr-1 border-2 border-white shadow-sm"
                    }
                  />
                  <span className="hidden md:block font-medium text-gray-700">
                    {username}
                  </span>
                  <ChevronDownIcon className={"w-4 h-4 text-gray-700"} />
                </Menu.Button>

                <Transition
                  as={Fragment}
                  enter={"transition ease-out duration-100"}
                  enterFrom={"transform slace-95"}
                  enterTo={"transform scale-100"}
                  leave={"transition ease-in duration-75"}
                  leaveFrom={"transform scale-100"}
                  leaveTo={"transform scale-95"}
                >
                  <Menu.Items
                    className={
                      "absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg"
                    }
                  >
                    <div className="p-1">
                      <Menu.Item>
                        <Link
                          to={"/dashboard"}
                          className={
                            "flex items-center gap-2 rounded p-2 transition-colors ease-in-out duration-150 text-gray-700 hover:bg-gray-100 group"
                          }
                        >
                          <MdDashboard className={"h-4 w-4 text-gray-700"} />
                          <span className={"group-hover:text-orange-500"}>
                            Dashboard
                          </span>
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link
                          to={"/profile"}
                          className={
                            "flex items-center gap-2 rounded p-2 transition-colors ease-in-out duration-150 text-gray-700 hover:bg-gray-100 group"
                          }
                        >
                          <UserCircleIcon className={"h-4 w-4 text-gray-700"} />
                          <span className={"group-hover:text-orange-500"}>
                            Profile
                          </span>
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link
                          to={"/settings"}
                          className={
                            "flex items-center gap-2 rounded p-2 transition-colors ease-in-out duration-150 text-gray-700 hover:bg-gray-100 group"
                          }
                        >
                          <CogIcon className={"h-4 w-4 text-gray-700"} />
                          <span className={"group-hover:text-orange-500"}>
                            Settings
                          </span>
                        </Link>
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              <Link to="/auth/signin">
                <button className="bg-blue-900 text-white rounded px-4 py-2">
                  Login
                </button>
              </Link>
            )}
          </div>
          <div className="md:hidden">
            <ToggleBtn navbarOpen={navbarOpen} handleToggle={handleToggle} />
          </div>
        </nav>
        <div
          className={`md:hidden ${
            navbarOpen ? "block" : "hidden"
          } bg-white shadow-md`}
        >
          <div className="flex flex-col items-center space-y-4 py-4">
            <NavbarLinks />
            {username ? (
              <Menu as={"div"} className={"relative inline-block text-left"}>
                <Menu.Button
                  className={
                    "inline-flex w-full justify-center items-center gap-1"
                  }
                >
                  <img
                    src={user}
                    alt={"User"}
                    width={32}
                    height={32}
                    className={
                      "rounded-full mr-1 border-2 border-white shadow-sm"
                    }
                  />
                  <span className="hidden md:block font-medium text-gray-700">
                    {username}
                  </span>
                  <ChevronDownIcon className={"w-4 h-4 text-gray-700"} />
                </Menu.Button>

                <Transition
                  as={Fragment}
                  enter={"transition ease-out duration-100"}
                  enterFrom={"transform slace-95"}
                  enterTo={"transform scale-100"}
                  leave={"transition ease-in duration-75"}
                  leaveFrom={"transform scale-100"}
                  leaveTo={"transform scale-95"}
                >
                  <Menu.Items
                    className={
                      "absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg"
                    }
                  >
                    <div className="p-1">
                      <Menu.Item>
                        <Link
                          to={"/dashboard"}
                          className={
                            "flex items-center gap-2 rounded p-2 transition-colors ease-in-out duration-150 text-gray-700 hover:bg-gray-100 group"
                          }
                        >
                          <MdDashboard className={"h-4 w-4 text-gray-700"} />
                          <span className={"group-hover:text-orange-500"}>
                            Dashboard
                          </span>
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link
                          to={"/profile"}
                          className={
                            "flex items-center gap-2 rounded p-2 transition-colors ease-in-out duration-150 text-gray-700 hover:bg-gray-100 group"
                          }
                        >
                          <UserCircleIcon className={"h-4 w-4 text-gray-700"} />
                          <span className={"group-hover:text-orange-500"}>
                            Profile
                          </span>
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link
                          to={"/settings"}
                          className={
                            "flex items-center gap-2 rounded p-2 transition-colors ease-in-out duration-150 text-gray-700 hover:bg-gray-100 group"
                          }
                        >
                          <CogIcon className={"h-4 w-4 text-gray-700"} />
                          <span className={"group-hover:text-orange-500"}>
                            Settings
                          </span>
                        </Link>
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              <Link to="/auth/signin">
                <button className="bg-blue-900 text-white rounded px-4 py-2">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
