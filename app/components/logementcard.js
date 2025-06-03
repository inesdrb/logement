"use client";
import { useRouter } from 'next/navigation';
import Image from "next/image";

export default function LogementCard({ logement }) {
    const router = useRouter();

  return (
    
    <div className="bg-white rounded-lg shadow-md ">
      <Image
        src={logement.image}
        alt={logement.nom}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold font-opensans text-primary">{logement.nom}</h2>
        <p className="text-sm text-blue-900 font-body">Catégorie : {logement.categorie}</p>
        <p className="text-lg font-bold text-secondary mt-2">{logement.prix}</p>
      </div>
      <button   onClick={() => router.push(`/logements/${logement.id}`)} className=" px-4 py-4 bg-primary text-secondary rounded  ml-16 mr-16 mb-16 ">Details des appartements</button>
    </div>
  );
}