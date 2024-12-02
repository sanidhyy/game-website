import type { PropsWithChildren } from "react";
import type { IconType } from "react-icons";

import { cn } from "@/lib/utils";

interface ButtonProps {
  id?: string;
  leftIcon?: IconType;
  rightIcon?: IconType;
  containerClass?: string;
}

export const Button = ({
  id,
  children,
  containerClass,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      id={id}
      className={cn(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black transition hover:opacity-75",
        containerClass
      )}
    >
      {LeftIcon ? <LeftIcon /> : null}

      <p className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        {children}
      </p>

      {RightIcon ? <RightIcon /> : null}
    </button>
  );
};
