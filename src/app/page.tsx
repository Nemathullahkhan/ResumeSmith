"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  Move,
  Brain,
  NotepadTextDashed,
  Lock,
  List,
  Palette,
  Printer,
  Cloud,
} from "lucide-react";
import {
  Pencil,
  Save,
  UserRoundPen,
  Gavel,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { motion, useInView } from "framer-motion";
import image from "@/assets/jakes-resume-1.png";
import editor from "@/assets/editor.png";
import blankPage from "@/assets/blankpage-1.png";
import landinpage1 from "@/assets/landing page -1-1.png";
import landingPage2 from "@/assets/landing page2-1.png";
import { LucideIcon } from 'lucide-react';

// Navbar Component
const HomeNavbar = ({ scrollToSection }: { 
  scrollToSection: (section: "features" | "process" | "contact" | "howitworks") => void 
}) => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-transparent shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 p-4 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-2">
          <Gavel />
          <span className="text-[20px] font-extrabold tracking-tight text-zinc-200 max-md:text-sm">
            ResumeSMITH
          </span>
        </Link>
        <div className="flex items-center gap-4 max-md:gap-2">
          <Button
            variant="ghost"
            onClick={() => scrollToSection("features")}
            className="text-sm text-zinc-300 hover:text-zinc-100 max-md:text-xs"
          >
            Features
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("process")}
            className="text-sm text-zinc-300 hover:text-zinc-100 max-md:text-xs"
          >
            Process
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("howitworks")}
            className="text-sm text-zinc-300 hover:text-zinc-100 max-md:text-xs"
          >
            How It Works
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("contact")}
            className="text-sm text-zinc-300 hover:text-zinc-100 max-md:text-xs"
          >
            Contact
          </Button>
        </div>
        <Button
          asChild
          variant="ghost"
          className="text-md font-extrabold max-md:text-xs"
        >
          <Link href="/resumes">LOGIN</Link>
        </Button>
      </div>
    </header>
  );
};

