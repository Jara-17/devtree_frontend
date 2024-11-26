import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { isAxiosError } from "axios";
import { toast } from "sonner";
import ErrorMessage from "../components/ErrorMessage";
import { LoginForm } from "../types";
import api from "../config/axios";

export default function LoginView() {
  const initialValues: LoginForm = {
    email: "",
    password: "",
  };

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const navigate = useNavigate();

  const handleLogin = async (formData: LoginForm) => {
    try {
      const { data } = await api.post(`auth/login`, formData);
      localStorage.setItem("AUTH_TOKEN", data.data);
      toast.success(data.message);
      navigate("/admin");
      reset();
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        toast.error(error.response.data.error);
      }
    }
  };

  return (
    <>
      <h1 className="text-cyan-500 font-bold text-4xl">Iniciar Sesión</h1>

      <form
        onSubmit={handleSubmit(handleLogin)}
        className="border border-cyan-500 shadow-lg shadow-cyan-500 px-5 py-10 rounded-lg space-y-10 mt-10"
      >
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="email" className="text-2xl text-cyan-500">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de Registro"
            className="bg-slate-900 text-white border border-cyan-500 p-3 rounded-lg placeholder-slate-400 outline-cyan-300"
            {...register("email", {
              required: "El Email es obligatorio",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "E-mail no válido",
              },
            })}
          />

          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>

        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="password" className="text-2xl text-cyan-500">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password de Registro"
            className="bg-slate-900 text-white border border-cyan-500 p-3 rounded-lg placeholder-slate-400 outline-cyan-300"
            {...register("password", {
              required: "El Password es obligatorio",
            })}
          />

          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </div>

        <input
          type="submit"
          className="border border-cyan-500 hover:bg-cyan-500 hover:text-white text-cyan-500 transition-colors duration-300 ease-in-out p-3 text-lg w-full uppercase  rounded-lg font-bold cursor-pointer outline-none"
          value="Iniciar Sesión"
        />
      </form>

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
