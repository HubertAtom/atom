import Head from "next/head";
import Navbar from "./navbar";

export default function Layout({ children }) {
    return (
        <div className="bg-neutral w-full h-screen overflow-hidden">
            <Head>
                <title>Hubert - Développeur Web Fullstack</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

            </Head>
            <Navbar/>
            <main>{children}</main>
        </div>
    )
}