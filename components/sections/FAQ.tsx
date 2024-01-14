import React from "react";
import SectionTop from "../SectionTop";
import Link from "next/link";

function FAQ() {
  return (
    <section id="faq" className="grid gap-10 pt-16 lg:grid-cols-10">
      <div className="space-y-2 lg:col-span-4">
        <h2 className="text-2xl font-semibold sm:text-3xl">
          Frequently asked <br /> questions
        </h2>
        <p className="max-w-96">
          You boil the hell out of it. Lorem ipsum dolor sit amet{" "}
          <Link href="#" className="mt-4 underline">
            contact us
          </Link>
        </p>
      </div>
      <div className="space-y-4 lg:col-span-6">
        <div className="collapse collapse-plus bg-base-100">
          <input type="radio" name="my-accordion-3" />
          <div className="font-lg collapse-title font-medium underline">
            How do you make holy water?
          </div>
          <div className="collapse-content">
            <p>
              You boil the hell out of it. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100">
          <input type="radio" name="my-accordion-3" />
          <div className="font-lg collapse-title font-medium underline">
            What's the best thing about Switzerland?
          </div>
          <div className="collapse-content">
            <p>
              I don't know, but the flag is a big plus. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quas cupiditate laboriosam
              fugiat.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100">
          <input type="radio" name="my-accordion-3" />
          <div className="font-lg collapse-title font-medium underline">
            What do you call someone with no body and no nose?
          </div>
          <div className="collapse-content">
            <p>
              Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quas cupiditate laboriosam fugiat.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100">
          <input type="radio" name="my-accordion-3" />
          <div className="font-lg collapse-title font-medium underline">
            Why do you never see elephants hiding in trees?
          </div>
          <div className="collapse-content">
            <p>
              Because they're so good at it. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100">
          <input type="radio" name="my-accordion-3" />
          <div className="font-lg collapse-title font-medium underline">
            How do you make holy water?
          </div>
          <div className="collapse-content">
            <p>
              You boil the hell out of it. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100">
          <input type="radio" name="my-accordion-3" />
          <div className="font-lg collapse-title font-medium underline">
            What's the best thing about Switzerland?
          </div>
          <div className="collapse-content">
            <p>
              I don't know, but the flag is a big plus. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quas cupiditate laboriosam
              fugiat.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100">
          <input type="radio" name="my-accordion-3" />
          <div className="font-lg collapse-title font-medium underline">
            What do you call someone with no body and no nose?
          </div>
          <div className="collapse-content">
            <p>
              Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quas cupiditate laboriosam fugiat.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100">
          <input type="radio" name="my-accordion-3" />
          <div className="font-lg collapse-title font-medium underline">
            Why do you never see elephants hiding in trees?
          </div>
          <div className="collapse-content">
            <p>
              Because they're so good at it. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
