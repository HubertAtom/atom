import Head from "next/head";
import Navbar from "./navbar";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Hubert - Développeur Web Fullstack</title>
            </Head>
            <Navbar />
            <main>{children}</main>
        </>
    )
}