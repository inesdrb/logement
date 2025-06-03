"use client";

import Link from "next/link";
import Image from "next/image";
export default function LocaTunisie() {
  return (
    <section className="relative font-opensans ">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <Image
         src="/images/image1.jpg"
  alt="Maison"
  width={1400}
  height={800}
  className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Superposition de contenu */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-4xl font-extrabold font-title sm:text-5xl text-secondary">
            Bienvenue sur <span className="text-button">Loca Tunisie</span>
            <strong className="block font-extrabold text-secondary mt-2">
              Louez. Publiez. Trouvez.
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed font-body text-secondary font-bold">
            Plateforme de confiance pour les annonces de location des maisons. Déposez ou consultez des annonces en toute simplicité.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              href="/logements"
              className="block w-full rounded bg-secondary px-12 py-3 text-sm font-extrabold text-primary shadow  focus:outline-none focus:ring sm:w-auto transition"
            >
              Voir les logements
            </Link>

            <Link
              href="/contact"
              className="block w-full rounded  bg-secondary px-12 py-3 text-sm font-extrabold text-primary   focus:outline-none focus:ring sm:w-auto transition"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}