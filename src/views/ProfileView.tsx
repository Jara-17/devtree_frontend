import { useForm } from "react-hook-form";
import ErrorMessage from "../components/ErrorMessage";

export default function ProfileView() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      handle: "",
      description: "",
    },
  });

  const handleUserProfileForm = (formData) => {
    console.log(formData);
  };

  return (
    <form
      className="border border-cyan-500 shadow-lg shadow-cyan-500 px-5 py-10 rounded-lg space-y-5 mt-1 "
      onSubmit={handleSubmit(handleUserProfileForm)}
    >
      <legend className="text-2xl text-cyan-500 text-center">
        Editar Información
      </legend>

      <div className="grid grid-cols-1 gap-2">
        <label className="text-cyan-500 text-lg" htmlFor="handle">
          Handle
        </label>
        <input
          id="handle"
          type="text"
          className="border-none bg-slate-100 rounded-lg p-2"
          placeholder="handle o Nombre de Usuario"
          {...register("handle", {
            required: "El Nombre de Usuario es obligatorio",
          })}
        />

        {errors.handle && <ErrorMessage>{errors.handle.message}</ErrorMessage>}
      </div>

      <div className="grid grid-cols-1 gap-2">
        <label className="text-cyan-500 text-lg" htmlFor="description">
          Descripción
        </label>
        <textarea
          className="border-none bg-slate-100 rounded-lg p-2"
          placeholder="Tu Descripción"
          id="description"
          {...register("description", {
            required: "La Descripción es obligatoria",
          })}
        />

        {errors.description && (
          <ErrorMessage>{errors.description.message}</ErrorMessage>
        )}
      </div>

      <div className="grid grid-cols-1 gap-2">
        <label className="text-cyan-500 text-lg" htmlFor="handle">
          Imagen
        </label>
        <input
          id="image"
          type="file"
          name="handle"
          className="border-none bg-slate-100 rounded-lg p-2"
          accept="image/*"
          onChange={() => {}}
        />
      </div>

      <input
        type="submit"
        className="border border-cyan-500 hover:bg-cyan-500 hover:text-white text-cyan-500 transition-colors duration-300 ease-in-out p-3 text-lg w-full uppercase rounded-lg font-bold cursor-pointer outline-none"
        value="Guardar Cambios"
      />
    </form>
  );
}