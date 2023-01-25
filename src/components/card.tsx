import { motion } from "framer-motion";
import { IData } from "./cards";

interface Iprop {
    id: number;
    key: number;
    data: IData;
}

export default function Card(prop: Iprop) {
    const variants = {
        hidden: { opacity: 0, x: 0, y: prop.id * -100 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
    };
    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: "linear", duration: 1 }}
            className="lg:w-1/4 md:w-1/2 p-4 w-full bg-gray-50 rounded-lg"
        >
            <a className="block relative h-48 rounded overflow-hidden">
                <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={prop.data.images[0]}
                />
            </a>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mt-5 inline-block mr-2">
                {prop.data.propertyType}
            </span>
            <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                {prop.data.saleType}
            </span>
            <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {prop.data.address}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                    {prop.data.name}
                </h2>
                <p className="mt-1">${prop.data.price}</p>
            </div>
        </motion.div>
    );
}
