
"use client";

import Image from "next/image";

export default function DetailsLogementCard({ logement }) {
  return (
    <div className="bg-color-text rounded-lg shadow-md overflow-hidden">
        
    <div className="p-4">
        <h2 className="text-xl font-semibold font-title">{logement.nom}</h2>

        </div>

      <Image
        src={logement.image}
        alt={logement.nom}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <p className="text-lg font-bold text-button mt-2">{logement.prix}</p>
   <p className="text-sm text-gray-600 font-body">Description : {logement.description}</p>
        <p className="text-sm text-gray-600 font-body">Catégorie : {logement.categorie}</p>
        
      </div>
<button
        onClick={() => {
    alert('Reservation confirmée');} }
        className="bg-primary text-color-text px-4 py-2 rounded hover:bg-secondary transition ml-16 mr-16 mb-16 "
      >
        Réserver
      </button>
    </div>
  );
}