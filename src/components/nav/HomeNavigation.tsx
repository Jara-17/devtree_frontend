import { Link } from "react-router-dom";

export default function HomeNavigation() {
  return (
    <>
      <Link
        className="hover:text-lime-500 transition-colors duration-300 ease-in-out text-white p-2 uppercase font-black text-xs cursor-pointer"
        to="/auth/login"
      >
        Iniciar Sesión
      </Link>
      <Link
        className="
          border 
          border-lime-500 
          text-lime-500 
          p-2 
          uppercase 
          font-black 
          text-xs 
          cursor-pointer 
          rounded-lg 
          hover:bg-lime-500 
          hover:text-slate-800 
          transition-colors 
          duration-300 
          ease-in-out"
        to="/auth/register"
      >
        Crear Cuenta
      </Link>
    </>
  );
}
