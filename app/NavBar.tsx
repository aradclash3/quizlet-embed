import Link from "next/link";
import React from "react";
import { ImEmbed2 } from "react-icons/im";
import Logo from "@/public/LOGO_TRANSPARENT.png";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="flex justify-between py-7 px-10 text-zinc-200 text-opacity-50">
      <div className="space-x-16">
        <Link href="/" className="relative">
          {/* <ImEmbed2 className="absolute w-5  top-[50%] left-[50%] translate-x-[50%] translate-y-[-50%]" /> */}
          {/* Home */}

          <Image className="w-5" src={Logo} alt="image" />
        </Link>
        {false && <Link href="/home">Home</Link>}
        <Link href="/quizlet-sets">Sets</Link>
      </div>

      <div className="space-x-5">
        <Link href="/api/auth/login">Login</Link>
        <Link
          href="/api/auth/login"
          className="border-2 rounded-md border-zinc-800 bg-zinc-800 px-2 py-1"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
