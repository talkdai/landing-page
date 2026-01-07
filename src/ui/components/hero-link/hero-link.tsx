"use client";
import { Dithering } from "@paper-design/shaders-react";
import Link from "next/link";
import { useElementSize } from "@/ui/hooks/use-element-size";
import { useState } from "react";

type HeroLinkProps = {
  href: string;
  title: string;
  description: string;
  stars: string;
  mirrorBackground?: boolean;
};

export function HeroLink({
  href,
  title,
  description,
  stars,
  mirrorBackground,
}: HeroLinkProps) {
  const { ref, size } = useElementSize<HTMLAnchorElement>();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      className="flex flex-1 items-start p-14 justify-center flex-col border-t border-neutral-900 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <Dithering
          width={size.width}
          height={size.height}
          colorBack="transparent"
          colorFront="#9a59ff63"
          shape="wave"
          type="4x4"
          size={11}
          speed={1}
          scale={1.2}
          className={`absolute inset-0 opacity-20 ${
            mirrorBackground ? "scale-[-1]" : ""
          }`}
        />
      )}
      <div className="z-10 gap-4 flex flex-col items-start justify-start">
        <div className="flex px-1 border bg-[var(--bg)] border-neutral-800">
          <p className="m-0 p-2">GitHub Stars</p>
          <p className="m-0 p-2 border-l border-neutral-800">{stars}</p>
        </div>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="font-mono font-light uppercase">{description}</p>
      </div>
    </Link>
  );
}
