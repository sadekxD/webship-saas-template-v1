"use client";
import React from "react";

function WaitlistForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    /* 
    Do something here for waitlist
    */
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-2 md:flex-row"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="input input-bordered w-full shadow-subtle md:max-w-xs"
      />
      <button className="btn btn-primary flex w-full items-center gap-2 px-4 py-3 text-base font-medium md:w-fit">
        Get early access
      </button>
    </form>
  );
}

export default WaitlistForm;
