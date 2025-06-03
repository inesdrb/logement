"use client";

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import Link from "next/link";

export default function Footer() {
    return (
      <footer className="bg-secondary py-4 px-6 text-center flex justify-between items-center text-primary">

        <p className=" text-primary"> LocaTunisie &copy; 2025</p>
        <Link href="/contact" className=' hover:text-xl hover:underline'>Contactez-nous</Link>
        <div className="flex space-x-4 items-center ">
          <p>Follow us on Social Meia</p>
        <Link href="https://www.facebook.com" > <FaFacebook/> </Link>
        <Link href="https://Instagram.com" ><FaInstagram/> </Link>
        <Link href="https://www.twitter.com" > <FaTwitter/></Link>
</div>

      </footer>
    );
   }