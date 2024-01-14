import { SectionTopProps } from "@/types";

function SectionTop({
  subheading = "subheading",
  heading = "Lorem Ipsum Dolor sit ammet",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi",
}: SectionTopProps) {
  return (
    <div className="flex flex-col items-center space-y-4 text-center md:space-y-6">
      <span className="badge badge-outline badge-lg text-xs font-medium md:text-sm/loose">
        {subheading}
      </span>
      <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
        {heading}
      </h2>
      <p className="text-ghost max-w-lg text-base md:text-lg">{description}</p>
    </div>
  );
}

export default SectionTop;
