import { ChangeEvent, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { social } from "../data/social";
import DevTreeInput from "../components/DevTreeInput";
import { isValidUrl } from "../utils/utils";
import { updateProfile } from "../api/DevTreeAPI";
import { User } from "../types";

export default function LinkTreeView() {
  const [devTreeLinks, setDevTreeLinks] = useState(social);
  const queryClient = useQueryClient();
  const user: User = queryClient.getQueryData(["user"])!;

  const { mutate } = useMutation({
    mutationFn: updateProfile,

    onError: (error) => {
      toast.error(error.message);
    },

    onSuccess: () => {
      toast.success("Actualizado Correctamente!");
    },
  });

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedLinks = devTreeLinks.map((link) =>
      link.name === e.target.name ? { ...link, url: e.target.value } : link
    );

    setDevTreeLinks(updatedLinks);
  };

  const handleEnableLink = (socialNetwork: string) => {
    const updatedLinks = devTreeLinks.map((link) => {
      if (link.name !== socialNetwork) {
        return link;
      }

      if (!isValidUrl(link.url)) {
        toast.error("URL no válida");
        return link;
      }

      return { ...link, enabled: !link.enabled };
    });

    setDevTreeLinks(updatedLinks);
    queryClient.setQueryData(["user"], (prevData: User) => {
      return {
        ...prevData,
        links: JSON.stringify(updatedLinks),
      };
    });
  };

  return (
    <>
      <div className="space-y-5">
        {devTreeLinks.map((item) => (
          <DevTreeInput
            key={item.name}
            item={item}
            handleUrlChange={handleUrlChange}
            handleEnableLink={handleEnableLink}
          />
        ))}

        <button
          onClick={() => mutate(user)}
          className="
            border 
            border-cyan-500 
            hover:bg-cyan-500 
            hover:text-white 
            text-cyan-500 
            transition-colors 
            duration-300 
            ease-in-out 
            p-3 
            text-lg 
            w-full 
            uppercase  
            rounded-lg 
            font-bold 
            cursor-pointer 
            outline-none
          "
        >
          Guardar Cambios
        </button>
      </div>
    </>
  );
}
