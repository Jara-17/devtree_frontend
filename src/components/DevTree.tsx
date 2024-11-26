import { Link, Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import NavigationTabs from "./NavigationTabs";
import { User } from "../types";

type DevTreeProps = {
  user: User;
};

export default function DevTree({ user }: DevTreeProps) {
  return (
    <>
      <>
        <header className="bg-slate-800 py-5">
          <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center md:justify-between">
            <div className="w-full p-5 lg:p-0 md:w-1/3">
              <img src="/logo.svg" className="w-full block" />
            </div>
            <div className="md:w-1/3 md:flex md:justify-end">
              <button
                className=" hover:bg-lime-500 border border-lime-500 text-lime-500 p-2 hover:text-white uppercase font-black text-xs rounded-lg cursor-pointer transition-colors duration-300 ease-in-out"
                onClick={() => {}}
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        </header>
        <div className="bg-gray-900  min-h-screen py-10">
          <main className="mx-auto max-w-5xl p-10 md:p-0">
            <NavigationTabs />

            <div className="flex justify-end">
              <Link
                className="font-bold text-right text-white hover:text-cyan-500 transition-colors duration-300 ease-in-out text-2xl"
                to={""}
                target="_blank"
                rel="noreferrer noopener"
              >
                Visitar Mi Perfil: /{user.handle}
              </Link>
            </div>

            <div className="flex flex-col md:flex-row gap-10 mt-10">
              <div className="flex-1 ">
                <Outlet />
              </div>
              <div className="w-full md:w-96 bg-slate-800 px-5 py-10 space-y-6 rounded-md shadow-lg border border-lime-500 shadow-lime-500"></div>
            </div>
          </main>
        </div>
        <Toaster position="top-right" richColors />
      </>
    </>
  );
}
