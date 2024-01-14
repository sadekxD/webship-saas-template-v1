import Image from "next/image";
import SectionTop from "../SectionTop";
import Card1 from "../cards/Card1";

function Feature() {
  return (
    <section id="features" className="pt-16">
      <SectionTop />
      <div className="card card-body relative mt-12 flex  flex-col gap-10 overflow-hidden border bg-base-100 p-8 md:mt-16 md:p-12 lg:flex-row lg:items-center">
        <div className="max-w-md space-y-6 ">
          <Image src="/assets/logo.png" alt="logo" width={64} height={64} />
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">
              Huge wireframe layout library
            </h3>
            <p className="text-ghost">
              Design better and spend less time without restricting creative
              freedom.
            </p>
            <p className="text-ghost">
              Use a set of text and color styles, customize and apply changes to
              all pages at once. Create a unique look in just a few minutes.
            </p>
          </div>
          <button className="btn rounded-xl px-4 py-2 text-base">
            Learn more
          </button>
        </div>
        <div className="relative min-h-96 w-full md:min-h-[500px]">
          <Image
            src="/assets/browser.svg"
            alt="featured image"
            width={1000}
            height={1000}
            className="absolute left-0 top-0 min-w-[800px] opacity-20 md:min-w-[1000px]"
          />
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-4 md:gap-6">
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
    </section>
  );
}

export default Feature;
