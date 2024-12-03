import { SocialNetwork, UserHandle } from "../types";

type HandleDataProps = {
  user: UserHandle;
};

export default function HandleData({ user }: HandleDataProps) {
  const links: SocialNetwork[] = JSON.parse(user.links).filter(
    (link: SocialNetwork) => link.enabled
  );

  return (
    <div className="space-y-6 text-white">
      <p className="text-5xl text-center font-black">{user.handle}</p>

      {user.image && (
        <img src={user.image} className="max-w-[250px] mx-auto rounded-lg" />
      )}

      <p className="text-lg text-center font-bold">{user.description}</p>

      <div className="mt-20 flex flex-col gap-6">
        {links.length ? (
          links.map((link) => (
            <a
              key={link.name}
              className="
                bg-gray-900 
                px-5 
                py-2 
                flex 
                items-center 
                gap-5 
                rounded-lg 
                border 
                border-lime-500
                hover:bg-gray-800
                hover:shadow-lime-500
                hover:shadow-md
                transition-all
                duration-300
                ease-in-out
              "
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={`w-12 h-12 bg-cover ${
                  link.name === "github" ? "bg-slate-50 rounded-full" : ""
                } object-cover overflow-hidden`}
                src={`/social/icon_${link.name}.svg`}
                alt="Imagen Red Social"
              />
              <p className="capitalize font-bold text-lg">
                Visita mí: {link.name}
              </p>
            </a>
          ))
        ) : (
          <p className="text-center ">No hay enlaces en este perfil</p>
        )}
      </div>
    </div>
  );
}
