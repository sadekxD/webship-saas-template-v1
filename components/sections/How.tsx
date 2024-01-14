import React from "react";
import SectionTop from "../SectionTop";
import Image from "next/image";

function How() {
  return (
    <section className="pt-16">
      <SectionTop />
      <div className="card mt-12 flex items-center justify-center overflow-hidden md:mt-16">
        {/* <Image
          src="/assets/browser.svg"
          width={1000}
          height={1000}
          alt="frame"
        /> */}
        <iframe
          src="https://www.youtube.com/embed/c21QZnQtGqo?si=hvORKppcb8FqXxHJ"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="aspect-video w-full"
        ></iframe>
      </div>
    </section>
  );
}

export default How;
