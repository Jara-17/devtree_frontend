import { Switch } from "@headlessui/react";
import { DevTreeLink } from "../types";
import { classNames } from "../utils/utils";
import { ChangeEvent } from "react";

type DevTreeInputProps = {
  item: DevTreeLink;
  handleUrlChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEnableLink: (socialNetwork: string) => void;
};

export default function DevTreeInput({
  item,
  handleUrlChange,
  handleEnableLink,
}: DevTreeInputProps) {
  return (
    <div className="p-5 gap-4 flex items-center bg-gray-800 shadow shadow-cyan-500 border border-cyan-500 rounded-md">
      <div
        className={`w-12 h-12 bg-cover ${
          item.name === "github" ? "bg-slate-50 rounded-full" : ""
        } object-cover overflow-hidden`}
        style={{
          backgroundImage: `url('/social/icon_${item.name}.svg')`,
        }}
      ></div>

      <input
        className="flex-1 rounded-lg bg-gray-800 border border-cyan-500 text-white"
        type="text"
        value={item.url}
        onChange={handleUrlChange}
        name={item.name}
      />

      <Switch
        checked={item.enabled}
        onChange={() => handleEnableLink(item.name)}
        className={classNames(
          item.enabled ? "bg-cyan-500" : "bg-gray-500",
          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-0"
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            item.enabled ? "translate-x-5" : "translate-x-0",
            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-gray-100 shadow ring-0 transition duration-200 ease-in-out"
          )}
        />
      </Switch>
    </div>
  );
}
