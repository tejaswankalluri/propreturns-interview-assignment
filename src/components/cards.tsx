import { useState, useEffect } from "react";
import client from "@/apollo-client";
import { gql } from "@apollo/client";
import Card from "./card";
import SearchBox from "./search";

export interface IData {
    _id: String;
    name: String;
    price: number;
    propertyType: String;
    saleType: String;
    address: String;
    images: string[];
}

export default function Cards() {
    const [data, setData] = useState<IData[]>([]);
    const [searchText, setSearchText] = useState("");
    function setSearchTextFunc(text: string) {
        setSearchText(text);
    }
    useEffect(() => {
        client
            .query({
                query: gql`
                    query getProperties {
                        GetProperties {
                            _id
                            name
                            price
                            propertyType
                            saleType
                            address
                            images
                        }
                    }
                `,
            })
            .then((res) => setData(res.data.GetProperties));
    }, []);
    return (
        <>
            <SearchBox searchFunc={setSearchTextFunc} />
            {data
                .filter((item) => item.name.toLowerCase().includes(searchText))
                .map((item, key) => (
                    <Card key={key} data={item} id={key} />
                ))}
        </>
    );
}
