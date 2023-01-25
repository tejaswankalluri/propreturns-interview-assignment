import useToggle from "@/hooks/useToggle";
import Image from "next/image";
import propreturnImg from "@/img/logo_best.jpg";
export default function Navbar() {
    const [isToggleNavButton, SetToggleNavButton] = useToggle();
    return (
        <>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <a
                        href="https://propreturns.com"
                        className="flex items-center"
                    >
                        <Image
                            src={propreturnImg}
                            className="h-9 mr-5"
                            width={130}
                            alt="Flowbite Logo"
                        />
                    </a>
                    <div className="flex md:order-2">
                        <button
                            type="button"
                            className="flex mr-3 text-sm  rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
                            id="user-menu-button"
                            aria-expanded="false"
                            data-dropdown-toggle="user-dropdown"
                            data-dropdown-placement="bottom"
                        >
                            <span className="sr-only">Open user menu</span>
                            <img
                                className="w-10 rounded-full shadow-md"
                                src="https://img.icons8.com/color/96/null/circled-user-male-skin-type-3--v1.png"
                                alt="user photo"
                            />
                        </button>
                        <button
                            data-collapse-toggle="navbar-cta"
                            type="button"
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-controls="navbar-cta"
                            aria-expanded="false"
                            //@ts-ignore
                            onClick={SetToggleNavButton}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div
                        className={
                            !isToggleNavButton
                                ? "hidden items-center justify-between w-full md:flex md:w-auto md:order-1 "
                                : "items-center justify-between w-full md:flex md:w-auto md:order-1 "
                        }
                        id="navbar-cta"
                    >
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                                >
                                    Help
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                                >
                                    Real Estate Agents
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                                >
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
