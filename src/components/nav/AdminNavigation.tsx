import { useQueryClient } from "@tanstack/react-query";

export default function AdminNavigation() {
  const queryClient = useQueryClient();

  const logout = () => {
    localStorage.removeItem("AUTH_TOKEN");
    queryClient.invalidateQueries({ queryKey: ["user"] });
  };
  return (
    <button
      className=" hover:bg-lime-500 border border-lime-500 text-lime-500 p-2 hover:text-slate-800 uppercase font-black text-xs rounded-lg cursor-pointer transition-colors duration-300 ease-in-out"
      onClick={logout}
    >
      Cerrar Sesión
    </button>
  );
}
