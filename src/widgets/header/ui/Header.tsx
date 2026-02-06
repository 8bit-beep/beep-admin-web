"use client";

import SearchBar from "@/features/search/ui/SearchBar";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full flex items-center gap-4 pt-16 mb-6 px-4 xl:hidden shrink-0">
      <Link href="/">
        <Image width={40} height={40} src="/logo.svg" alt="logo" />
      </Link>
      <SearchBar onlyMobile={true} />
    </header>
  );
};

export default Header;
