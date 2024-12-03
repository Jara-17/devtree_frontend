import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import slugify from "react-slugify";
import { useMutation } from "@tanstack/react-query";
import { searchByHandle } from "../api/DevTreeAPI";
import { Link } from "react-router-dom";

export default function SearchForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { handle: "" },
  });

  const mutation = useMutation({
    mutationFn: searchByHandle,
  });

  const handle = watch("handle");

  const handleSearch = () => {
    const slug = slugify(handle);
    mutation.mutate(slug);
  };

  return (
    <form
      onSubmit={handleSubmit(handleSearch)}
      className="space-y-5 text-cyan-500"
    >
      <div className="relative flex items-center  bg-gray-900 border border-lime-500 px-2 rounded-lg">
        <label className="text-lime-500" htmlFor="handle">
          devtree.com/
        </label>
        <input
          type="text"
          id="handle"
          className="border-none bg-transparent p-2 focus:ring-0 flex-1"
          placeholder="elonmusk, zuck, jeffbezos"
          {...register("handle", {
            required: "Un Nombre de Usuario es obligatorio",
          })}
        />
      </div>
      {errors.handle && <ErrorMessage>{errors.handle.message}</ErrorMessage>}

      <div className="mt-10">
        {mutation.isPending && <p className="text-center">Cargando...</p>}
        {mutation.error && (
          <p className="text-center text-red-600 font-black">
            {mutation.error.message}
          </p>
        )}
        {mutation.data && (
          <p className="text-center text-cyan-500 font-black">
            {mutation.data} ir a{" "}
            <Link
              className="hover:text-lime-500 transition-colors duration-300 ease-in-out"
              state={{ handle: slugify(handle) }}
              to={"/auth/register"}
            >
              Registro
            </Link>
          </p>
        )}
      </div>

      <input
        type="submit"
        className="border border-cyan-500 hover:bg-cyan-500 hover:text-white text-cyan-500 transition-colors duration-300 ease-in-out p-3 text-lg w-full uppercase rounded-lg font-bold cursor-pointer outline-none"
        value="Obtener mi DevTree"
      />
    </form>
  );
}
