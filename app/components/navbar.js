"use client";
import Link from "next/link";
import Image from "next/image";
import { FaHome } from 'react-icons/fa'


export default function NavBar(){
return (
    <div className="bg-secondary  flex justify-between items-center  px-6 py-4 ">
         <FaHome className="text-primary text-3xl" />
 
    <nav className=" p-4 text-primary font-montserrat font-semibold">
    <ul className="flex space-x-6  "> 
<li><Link  href='/' className="hover:text-white">Accueil</Link></li>
<li><Link  href='/logements' className="hover:text-white">Logement</Link></li>
<li><Link href='/inscription'className="hover:text-white">Inscription</Link></li>
<li><Link href='/contact'className="hover:text-white">Contact</Link></li>
</ul>
</nav>
<Link
  className="group relative inline-block text-sm  text-secondary focus:ring-3 focus:outline-hidden font-montserrat font-semibold"
  href="#"
>
  <span className="absolute inset-0 border border-primary"></span>
  <span
    className="block border border-primary bg-primary px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
  >
    Connexion
  </span>
</Link>
</div>
);
}
