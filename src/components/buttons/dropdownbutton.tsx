import { Menu, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { slideIn } from "@/util/motion";
import { Dispatch, SetStateAction } from "react";

export interface IPropDropDownButton {
    title: string;
    elements: string[];
    func: Dispatch<SetStateAction<{ defaultValue: string; items: string[] }>>;
}

export default function DropDownButton(props: IPropDropDownButton) {
    return (
        <motion.div
            variants={slideIn("down", "spring")}
            className="relative inline-block text-left"
        >
            <Menu>
                {({ open }) => (
                    <>
                        <span className="rounded-md shadow-sm">
                            <Menu.Button className="inline-flex justify-center w-full px-5 py-3 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-concrete-100 rounded-md hover:text-gray-500 focus:outline-none  focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
                                <span>{props.title}</span>
                                <svg
                                    className="w-5 h-5 ml-2 -mr-1"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Menu.Button>
                        </span>

                        <Transition
                            show={open}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items
                                static
                                className="absolute right-0 w-full mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                            >
                                <div className="py-1">
                                    {props.elements.map((ele, idx) => (
                                        <Menu.Item key={idx}>
                                            {({ active }) => (
                                                <a
                                                    className={`${
                                                        active
                                                            ? "bg-gray-100 text-gray-900"
                                                            : "text-gray-700"
                                                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                                    onClick={() =>
                                                        props.func((prev) => ({
                                                            ...prev,
                                                            defaultValue: ele,
                                                        }))
                                                    }
                                                >
                                                    {ele}
                                                </a>
                                            )}
                                        </Menu.Item>
                                    ))}
                                </div>
                            </Menu.Items>
                        </Transition>
                    </>
                )}
            </Menu>
        </motion.div>
    );
}
