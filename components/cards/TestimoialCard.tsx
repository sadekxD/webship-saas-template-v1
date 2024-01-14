import Image from "next/image";

function TestimoialCard() {
  return (
    <div className="card card-body mx-auto w-full border bg-base-100 p-5 font-light">
      <div className="mb-4 flex w-full items-center">
        <Image src="/vercel.png" width={40} height={40} alt="avatar name" />
        <div className="flex-grow pl-3">
          <h6 className="text-sm font-bold">John Doe</h6>
        </div>
      </div>
      <p className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
        obcaecati ullam excepturi dicta error deleniti sequi.
      </p>
      <div className="rating rating-sm">
        <input
          type="radio"
          name="rating-6"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-6"
          className="mask mask-star-2 bg-orange-400"
          defaultChecked
        />
        <input
          type="radio"
          name="rating-6"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-6"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-6"
          className="mask mask-star-2 bg-orange-400"
        />
      </div>
    </div>
  );
}

export default TestimoialCard;
