import { ReactNode } from "react";

type ErrorMessageProps = {
  children: ReactNode;
};

export default function ErrorMessage({ children }: ErrorMessageProps) {
  return (
    <p className=" text-red-500 font-bold text-sm uppercase">{children}</p>
  );
}
