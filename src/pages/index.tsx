import Head from "next/head";
import Navbar from "@/components/navbar";
import Cards from "@/components/cards";
import DropDownButton from "@/components/buttons/dropdownbutton";
import Filter from "@/components/filter";

export default function Home() {
    return (
        <>
            <Head>
                <title>Propreturns | Home page</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Navbar />
                {/* <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4 gap-5">
                            <Cards />
                        </div>
                    </div>
                </section> */}
                <div className="container mx-auto">
                    <Filter />
                </div>
            </main>
        </>
    );
}
