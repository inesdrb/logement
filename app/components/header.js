import { FaHome } from 'react-icons/fa'
export default function Header() {
  return (
       

<div className="bg-secondary  px-6 py-4">
     <div className="flex items-center gap-2 justify-center">
        <FaHome className="text-primary text-3xl" />
      <h1 className="text-3xl text-center text-primary font-bold font-itim">LocaTunisie</h1>
      </div>
   </div>
  );
}

