"use client";
import { whyList } from "@/config/config";
import { classNames } from "@/lib/utils";
import { Tab } from "@headlessui/react";

function Tabs() {
  return (
    <Tab.Group>
      <Tab.List className="space-y-4 md:space-y-6">
        {whyList.map((item, i) => (
          <Tab
            key={i}
            className={({ selected }) =>
              classNames(
                "card card-body w-full min-w-[360px] space-y-2 border bg-base-100",
                selected ? "bg-base-200 outline-none ring-2" : "",
              )
            }
          >
            <h3 className="text-lg font-semibold md:text-xl">{item.title}</h3>
            <p className="text-ghost text-sm md:text-base">
              {item.description}
            </p>
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {whyList.map((item, i) => (
          <Tab.Panel key={i} className="card card-body glass h-full">
            {item.content}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

export default Tabs;
