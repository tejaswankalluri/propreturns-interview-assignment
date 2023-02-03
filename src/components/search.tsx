import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { motionItem } from "@/util/motion";
interface Iprop {
    searchFunc: (text: string) => void;
}
export default function SearchBox(prop: Iprop) {
    const [input, setInput] = useState("");

    useEffect(() => {
        // debounce for delay in search text
        const SetInputWithDelay = setTimeout(() => {
            prop.searchFunc(input);
        }, 2000);
        return () => clearTimeout(SetInputWithDelay);
    }, [input]);

    return (
        <motion.div variants={motionItem} className="search">
            <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only "
            >
                Search
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 "
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                    </svg>
                </div>
                <input
                    type="search"
                    id="default-search"
                    className="block w-full px-5 py-3 pl-10 text-sm text-gray-900 border rounded-lg bg-concrete-100 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="Search Property"
                    required
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
        </motion.div>
    );
}
