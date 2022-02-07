import Link from "next/link";
import Image from 'next/image'
import profilePic from '../public/avatar_50.png'

export default function Navbar() {
    return (
        <div className="xl:block container"> 
            <nav className="relative flex justify-between my-2">
                <Link href="/">
                    <a className="flex items-center justify-start hover: no-underline p-2" >
                        <Image
                            src={profilePic}
                            alt="Picture of the author"
                        />                        
                    <span className="font-semibold text-inverted ml-4">Hubert Wasier</span></a>
                </Link>
                <div className="relative flex items-center justify-between">
                    <Link href="about">
                        <a className="btn hover:bg-neutral-muted tracking-normal px-6 py-3 mr-2 rounded">A propos</a>
                    </Link>
                    <Link href="contact">
                        <a className="btn hover:bg-neutral-muted tracking-normal px-6 py-3 mr-2 rounded">Contactez moi!</a>
                    </Link>
                </div>
           
            </nav>
        </div>
    )
}