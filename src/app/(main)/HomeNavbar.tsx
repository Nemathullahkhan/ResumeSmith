"use client";

import Link from "next/link";
import React from "react";
import { Gavel } from "lucide-react";
import { Button } from "@/components/ui/button";

const HomeNavbar = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-transparent shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 p-4 backdrop-blur-md">
        <Link href="/resumes" className="flex items-center gap-2">
          <Gavel />
          <span className="bg-clip-text text-[20px] font-extrabold tracking-tight text-transparent text-zinc-200">
            ResumeSMITH
          </span>
        </Link>
        <div className="items-center border-y-2 py-1.5">
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="mx-1 h-6 w-12 text-xs tracking-tight"
          >
            <Link
              href="/resumes"
              className="bg-gradient-to-r from-red-200 to-zinc-100 bg-clip-text text-transparent"
            >
              Features
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="mx-1 h-6 w-12 text-xs font-light tracking-tight"
          >
            <Link href="/resumes">FEATURES</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="mx-1 h-6 w-12 text-xs font-extralight tracking-tighter"
          >
            <Link href="/resumes">Features</Link>
          </Button>
        </div>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="w-12 rounded-full border-2 text-xs tracking-tighter"
        >
          <Link href="/resumes">LOGIN</Link>
        </Button>
      </div>
    </header>
  );
};

export default HomeNavbar;
