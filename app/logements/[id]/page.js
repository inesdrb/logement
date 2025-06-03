"use client";


import logements from '@/app/data/logement';
import { useParams } from 'next/navigation';
import DetailsLogementCard from '@/app/components/details';

export default function DetailsList() {
  const { id } = useParams();
const logement = logements.find(a => a.id === Number(id));

  if (!logement) {
    return <div className="p-4 text-red-500">Logement introuvable</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
          <DetailsLogementCard key={logement.id} logement={logement} />
        
      </div>
    </div>
  );
}