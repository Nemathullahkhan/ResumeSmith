import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { resumeDataInclude } from "@/lib/types";
import { auth, currentUser } from "@clerk/nextjs/server";
import { PlusSquare, Map, Compass, Book, Download } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import ResumeItem from "./ResumeItem";
import Image from "next/image";
import gptLogo from "../../../assets/gptLogo.png";
import { useRouter } from "next/navigation";
export const metadata: Metadata = {
  title: "Your Resumes ",
};

export default async function Page() {
  const user = await currentUser();
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
    <div className="flex w-full flex-col items-center justify-center">
      {totalCount === 0 ? (
        // Hero section when no resumes exist
        <div className="flex w-full flex-col items-center justify-center px-4 py-12">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 flex justify-center">
              <div className="flex items-center space-x-2 rounded-full px-4 py-2">
                <Map className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Resume Builder
                </span>
              </div>
            </div>

            <h1 className="mb-6 text-3xl font-bold tracking-tight dark:text-neutral-200 sm:text-5xl">
              Plan and create your resume
            </h1>

            <p className="mb-4 px-32 text-center text-lg text-muted-foreground sm:text-lg">
              Set the direction and map out your career journey with our
              purpose-built resume creation features.
            </p>

            <div className="mx-auto mb-12 grid max-w-xl grid-cols-1 items-center gap-3 px-24 sm:grid-cols-2">
              <div className="flex items-center gap-x-2">
                <Compass className="h-4 w-4 text-primary" />
                <h3 className="text-sm font-[550]">Guided Process</h3>
              </div>

              <div className="flex items-center gap-x-2">
                <Book className="h-4 w-4 text-primary" />
                <h3 className="text-sm font-[550]">Real-time preview</h3>
              </div>
              <div className="flex items-center gap-x-2">
                <Download className="h-4 w-4 text-primary" />
                <h3 className="text-sm font-[550]">Quick Export</h3>
              </div>
              {/* {Ai assistance} */}
              <div className="flex items-center gap-x-2">
                <Image
                  src={gptLogo}
                  alt="GPT Logo"
                  width={19}
                  height={19}
                  className="bg-transparent dark:brightness-200 dark:invert dark:filter"
                />
                <h3 className="text-sm font-[550]">Quick Export</h3>
              </div>
            </div>

            <Link href={"/editor"} className="">
              <Button size="lg" className="mx-auto flex gap-2 px-4 font-[650]">
                <PlusSquare className="size-5" />
                Create your First Resume
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        // Existing layout when resumes exist
        <div className="w-full max-w-6xl space-y-3 py-8">
          <div className="flex items-center justify-between p-3 pt-5">
            <div className="space-y-2">
              <div>
                <h1 className="text-4xl font-bold tracking-tight">
                  Welcome, {user?.firstName}
                </h1>
                <h1 className="px-4 text-2xl font-bold tracking-tight dark:text-neutral-300">
                  Your resumes
                </h1>
              </div>
              <span className="px-8 dark:text-neutral-300">
                Total :{" "}
                <span className="font-semibold dark:text-neutral-100">
                  {totalCount}
                </span>
              </span>
            </div>
            <Link href={"/editor"}>
              <Button className="mx-auto flex w-fit gap-2">
                <PlusSquare className="size-5" />
                New Resume
              </Button>
            </Link>
          </div>

          <div className="relative gap-3 space-x-2 space-y-2 sm:grid md:grid-cols-3 lg:grid-cols-4">
            {resumes.map((resume) => (
              <ResumeItem key={resume.id} resume={resume} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
