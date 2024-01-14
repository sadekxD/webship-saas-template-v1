"use client";
import { useState } from "react";
import { signOut, useSession, signIn } from "next-auth/react";

import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icons";
import useScroll from "@/hooks/useScroll";
import { classNames } from "@/lib/utils";
import { navLinks } from "@/config/config";

export default function Header() {
  const scrolled = useScroll(64);
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const { data: session, status } = useSession();
  const user = session?.user;

  const toggleMobileNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div
      className={classNames(
        "fixed inset-x-0 top-0 z-10",
        scrolled ? "bg-base-100 shadow" : "",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <Link
          href="/"
          className="flex  items-center justify-center  gap-2 font-semibold"
        >
          {/* <div className="aspect-square h-10 w-10 rounded-md">
            <Icons.asterisk
              width={36}
              height={36}
              className="bg-primary text-gray-300"
            />
          </div> */}
          <p className="font-bold">Webship.ing</p>
        </Link>
        <div
          className={classNames(
            navOpen
              ? "top-0 bg-base-100 bg-opacity-40 backdrop-blur-sm"
              : "-top-full",
            "fixed left-0 z-10 flex h-screen w-full flex-1 flex-col items-center gap-8 px-5 py-20 text-sm font-semibold duration-500 md:static md:h-fit md:w-auto md:flex-row md:justify-between md:py-0 md:pt-0",
          )}
        >
          <ul className="flex flex-col items-center gap-8 md:flex-row md:gap-6">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>

          {status === "loading" ? (
            <></>
          ) : status === "authenticated" ? (
            <div className="flex w-full items-center justify-center gap-4 md:w-fit">
              <Link
                href="/dashboard"
                className="btn btn-primary flex px-3 py-1.5 text-sm font-semibold"
              >
                <span>Dashboard</span>
                <Icons.chevronRight width={20} height={20} />
              </Link>
              <button
                onClick={() => signOut()}
                className="btn  whitespace-nowrap break-keep px-3 py-1.5 text-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex w-full items-center gap-4 md:w-fit">
              <button
                onClick={() => signIn()}
                className="flex-1 px-3 py-1.5 text-sm font-semibold"
              >
                Login
              </button>
              <button
                onClick={() => signIn()}
                className="btn btn-primary flex-1 whitespace-nowrap break-keep px-3 py-1.5 text-sm"
              >
                Sign up
              </button>
            </div>
          )}
        </div>
        <button
          className="z-40 aspect-square h-10 w-10 md:hidden"
          onClick={toggleMobileNav}
        >
          {navOpen ? <Icons.close /> : <Icons.menu />}
        </button>
      </div>
    </div>
  );
}
