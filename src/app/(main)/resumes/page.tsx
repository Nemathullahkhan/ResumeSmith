import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { resumeDataInclude } from "@/lib/types";
import { auth } from "@clerk/nextjs/server";
import { PlusSquare } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import ResumeItem from "./ResumeItem";

export const metadata: Metadata = {
  title: "%s - Your Resumes ",
};

export default async function Page() {
  const { userId } = await auth();
  if (!userId) {
    return null;
  }

  const [resumes, totalCount] = await Promise.all([
    prisma.resume.findMany({
      where: {
        userId,
      },
      orderBy: {
        updatedAt: "desc",
      },
      include: resumeDataInclude,
    }),
    prisma.resume.count({
      where: {
        userId,
      },
    }),
  ]);

  return (
    <main className="max-auto m-4 mx-auto w-full max-w-6xl space-y-2 px-3 py-6">
      <Button asChild className="mx-auto flex w-fit gap-2">
        <Link href={"/editor"}>
          <PlusSquare className="size-5" />
          New Resume
        </Link>
      </Button>
      <div className="space-y-1">
        <h1 className="text-3xl font-bold">Your resumes</h1>
        <p>Total: {totalCount}</p>
      </div>
      <div className="flex w-full flex-col gap-3 sm:grid md:grid-cols-3 lg:grid-cols-4">
        {resumes.map((resume) => (
          <ResumeItem key={resume.id} resume={resume} />
        ))}
      </div>
    </main>
  );
}

// import { Button } from "@/components/ui/button";
// import prisma from "@/lib/prisma";
// import { resumeDataInclude } from "@/lib/types";
// import { auth } from "@clerk/nextjs/server";
// import { PlusSquare } from "lucide-react";
// import { Metadata } from "next";
// import Link from "next/link";
// import React from "react";
// import ResumeItem from "./ResumeItem";

// export const metadata: Metadata = {
//   title: "Your Resumes",
// };

// // Force dynamic rendering to always fetch fresh data
// export const dynamic = 'force-dynamic';
// export const revalidate = 0;

// export default async function Page() {
//   const { userId } = await auth();
//   if (!userId) {
//     return null;
//   }

//   const [resumes, totalCount] = await Promise.all([
//     prisma.resume.findMany({
//       where: {
//         userId,
//       },
//       orderBy: {
//         updatedAt: "desc",
//       },
//       include: resumeDataInclude,
//     }),
//     prisma.resume.count({
//       where: {
//         userId,
//       },
//     }),
//   ]);

//   return (
//     <main className="max-auto mx-auto w-full max-w-6xl space-y-2 px-3 py-6 m-4">
//       <Button asChild className="mx-auto flex w-fit gap-2">
//         <Link href={"/editor"}>
//           <PlusSquare className="size-5" />
//           New Resume
//         </Link>
//       </Button>
//       <div className="space-y-1">
//         <h1 className="text-3xl font-bold">Your resumes</h1>
//         <p>Total: {totalCount}</p>
//         {resumes.map((resume) => (
//           <ResumeItem key={resume.id} resume={resume} />
//         ))}
//       </div>
//     </main>
//   );
// }