// Main Component
export default function Home() {
  const { isSignedIn } = useUser();
  const procesRef = useRef(null);
  const ref = useRef(null);
  const featuresRef = useRef(null);
  const processRef = useRef(null);
  const contactRef = useRef(null);
  const howItWorkRef = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isProcessView = useInView(procesRef, { once: true });
  if (isSignedIn) {
    redirect("/resumes");
  }

  const scrollToSection = (section: 'features' | 'process' | 'contact' | 'howitworks') => {
    const refs: Record<string, React.RefObject<HTMLDivElement>> = {
      features: featuresRef,
      process: processRef,
      contact: contactRef,
      howitworks: howItWorkRef,
    };

    refs[section]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <HomeNavbar scrollToSection={scrollToSection} />
      <main className="bg-black-100 relative flex min-h-screen flex-col items-center justify-center gap-8 overflow-hidden px-2 py-32 text-center text-zinc-100 sm:gap-12 md:px-8 lg:py-48">
        {/* Background Grid */}
        <div className="absolute left-0 top-0 grid w-full grid-cols-[repeat(auto-fill,_64px)] grid-rows-[repeat(auto-fill,_64px)]">
          {Array.from({ length: 274 }).map((_, i) => (
            <div
              key={i}
              className={`h-[64px] w-[64px] bg-transparent ${
                i >= 105
                  ? "border border-zinc-900/20"
                  : "border border-zinc-900/40"
              }`}
            ></div>
          ))}
        </div>
        <div className="z-10 max-w-prose space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="scroll-m-20 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Create the{" "}
            <span className="block bg-gradient-to-r from-red-200 to-blue-300 bg-clip-text text-transparent lg:inline-block">
              Perfect Resume
            </span>{" "}
            in Minutes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="sm:text-md text-sm text-zinc-400"
          >
            Our <span className="font-bold">AI resume builder</span> helps you
            design a professional resume
          </motion.p>
        </div>

        {/* Get Started Button */}
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="z-10">
        <Button
          asChild
          size="lg"
          variant="outline"
          className="z-10 border-black bg-white text-lg tracking-tighter text-black"
          >
          <Link href="/resumes">Get started</Link>
        </Button>
          </motion.div>

        {/* Preview Image */}
        <div className="relative z-10 mt-6">
          <div className="absolute inset-0 rounded-sm bg-gradient-to-r from-red-300 via-gray-800 to-blue-300 blur-2xl"></div>
          <Image
            src={image}
            alt="Resume preview"
            width={600}
            height={420}
            className="relative rounded-lg shadow-[0_0_30px_10px_rgba(192,192,192,0.5)]"
          />
        </div>

        {/* Features Section */}
        <div
          ref={featuresRef}
          className="mt-24 flex w-full flex-col items-center space-y-4 pt-24 text-zinc-100 sm:z-20 sm:space-y-6"
        >
          {/* <div className="h-18 w-1/4 rounded-b-full bg-white">
            <div className="flex justify-center text-xl font-bold tracking-tighter text-black sm:text-3xl lg:text-4xl">
              Features
            </div>
          </div> */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="h-18 w-1/4 rounded-b-full bg-white"
          >
            <div className="flex justify-center text-xl font-bold tracking-tighter text-black sm:text-3xl lg:text-4xl">
              Features
            </div>
          </motion.div>
          <p className="z-10 mt-4 text-sm text-zinc-400">
            Discover how <span className="mr-1 font-bold">ResumeSMITH</span>
            transforms your resume creation
          </p>

          {/* Features Grid */}
          <motion.div
            ref={ref} // Attach the ref
            initial={{ opacity: 0, y: 50 }} // Starting animation
            animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
            transition={{ duration: 1.5 }}
          >
            <Image src={editor} alt={""} width={"800"} unoptimized />
            <p className="mb-4 mt-4 text-center text-sm font-bold text-zinc-200">
              Real-time editor for crafting your perfect resume.
            </p>
          </motion.div>
          <div className="mt-12 grid w-full grid-cols-1 gap-6 px-8 md:grid-cols-3 lg:gap-8 lg:px-32">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div
          ref={processRef}
          className="mb-12 mt-32 flex w-full flex-col items-center space-y-4 pt-24 text-zinc-100 sm:space-y-6"
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="h-18 w-1/4 rounded-b-full bg-white"
          >
            <div className="flex justify-center text-xl font-bold tracking-tighter text-black sm:text-3xl lg:text-4xl">
              Process
            </div>
          </motion.div>
          {/* <div className="h-18 w-1/4 rounded-b-full bg-white">
            <div className="text-xl font-bold tracking-tighter text-black sm:text-3xl lg:text-4xl">
              Process
            </div>
          </div> */}
          <p className="z-10 mt-4 text-sm text-zinc-400">
            Learn how <span className="font-bold text-zinc-300">easy</span> it
            is to build your resume with{" "}
            <span className="font-bold">ResumeSMITH</span>
          </p>

          {/* Process Steps */}
          <div className="mt-12 grid w-full grid-cols-1 gap-6 px-8 md:grid-cols-3 lg:gap-8 lg:px-32">
            {processSteps.map((step, index) => (
              <>
                <motion.div
                  ref={procesRef}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isProcessView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1.5 }}
                >
                  <ProcessCard key={index} {...step} />
                </motion.div>
              </>
            ))}
          </div>
        </div>

        <div
          ref={howItWorkRef}
          className="mt-24 flex w-full flex-col items-center space-y-8 pt-24 text-zinc-100 sm:space-y-10"
        >
          {/* Heading Section */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-18 w-1/4 rounded-b-full bg-white max-md:w-[240px]"
          >
            <div className="max-md:text-md flex justify-center text-xl font-bold tracking-tighter text-black sm:text-3xl lg:text-4xl">
              How It Works
            </div>
          </motion.div>

          {/* Resume Image Section */}
          <div className="relative mx-auto flex max-w-7xl flex-wrap justify-center gap-20 px-4 lg:gap-28">
            {/* First Image */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="relative h-[360px] w-[280px]">
                <Image
                  src={blankPage}
                  alt="Blank Page"
                  className="z-20 h-full w-full rounded-lg object-contain"
                />
              </div>
              <span className="mt-4 text-center text-sm text-zinc-400">
                Step 1: Start with a Blank Page
              </span>
            </motion.div>

            {/* Second Image */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className="relative h-[360px] w-[280px]">
                <Image
                  src={landinpage1}
                  alt="Landing Page"
                  className="z-20 h-full w-full rounded-lg object-contain"
                />
              </div>
              <span className="mt-4 text-center text-sm text-zinc-400">
                Step 2: Build Your Resume
              </span>
            </motion.div>

            {/* Third Image */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="relative h-[360px] w-[280px]">
                <Image
                  src={landingPage2}
                  alt="Final Resume"
                  className="z-20 h-full w-full rounded-lg object-contain"
                />
              </div>
              <span className="mt-4 text-center text-sm text-zinc-400">
                Step 3: Customize with Colors
              </span>
            </motion.div>
          </div>
        </div>

        <div className="mt-36 flex h-[250px] w-3/4 items-center justify-center rounded-t-full bg-gradient-to-b from-zinc-500/30 to-zinc-900/60 text-center flex-col">
  <div className="space-y-4 mb-4">
    <h1 className="scroll-m-20 text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl">
      Still not satisfied? Why not give it a try and see the
      <span className="block bg-gradient-to-r from-red-200 to-blue-300 bg-clip-text text-transparent lg:inline-block">
        difference for yourself?
      </span>
    </h1>
  </div>
  <div className="relative">
    {/* Subtle Blur Light */}
    <div className="absolute inset-0 -z-10 h-24 w-64 rounded-full bg-white blur-3xl opacity-20"></div>
    {/* Button */}
    <Button
      asChild
      size="lg"
      variant="outline"
      className="bg-transparent border-zinc-500 border-2 rounded-full font-light tracking-tighter w-64 flex justify-center shadow-md shadow-zinc-500 transition-transform duration-300 ease-out hover:scale-125 hover:font-bold hover:shadow-lg "
    >
      <Link href="/resumes">Get started</Link>
    </Button>
  </div>
</div>




        {/* Contact Section */}
        <div
          ref={contactRef}
          className="mt-24 flex w-full flex-col items-center space-y-4 pt-24 text-zinc-100 sm:space-y-6"
        >
          <div className="text-2xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">
            Contact Us
          </div>
          <p className="z-10 mt-4 text-sm text-zinc-400">
            Got questions? Reach out and let's create impactful resumes
            together.
          </p>
          <div className="mt-8 text-zinc-400">
            <p>Email: resumesmithweb@gmail.com </p>
          </div>
        </div>
      </main>
    </>
  );
}

// Feature Card Component
const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: LucideIcon;
  title: string;
  description: string;
}) => (
  <div className="group relative flex flex-col items-center rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 text-center transition-all hover:scale-105 hover:border-white/20 hover:bg-white/5 hover:shadow-md hover:shadow-zinc-700">
    <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    <div className="relative z-10">
      {Icon && <Icon className="mx-auto mb-3 h-8 w-8 text-white/70" />}
      <h3 className="mb-2 font-semibold tracking-tight text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-white/50">{description}</p>
    </div>
  </div>
);

// Process Card Component
const ProcessCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: LucideIcon;
  title: string;
  description: string;
}) => (
  <div className="group relative flex flex-col items-center rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 text-center transition-all hover:scale-105 hover:border-white/20 hover:bg-white/5 hover:shadow-md hover:shadow-zinc-700">
    <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    <div className="relative z-10">
      {Icon && <Icon className="mx-auto mb-3 h-8 w-8 text-white/70" />}
      <h3 className="mb-2 font-semibold tracking-tight text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-white/50">{description}</p>
    </div>
  </div>
);

