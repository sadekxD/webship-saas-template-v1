import Link from "next/link";
import Copyright from "./Copyright";
import { Icons } from "./Icons";

function Footer() {
  return (
    <footer className="mt-16 border-t bg-base-100">
      <div className=" mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-5 md:gap-0">
        <div className="col-span-2">
          <Icons.asterisk width="26" height="26" />
          <h1 className="mt-4 text-xl font-bold">Webship.ing</h1>
          <div className="mt-4 flex items-center gap-4">
            <Link href="#">
              <Icons.twitter width="20" height="20" />
            </Link>
            <Link href="#">
              <Icons.gitHub width="20" height="20" />
            </Link>
          </div>
          <Copyright companyName="Webship" />
        </div>
        <div className="col-span-3 grid grid-cols-2 gap-4 text-xs md:grid-cols-4">
          <ul className="flex flex-col gap-2">
            <li className="text-sm font-medium">Products</li>
            <li>
              <Link href="#" className="font-semibold underline">
                Link
              </Link>
            </li>
            <li>
              <Link href="#" className="font-semibold underline">
                Link
              </Link>
            </li>
            <li>
              <Link href="#" className="font-semibold underline">
                Link
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="text-sm font-medium">Categories</li>
            <li>
              <Link href="#" className="font-semibold underline">
                Link
              </Link>
            </li>
            <li>
              <Link href="#" className="font-semibold underline">
                Link
              </Link>
            </li>
            <li>
              <Link href="#" className="font-semibold underline">
                Link
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="text-sm font-medium">Company</li>
            <li>
              <Link href="#" className="font-semibold underline">
                Link
              </Link>
            </li>
            <li>
              <Link href="#" className="font-semibold underline">
                Link
              </Link>
            </li>
            <li>
              <Link href="#" className="font-semibold underline">
                Link
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="text-sm font-medium">Info</li>
            <li>
              <Link href="#" className="font-semibold underline">
                Link
              </Link>
            </li>
            <li>
              <Link href="#" className="font-semibold underline">
                Link
              </Link>
            </li>
            <li>
              <Link href="#" className="font-semibold underline">
                Link
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
