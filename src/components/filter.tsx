import { useState } from "react";
import DropDownButton, { IPropDropDownButton } from "./buttons/dropdownbutton";
import { motion } from "framer-motion";
import SearchBox from "./search";
import { motionContainerRev } from "@/util/motion";

export default function Filter() {
    const [ForSale, SetForSale] = useState({
        defaultValue: "For Sale",
        items: ["New", "For Sale"],
    });
    const [Types, SetTypes] = useState({
        defaultValue: "House",
        items: ["House", "Property"],
    });
    const [minPrice, SetMinPrice] = useState({
        defaultValue: "100k",
        items: ["100k", "200k", "300k", "400k", "500k"],
    });
    const [maxPrice, SetMaxPrice] = useState({
        defaultValue: "600k",
        items: ["600k", "700k", "800k", "900k", "1M"],
    });
    const [FloorArea, SetFloorArea] = useState({
        defaultValue: "50m",
        items: ["50m", "60m", "70m"],
    });
    const [searchText, SetSearchText] = useState("");
    const arr: IPropDropDownButton[] = [
        {
            title: ForSale.defaultValue,
            elements: ForSale.items,
            func: SetForSale,
        },
        {
            title: `Type: ${Types.defaultValue}`,
            elements: Types.items,
            func: SetTypes,
        },
        {
            title: `Min price: $${minPrice.defaultValue}`,
            elements: minPrice.items,
            func: SetMinPrice,
        },
        {
            title: `Max price: $${maxPrice.defaultValue}`,
            elements: maxPrice.items,
            func: SetMaxPrice,
        },
        {
            title: `Floor Area: ${FloorArea.defaultValue}`,
            elements: FloorArea.items,
            func: SetFloorArea,
        },
        {
            title: "More",
            elements: [],
            func: SetFloorArea,
        },
    ];
    return (
        <motion.div
            variants={motionContainerRev}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center items-center mt-7 md:justify-between"
        >
            <SearchBox searchFunc={SetSearchText} />

            {arr.map((ele, idx) => (
                <DropDownButton
                    key={idx}
                    title={ele.title}
                    elements={ele.elements}
                    func={ele.func}
                />
            ))}
        </motion.div>
    );
}
