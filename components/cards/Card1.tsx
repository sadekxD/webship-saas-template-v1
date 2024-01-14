import Image from "next/image";
import React from "react";

function Card1() {
  return (
    <div className="card card-body w-full min-w-[320px] flex-1 flex-wrap border bg-base-100">
      <Image src="/assets/logo.png" alt="logo" width={64} height={64} />
      <div className="space-y-2">
        <h3 className="text-lg font-semibold md:text-xl">Lorem ipsum dolor</h3>
        <p className="text-sm text-ghost md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
}

export default Card1;
