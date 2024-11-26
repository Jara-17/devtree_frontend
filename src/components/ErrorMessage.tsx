import { ReactNode } from "react";

type ErrorMessageProps = {
  children: ReactNode;
};

export default function ErrorMessage({ children }: ErrorMessageProps) {
  return (
    <p className=" text-red-500 border border-red-500 rounded-md p-3 font-bold text-sm uppercase">
      {children}
    </p>
  );
}
