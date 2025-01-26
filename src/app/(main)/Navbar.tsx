"use client"

import Link from "next/link";
import React from "react";
import { UserButton } from "@clerk/nextjs";
import { CreditCard, Gavel } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import {dark} from "@clerk/themes";
import { useTheme } from "next-themes";


const Navbar = () => {
  const {theme} = useTheme();
 
  return (
    <header className="shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 p-2">
        <Link href="/resumes" className="flex items-center gap-2">
          <Gavel />
                    <span className="text-[20px] font-extrabold tracking-tight text-zinc-200 bg-clip-text text-transparent">
                      ResumeSMITH
                    </span>
        </Link>
        <div className="flex items-center gap-3">
        <ThemeToggle/>
        
        <UserButton 
        appearance={{
          baseTheme:theme=== "dark"? dark :undefined,
            elements:{
                avatarBox :{
                    width:32,
                    height:32,
                }
            }
        }}>
            <UserButton.MenuItems>
                <UserButton.Link
                label="Billing"
                labelIcon={<CreditCard className = "size-4"/>}
                href="/billing"
                >

                </UserButton.Link>
            </UserButton.MenuItems>
        </UserButton>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


