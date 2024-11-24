import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";

export default function RegisterView() {
  const initialValues = {
    name: "",
    lastname: "",
    handle: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  const {
    reset,
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const handleRegister = () => {
    // Enviar los datos al backend
    console.log("Desde handleRegister");
    reset();
  };

  return (
    <>
      <h1 className="text-cyan-500 font-bold text-4xl">Crear Cuenta</h1>

      <form
        onSubmit={handleSubmit(handleRegister)}
        className="border border-cyan-500 shadow-lg shadow-cyan-500 px-5 py-10 rounded-lg space-y-10 mt-10"
      >
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="name" className="text-2xl text-cyan-500">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            placeholder="Tu Nombre"
            className="bg-slate-900 text-white border border-cyan-500 p-3 rounded-lg placeholder-slate-400 outline-none"
            {...register("name", {
              required: "El Nombre es obligatorio",
            })}
          />

          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </div>
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="lastname" className="text-2xl text-cyan-500">
            Apellido
          </label>
          <input
            id="lastname"
            type="text"
            placeholder="Tu Apellido"
            className="bg-slate-900 text-white border border-cyan-500 p-3 rounded-lg placeholder-slate-400 outline-none"
            {...register("lastname", {
              required: "El Apellido es obligatorio",
            })}
          />

          {errors.lastname && (
            <ErrorMessage>{errors.lastname.message}</ErrorMessage>
          )}
        </div>
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="email" className="text-2xl text-cyan-500">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de Registro"
            className="bg-slate-900 text-white border border-cyan-500 p-3 rounded-lg placeholder-slate-400 outline-none"
            {...register("email", {
              required: "El Email es obligatorio",
            })}
          />

          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="handle" className="text-2xl text-cyan-500">
            Handle
          </label>
          <input
            id="handle"
            type="text"
            placeholder="Nombre de usuario: sin espacios"
            className="bg-slate-900 text-white border border-cyan-500 p-3 rounded-lg placeholder-slate-400 outline-none"
            {...register("handle", {
              required: "El Handle es obligatorio",
            })}
          />

          {errors.handle && (
            <ErrorMessage>{errors.handle.message}</ErrorMessage>
          )}
        </div>
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="password" className="text-2xl text-cyan-500">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password de Registro"
            className="bg-slate-900 text-white border border-cyan-500 p-3 rounded-lg placeholder-slate-400 outline-none"
            {...register("password", {
              required: "El Password es obligatorio",
              minLength: {
                value: 8,
                message: "El Password debe tener al menos 8 caracteres",
              },
            })}
          />

          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </div>

        <div className="grid grid-cols-1 space-y-3">
          <label
            htmlFor="password_confirmation"
            className="text-2xl text-cyan-500"
          >
            Repetir Password
          </label>
          <input
            id="password_confirmation"
            type="password"
            placeholder="Repetir Password"
            className="bg-slate-900 text-white border border-cyan-500 p-3 rounded-lg placeholder-slate-400 outline-none"
            {...register("password_confirmation", {
              required: "Repetir Password es obligatorio",
              minLength: {
                value: 8,
                message: "El Password debe tener al menos 8 caracteres",
              },
            })}
          />

          {errors.password_confirmation && (
            <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>
          )}
        </div>

        <input
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-700 transition-colors p-3 text-lg w-full uppercase text-white rounded-lg font-bold cursor-pointer"
          value="Crear Cuenta"
        />
      </form>

      <nav className="mt-10">
        <Link
          className="text-center text-white hover:text-cyan-500 transition-colors text-lg block"
          to="/auth/login"
        >
          ¿Ya tienes una cuenta? Inicia Sesión aquí
        </Link>
      </nav>
    </>
  );
}
