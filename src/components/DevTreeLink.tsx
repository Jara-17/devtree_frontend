import { SocialNetwork } from "../types";

type DevTreeLinkProps = {
  link: SocialNetwork;
};

export default function DevTreeLink({ link }: DevTreeLinkProps) {
  return (
    <li className="bg-gray-900 px-5 py-2 flex items-center gap-5 rounded-lg">
      <div
        className={`w-12 h-12 bg-cover ${
          link.name === "github" ? "bg-slate-50 rounded-full" : ""
        } object-cover overflow-hidden`}
        style={{
          backgroundImage: `url('/social/icon_${link.name}.svg')`,
        }}
      ></div>

      <p className="capitalize text-white">
        Visita mi: <span className="font-bold text-lime-500">{link.name}</span>
      </p>
    </li>
  );
}
