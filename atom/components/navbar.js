import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="about">
                <a>A propos</a>
            </Link>
            <Link href="contact">
                <a>Contactez moi!</a>
            </Link>
        </nav>
    )
}