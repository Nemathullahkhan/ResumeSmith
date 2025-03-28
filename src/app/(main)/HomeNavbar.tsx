// "use client";

// import Link from "next/link";
// import React from "react";
// import { Gavel } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const HomeNavbar = () => {
//   return (
//     <header className="fixed left-0 top-0 z-50 w-full bg-transparent shadow-sm">
//       <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 p-4 backdrop-blur-md">
//         <Link href="/resumes" className="flex items-center gap-2">
//           <Gavel />
//           <span className="bg-clip-text text-[20px] font-extrabold tracking-tight text-transparent text-zinc-200">
//             ResumeSMITH
//           </span>
//         </Link>
//         <div className="items-center border-y-2 py-1.5">
//           <Button
//             asChild
//             size="lg"
//             variant="ghost"
//             className="mx-1 h-6 w-12 text-xs tracking-tight"
//           >
//             <Link
//               href="/resumes"
//               className="bg-gradient-to-r from-red-200 to-zinc-100 bg-clip-text text-transparent"
//             >
//               Features
//             </Link>
//           </Button>
//           <Button
//             asChild
//             size="lg"
//             variant="ghost"
//             className="mx-1 h-6 w-12 text-xs font-light tracking-tight"
//           >
//             <Link href="/resumes">FEATURES</Link>
//           </Button>
//           <Button
//             asChild
//             size="lg"
//             variant="ghost"
//             className="mx-1 h-6 w-12 text-xs font-extralight tracking-tighter"
//           >
//             <Link href="/resumes">Features</Link>
//           </Button>
//         </div>
//         <Button
//           asChild
//           size="lg"
//           variant="outline"
//           className="w-12 rounded-full border-2 text-xs tracking-tighter"
//         >
//           <Link href="/resumes">LOGIN</Link>
//         </Button>
//       </div>
//     </header>
//   );
// };

// export default HomeNavbar;



"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Gavel } from "lucide-react";
import { Button } from "@/components/ui/button";

const HomeNavbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-transparent shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4 backdrop-blur-md">
        <Link href="/resumes" className="flex items-center gap-2">
          <Gavel />
          <span className="bg-clip-text text-[20px] font-extrabold tracking-tight text-transparent text-zinc-200">
            ResumeSMITH
          </span>
        </Link>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-zinc-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Sidebar for Mobile */}
      {isOpen && (
        <div className="fixed left-0 top-0 z-40 h-full w-2/3 bg-black bg-opacity-80 p-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link href="/features" className="text-zinc-200">Features</Link>
            <Link href="/process" className="text-zinc-200">Process</Link>
            <Link href="/howitworks" className="text-zinc-200">How It Works</Link>
            <Link href="/contact" className="text-zinc-200">Contact</Link>
          </nav>
        </div>
      )}

      {/* Background Grid */}
      <div className="absolute left-0 top-0 grid w-full grid-cols-[repeat(auto-fill,_64px)] grid-rows-[repeat(auto-fill,_64px)]">
        {Array.from({ length: 274 }).map((_, i) => (
          <div
            key={i}
            className={`h-[64px] w-[64px] bg-transparent ${
              i >= 105 ? "border border-zinc-900/20" : "border border-zinc-900/40"
            }`}
          ></div>
        ))}
      </div>
    </header>
  );
};

export default HomeNavbar;