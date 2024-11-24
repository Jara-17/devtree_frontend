import { Link } from "react-router-dom";

export default function LoginView() {
  return (
    <>
      <h1 className="text-cyan-500 font-bold text-4xl">Iniciar Sesión</h1>
      <nav className="mt-10">
        <Link
          className="text-center text-white hover:text-cyan-500 transition-colors text-lg block"
          to="/auth/register"
        >
          ¿No tienes una cuenta? Registrate aquí
        </Link>
      </nav>
    </>
  );
}