const features = [
  {
    title: "AI-Powered Resume Builder",
    description:
      "A web application that helps users create professional resumes using AI-assisted features and modern web technologies.",
    icon: Brain,
  },
  {
    title: "Drag and Drop Resume Sections",
    description:
      "Utilizes @dnd-kit libraries to allow users to easily reorder and customize resume sections through an intuitive drag-and-drop interface.",
    icon: Move,
  },
  {
    title: "AI-Powered Form Suggestions",
    description:
      "Leverages OpenAI to provide intelligent suggestions for job titles, countries, and resume summaries, helping users craft more compelling content.",
    icon: Brain,
  },
  {
    title: "PDF Resume Generation",
    description:
      "Integrates @react-pdf/renderer to allow users to generate professional PDF resumes directly from the web application.",
    icon: NotepadTextDashed,
  },
  {
    title: "Authentication and User Management",
    description:
      "Uses Clerk (@clerk/nextjs) for secure user authentication, allowing users to create, save, and manage their resume profiles.",
    icon: Lock,
  },
  {
    title: "Dynamic Form Creation",
    description:
      "Implements comprehensive forms for projects, achievements, education, and other resume sections with validation using react-hook-form and zod.",
    icon: List,
  },
  {
    title: "Theme and Styling",
    description:
      "Utilizes Tailwind CSS, next-themes, and radix-ui components to provide a modern, responsive, and customizable user interface with dark/light mode support.",
    icon: Palette,
  },
  {
    title: "Resume Printing and Export",
    description:
      "Incorporates react-to-print functionality, enabling users to directly print or export their resume from the web application.",
    icon: Printer,
  },
  {
    title: "Cloud Storage and Blob Management",
    description:
      "Integrates @vercel/blob for efficient file and image storage, allowing users to upload and manage profile pictures and other resume-related assets.",
    icon: Cloud,
  },
];

const processSteps = [
  {
    icon: UserRoundPen,
    title: "Sign Up",
    description:
      "Create a free account using Github or Google or username to get started with ResumeSMITH.",
  },
  {
    icon: Pencil,
    title: "Craft",
    description:
      "Enter your details, and let the AI craft a tailored, professional resume for you in seconds!",
  },
  {
    icon: Save,
    title: "Save",
    description:
      "Save, download, and share your professional A4-format resume with job applications!",
  },
];
