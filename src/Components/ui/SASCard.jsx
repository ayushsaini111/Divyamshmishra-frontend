"use client";
import React from "react";
import Image from "next/image";
import useInViewAnimation from "../../Hooks/useInViewAnimation";
function SASCard({ text, icon }) {
  const iconAnim = useInViewAnimation();
  const textAnim = useInViewAnimation();

  return (
    <div className="flex items-center justify-center gap-s8 md:gap-s16">
      {/* ICON */}
      <div
        ref={iconAnim.ref}
        className="aspect-square w-full max-w-[120px] relative overflow-hidden rounded-r24 md:rounded-r32 animate-ytop-fadein"
      >
        <Image src={icon} alt="Analytics icon" fill className="object-cover" />
      </div>

      {/* DESCRIPTION */}
      <p
        ref={textAnim.ref}
        className=" max-w-[155px] text-xs md:text-lg md:max-w-[500px] animate-y-fadein"
      >
        {text}
      </p>
    </div>
  );
}

export default SASCard;
