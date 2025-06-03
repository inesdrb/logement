"use client";

import LogementCard from "@/app/components/logementcard";
import logements from "@/app/data/logement";


export default function LogementList() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8  ">
      <h1 className="text-3xl font-itim mb-6 text-center text-primary font-bold">Toutes les logements</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {logements.map((logement) => (
          <LogementCard key={logement.id} logement={logement} />
        ))}
      </div>
    </div>
  );
}