import Header from "../components/Header";
import SearchForm from "../components/SearchForm";

export default function HomeView() {
  return (
    <>
      <Header />
      <main className="bg-slate-900 min-h-screen py-10 lg:bg-home bg bg-no-repeat bg-right-top lg:bg-home-xl">
        <div className="max-w-5xl mx-auto mt-10">
          <div className="lg:w-1/2 px-10 lg:p-0 space-y-6 text-white">
            <h1 className="text-6xl font-black">
              Todas tus
              <span className="text-cyan-500"> Redes Sociales </span>
              en un enlace
            </h1>

            <p className="text-xl text-gray-300">
              Únete a más de 200 mil developers compartiendo sus redes sociales,
              comparte tú perfil de TikTok, Facebook, Instagram, YouTube, GitHub
              y más.
            </p>

            <SearchForm />
          </div>
        </div>
      </main>
    </>
  );
}
