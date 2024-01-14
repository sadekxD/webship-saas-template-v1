import React from "react";
import { Icons } from "../Icons";
import Image from "next/image";
import WaitlistForm from "../forms/WaitlistForm";

function Hero1() {
  return (
    <section className="pb-16 pt-36 md:pt-40">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          <button className="flex w-fit items-center gap-2 rounded-full border px-1.5 text-sm font-medium">
            <span> Join to waitlist</span>
            <Icons.arrowRight width={16} />
          </button>
          <h1 className="text-4xl font-semibold sm:text-5xl/tight md:text-[4rem]/tight">
            Lorem Ipsum <br /> Sit amet
          </h1>
          <p className="text-ghost text-base text-opacity-80 sm:text-lg md:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi
          </p>

          {/* if user want to make a waitlist */}
          {/* <WaitlistForm /> */}
          <button className="btn btn-primary flex items-center gap-2 px-4 py-3 text-base font-medium">
            Get started
          </button>
          <div className="flex items-center gap-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((_) => (
                <Image
                  key={_}
                  src={`/assets/avatar-${_}.png`}
                  alt={`avatar ${_}`}
                  width={32}
                  height={32}
                  className="-mr-3"
                />
              ))}
            </div>
            <p className="text-ghost text-sm">Over 10k happy users</p>
          </div>
        </div>
        <div className="flex">
          <Image
            src="/assets/browser.svg"
            alt="hero image"
            width={1000}
            height={1000}
            className="opacity-20"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero1;
