'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const schema = Yup.object().shape({
  name: Yup.string()
    .required('Le nom est obligatoire')
    .min(4, 'Le nom doit contenir au moins 4 caractères'),
  email: Yup.string()
    .email('Email invalide')
    .required("L'email est obligatoire"),
  telephone: Yup.string()
    .required('Numéro de téléphone obligatoire')
    .matches(/^\d{8}$/, 'Le numéro doit contenir exactement 8 chiffres'),
  message: Yup.string()
    .required('Le message est obligatoire')
    .max(30, 'Le message ne doit pas dépasser 30 caractères'),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log('Formulaire soumis :', data);
    alert('Message envoyé avec succès !');
  };

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-12">
      <h1 className="text-3xl font-bold text-center">Contactez-nous</h1>

      {/* Formulaire */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-color-text p-6 rounded shadow space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">Nom</label>
          <input
            type="text"
            {...register('name')}
            className={`mt-1 w-full p-2 border ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } rounded`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register('email')}
            className={`mt-1 w-full p-2 border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } rounded`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Téléphone</label>
          <input
            type="text"
            {...register('telephone')}
            className={`mt-1 w-full p-2 border ${
              errors.telephone ? 'border-red-500' : 'border-gray-300'
            } rounded`}
          />
          {errors.telephone && (
            <p className="text-red-500 text-sm">{errors.telephone.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            {...register('message')}
            rows={3}
            className={`mt-1 w-full p-2 border ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            } rounded`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-button text-color-text px-4 py-2 rounded hover:bg-hover-button transition"
        >
          Envoyer
        </button>
      </form>

      {/* Informations de contact */}
      <div className="bg-gray-100 p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">Informations de contact</h2>
        <p className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-background-footer" />
          Adresse : Chabbia, Tozeur 2243
        </p>
        <p className="flex items-center gap-2">
          <FaPhone className="text-background-footer" />
          Téléphone : +216123456
        </p>
        <p className="flex items-center gap-2">
          <FaEnvelope className="text-background-footer" />
          Email : contact@zanimo.tn
        </p>
        <img
          src="/images/image1.jpg"
          alt="image du site"
          className="mt-4 w-full max-w-sm rounded shadow"
        />
      </div>
    </div>
  );
}