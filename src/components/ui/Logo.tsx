import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "full" | "mark";
  priority?: boolean;
};

export function Logo({ className, variant = "full", priority = false }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Nexa Nairobi"
      width={variant === "full" ? 400 : 320}
      height={variant === "full" ? 200 : 96}
      priority={priority}
      className={cn(
        "h-auto w-auto object-contain",
        variant === "full"
          ? "max-h-32 md:max-h-40"
          : "max-h-16 w-auto md:max-h-20 lg:max-h-24",
        className,
      )}
    />
  );
}
