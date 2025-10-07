"use client";

import type React from "react";
import { type RefObject, useRef, forwardRef, useState } from "react";
import { motion, easeInOut } from "framer-motion";
import Image from "next/image";
import image from "@/assets/jakes-resume-1.png";
import ClerkLogo from "@/assets/ClerkLogo.svg";
import ClerkAuthSignInInterface from "@/assets/ClerkAuthSignIn.png";
import Link from "next/link";
import {
  Box,
  Codesandbox,
  File,
  Gavel,
  Pencil,
  SaveAll,
  User,
  WandSparklesIcon,
} from "lucide-react";
import editor from "@/assets/editor.png";
import { Input } from "@/components/ui/input";
import blankPage from "@/assets/blankpage-1.png";
import landinpage1 from "@/assets/landing page -1-1.png";
import landingPage2 from "@/assets/landing page2-1.png";
import { Button } from "@/components/ui/button";

const Page = () => {
  const featureRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const howItWorksRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // Function to handle smooth scrolling
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center space-y-32 overflow-x-hidden bg-black text-neutral-100">
      <div className="z-50">
        <HomeNavbar
          scrollToSection={scrollToSection}
          refs={{ featureRef, processRef, howItWorksRef, contactRef }}
        />
      </div>

      <div className="flex justify-start">
        <HeroSection />
      </div>
      <div className="flex justify-start">
        <ProductFor />
      </div>
      <div className="w-full">
        <FeatureSection ref={featureRef} />
        <ProcessSection ref={processRef} />
        {/* Add placeholder sections for howItWorks and contact */}
        <HowItWorksSection ref={howItWorksRef} />

        <section
          aria-labelledby="contact-title"
          className="w-full"
          ref={contactRef}
        >
          <div className="mx-auto w-full max-w-5xl px-6 py-16 tracking-tight md:py-24">
            <div className="rounded-lg border border-neutral-800 bg-neutral-900 text-neutral-200 shadow-sm">
              <div className="border-b border-neutral-800 px-6 py-4 md:px-8 md:py-6">
                <span className="inline-block rounded-md bg-neutral-800 px-2 py-1 text-xs font-medium text-neutral-200">
                  Contact
                </span>
                <h2
                  id="contact-title"
                  className="mt-3 text-balance text-3xl font-semibold leading-tight md:text-4xl"
                >
                  We&apos;d love to hear from you
                </h2>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-neutral-400 md:text-base">
                  Questions, feedback, or ideas—reach out and we&apos;ll get
                  back as soon as possible.
                </p>
              </div>

              <div className="px-6 py-6 md:px-8 md:py-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium md:text-xl">
                      Email support
                    </h3>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-neutral-400 md:text-base">
                      Prefer email? Send us a message and we&apos;ll help you
                      craft impactful resumes together.
                    </p>
                    <p className="mt-2 text-pretty text-sm md:text-base">
                      <Link
                        href="mailto:resumesmithweb@gmail.com"
                        className="font-medium text-neutral-100 underline-offset-4 hover:text-neutral-200 hover:underline"
                      >
                        resumesmithweb@gmail.com
                      </Link>
                    </p>
                  </div>
                  <div className="pt-1">
                    <a
                      href="mailto:resumesmithweb@gmail.com"
                      className="inline-flex w-full items-center justify-center rounded-md border border-neutral-700 bg-neutral-900 px-4 py-1 text-sm font-semibold text-neutral-100 transition hover:bg-neutral-800 md:w-auto md:px-5 md:text-base"
                    >
                      Reach out via email
                    </a>
                    <p className="mt-3 text-xs leading-relaxed text-neutral-400 md:text-sm">
                      Typical response time: under 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-6 text-center text-xs text-neutral-400 md:text-sm">
              Or email us directly at{" "}
              <Link
                href="mailto:resumesmithweb@gmail.com"
                className="font-medium text-neutral-100 underline-offset-4 hover:text-neutral-200 hover:underline"
              >
                resumesmithweb@gmail.com
              </Link>
            </p>
          </div>
        </section>

        <section className="w-full"></section>
      </div>
    </div>
  );
};

interface HomeNavbarProps {
  scrollToSection: (ref: RefObject<HTMLElement>) => void;
  refs: {
    featureRef: RefObject<HTMLElement>;
    processRef: RefObject<HTMLElement>;
    howItWorksRef: RefObject<HTMLElement>;
    contactRef: RefObject<HTMLElement>;
  };
}

const HomeNavbar: React.FC<HomeNavbarProps> = ({ scrollToSection, refs }) => {
  return (
    <nav className="fixed left-0 top-0 w-full bg-black shadow-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 bg-black p-3">
        <Link href="/" className="flex items-center gap-2">
          <Gavel />
          <span className="text-[17px] font-extrabold tracking-tight text-zinc-200 max-md:text-sm">
            ResumeSMITH
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="rounded-lg p-2 px-2.5 text-[13px] text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 max-md:text-xs"
            onClick={() => scrollToSection(refs.featureRef)}
          >
            Features
          </Button>
          <Button
            variant="ghost"
            className="rounded-lg p-2 px-2.5 text-[13px] text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 max-md:text-xs"
            onClick={() => scrollToSection(refs.processRef)}
          >
            Process
          </Button>
          <Button
            variant="ghost"
            className="rounded-lg p-2 px-2.5 text-[13px] text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 max-md:text-xs"
            onClick={() => scrollToSection(refs.howItWorksRef)}
          >
            How It Works
          </Button>
          <Button
            variant="ghost"
            className="rounded-lg p-2 px-2.5 text-[13px] text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 max-md:text-xs"
            onClick={() => scrollToSection(refs.contactRef)}
          >
            Contact
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/sign-in">
            <Button
              variant="default"
              className="h-8 rounded-lg border border-neutral-700 bg-neutral-200 text-[13px] font-[550] text-neutral-800 hover:bg-neutral-50 max-md:text-xs"
            >
              Log in
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  const text = "Create Your Professional Resume within Minutes ";

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.8,
        duration: 0.2, // Slower duration for smoother effect
        ease: easeInOut,
        filter: {
          duration: 0.2, // Blur transition happens first
        },
        opacity: {
          duration: 0.2,
          delay: 0.3, // Slight delay to ensure blur starts first
        },
        y: {
          duration: 0.2,
        },
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 5,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5, // Slower word animation
        ease: easeInOut,
      },
    },
  };

  const words = text.split(" ");

  return (
    <div className="flex max-w-5xl flex-col items-center p-3">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`space-y-6`}
      >
        <div className="pr-0 md:pr-52">
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              className="mr-2 inline-block text-5xl font-bold tracking-tight text-neutral-100"
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            transition: { delay: 1.5, duration: 1.2 },
          }}
          className="space-y-6"
        >
          <motion.p className="sm:text-md text-sm text-neutral-400">
            Our <span className="font-bold">AI resume builder</span> helps you
            design a professional resume
          </motion.p>
          <Link href="/resumes">
            <div className="pt-2">
              <Button className="rounded-lg border border-neutral-700 bg-neutral-200 py-5 text-base text-neutral-800 hover:bg-neutral-50">
                Start building
              </Button>
            </div>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative z-10 mt-24 overflow-hidden rounded-lg"
        initial={{ opacity: 0, filter: "blur(4px)", z: -10, y: 100 }}
        animate={{
          opacity: 1,
          z: 10,
          y: 0,
          filter: "blur(0px)",
          transition: { delay: 2.5, duration: 1.5 },
        }}
      >
        <div className="absolute inset-0 rounded-sm bg-gradient-to-r from-red-300 via-gray-800 to-blue-300 blur-2xl"></div>
        <Image
          src={image || "/placeholder.svg"}
          alt="Resume preview"
          width={600}
          height={420}
          className="relative rounded-lg shadow-[0_0_30px_10px_rgba(192,192,192,0.5)]"
        />
      </motion.div>
    </div>
  );
};

const ProductFor = () => {
  return (
    <div className="flex max-w-5xl flex-col items-center p-3">
      <div className="grid grid-cols-1 pr-0 md:grid-cols-[60%_40%] md:pr-32">
        <h2 className="text-5xl font-bold tracking-tighter text-neutral-200">
          Made for Software Developers
        </h2>
        <p className="line-spacing-2 text-[16px] font-[450] text-neutral-400">
          ResumeSMITH is built on the principles that separate exceptional
          resumes from ordinary ones: relentless focus on AI-powered precision,
          lightning-fast execution with real-time editing, and an unwavering
          commitment to professional craft. Transform your career story into a
          compelling resume that stands out—because your next opportunity
          deserves nothing less than excellence.
        </p>
      </div>
    </div>
  );
};

const FeatureSection = forwardRef<HTMLElement>((props, ref) => {
  const smallFeatureItems = [
    {
      title: "ATS Friendly",
      logo: User,
    },
    {
      title: "Real-time Editing",
      logo: Gavel,
    },
    {
      title: "AI-Powered Suggestions",
      logo: Codesandbox,
    },
    {
      title: "Free Download Options",
      logo: File,
    },
  ];

  return (
    <section
      ref={ref}
      className="flex min-h-screen w-full flex-col items-center justify-start overflow-x-hidden bg-gradient-to-b from-neutral-800/40 via-neutral-950/90 to-black p-3"
    >
      <div className="w-full max-w-5xl space-y-6 px-2 pt-20">
        <div className="flex items-center space-x-2">
          <Box className="h-4 w-4 text-green-400" />
          <span className="text-md font-[450] tracking-tight text-neutral-100">
            Features
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[60%_40%]">
          <div className="flex max-w-md flex-col space-y-6">
            <h2 className="text-5xl font-bold tracking-tighter text-neutral-200">
              Manage Resumes end-to-end
            </h2>

            <span className="line-spacing-2 text-[16px] font-[450] text-neutral-400">
              <span className="font-semibold text-neutral-200">
                From creation to customization,{" "}
              </span>
              our platform offers a seamless experience for building, editing,
              and managing your resumes with ease.
            </span>

            <div className="grid grid-cols-2 gap-2">
              {smallFeatureItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <item.logo className="h-4 w-4 text-neutral-200" />
                  <span className="text-sm text-neutral-200">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src={editor || "/placeholder.svg"}
              alt="Resume Editor Interface"
              width={800}
              className="h-auto max-w-full rounded-lg shadow-2xl"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
});

FeatureSection.displayName = "FeatureSection";

type HoveredCard = "personal" | "work" | null;

const ProcessSection = forwardRef<HTMLElement>((props, ref) => {
  const viewItems = [
    {
      title: "Sign up",
    },
    { title: "Craft" },
    { title: "Save" },
  ];

  const [selectedView, setSelectedView] = useState<number>(0);

  const [hoveredCard, setHoveredCard] = useState<HoveredCard>(null);

  const handleCardHover = (cardId: HoveredCard, isEntering: boolean): void => {
    if (isEntering) {
      setHoveredCard(cardId);
    } else {
      setHoveredCard(null);
    }
  };

  return (
    <section
      ref={ref}
      className="flex min-h-screen w-full flex-col items-center justify-start overflow-x-hidden bg-neutral-950 p-3"
    >
      <div className="w-full max-w-5xl space-y-6 px-2 pt-20">
        <div className="flex items-center space-x-2">
          <Box className="h-4 w-4 text-amber-400" />
          <span className="text-md font-[450] tracking-tight text-neutral-100">
            Process
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[50%_50%]">
          <div className="flex max-w-lg flex-col space-y-6">
            <h2 className="text-4xl font-bold tracking-tighter text-neutral-200">
              Learn how easy it is to build your resume with ResumeSMITH
            </h2>

            <motion.div
              className="flex flex-col space-y-1 transition-colors"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {viewItems.map((item, idx) => (
                <motion.button
                  className={`group flex items-center gap-2 ${selectedView != idx && ""}`}
                  key={idx}
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{
                    staggerChildren: 0.5 * idx,
                    duration: 0.6 * idx,
                  }}
                  onClick={() => setSelectedView(idx)}
                >
                  <span
                    className={`h-full w-1 rounded-lg transition-colors ${
                      selectedView === idx
                        ? "bg-green-400"
                        : "bg-neutral-800 group-hover:bg-neutral-600/90"
                    }`}
                  />
                  <h1
                    className={`text-xl font-[550] ${selectedView == idx ? "text-neutral-100" : "text-neutral-600 transition-all group-hover:text-neutral-500"}`}
                  >
                    {item.title}
                  </h1>
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* <Image src={editor || "/placeholder.svg"} alt={""} width={"800"} unoptimized /> */}
          {selectedView == 0 ? (
            <motion.div
              initial={{ opacity: 0, x: -50, filter: "blur(15px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{
                duration: 2.0,
                delay: 0.4,
                ease: easeInOut,
                type: "spring",
              }}
              className="max-w-lg rounded-xl border border-neutral-900 p-2"
            >
              <div className="relative h-full w-full rounded-xl border border-neutral-800 bg-neutral-700/10 py-6">
                <div className="flex flex-col space-y-2 px-16">
                  <Image
                    src={ClerkLogo || "/placeholder.svg"}
                    alt="Clerk Logo"
                    className="h-8 w-8 rounded-md bg-neutral-900 p-1"
                  />
                  <h3 className="text-lg font-[550] tracking-tight">
                    Clerk Authentication{" "}
                  </h3>
                  <p className="text-sm text-neutral-400">
                    Uses Clerk (@clerk/nextjs) for secure user authentication,
                    allowing users to create, save, and manage their resume
                    profiles.
                  </p>
                  <motion.div
                    className="mx-auto pt-4"
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.09 }}
                  >
                    <Image
                      src={ClerkAuthSignInInterface || "/placeholder.svg"}
                      alt="Clerk Auth Interface"
                      className="h-auto w-full rounded-xl object-contain"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ) : selectedView == 1 ? (
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delayChildren: 0.2 }}
              className="max-w-lg rounded-xl border border-neutral-900 p-2"
            >
              <div className="relative h-full w-full rounded-xl border border-neutral-800 bg-neutral-700/10 py-6">
                <div className="flex flex-col space-y-2 px-16">
                  <Pencil className="h-8 w-8 rounded-md bg-neutral-800 p-1" />
                  <h3 className="text-lg font-[550] tracking-tight">
                    Build Resume with ease!
                  </h3>
                  <p className="text-sm text-neutral-400">
                    Enter your details, and let the AI craft a tailored,
                    professional resume for you in seconds!
                  </p>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex w-full flex-col justify-center px-8 pt-10"
                  style={{
                    transform:
                      "translateY(-20px) rotateX(12deg) rotateY(-10deg)",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, filter: "blur(3px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <motion.div
                      initial={{ y: 0 }}
                      className="z-50 h-52 max-w-full rounded-xl border-2 border-neutral-950 bg-gradient-to-r from-neutral-800 via-neutral-900 to-neutral-900 shadow-2xl"
                      whileHover={{ y: -20 }}
                      transition={{ ease: "easeInOut" }}
                    >
                      <div className="flex flex-col space-y-1 p-4 font-[550]">
                        <h1 className="text-lg tracking-tight">Projects</h1>
                        <p className="text-[7px] text-neutral-500">
                          Add as many work experiences as you like.
                        </p>
                        <div className="flex justify-center">
                          <Button
                            variant="outline"
                            type="button"
                            className="h-5 w-fit border-neutral-600 bg-transparent text-neutral-200 hover:bg-neutral-900 hover:text-neutral-100"
                          >
                            <WandSparklesIcon className="size-1" />
                            <p className="text-[8px]">Smart fill (AI)</p>
                          </Button>
                        </div>

                        <div className="space-y-0.5 pr-2">
                          <p className="text-[7px]">Link</p>
                          <Input className="h-5 w-full rounded-sm border-neutral-600" />
                        </div>
                        <div className="space-y-0.5 pr-2">
                          <p className="text-[7px]">Description</p>
                          <Input className="h-16 w-full rounded-sm border-neutral-600" />
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, filter: "blur(3px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <motion.div
                      initial={{ y: 0 }}
                      className="z-50 -mt-32 ml-10 h-52 max-w-full rounded-xl border-2 border-neutral-950 bg-gradient-to-r from-neutral-800 via-neutral-900 to-neutral-900 shadow-2xl"
                      whileHover={{ y: -20 }}
                      transition={{ ease: "easeInOut" }}
                    >
                      <div className="flex flex-col space-y-1 p-4 font-[550]">
                        <h1 className="text-lg tracking-tight">
                          Work Experience
                        </h1>
                        <p className="text-[7px] text-neutral-500">
                          Add as many work experiences as you like.
                        </p>
                        <div className="flex justify-center">
                          <Button
                            variant="outline"
                            type="button"
                            className="h-5 w-fit border-neutral-600 bg-transparent text-neutral-200 hover:bg-neutral-900 hover:text-neutral-100"
                          >
                            <WandSparklesIcon className="size-1" />
                            <p className="text-[8px]">Smart fill (AI)</p>
                          </Button>
                        </div>

                        <div className="space-y-0.5 pr-2">
                          <p className="text-[7px]">Job Title</p>
                          <Input className="h-5 w-full rounded-sm border-neutral-600" />
                        </div>

                        <div className="space-y-0.5 pr-2">
                          <p className="text-[7px]">Company</p>
                          <Input className="h-5 w-full rounded-sm border-neutral-600" />
                        </div>
                        <div className="h-4 w-full rounded-lg bg-neutral-800"></div>

                        <div className="grid grid-cols-2 items-center gap-3 space-y-0.5 pr-2.5">
                          <div className="h-4 w-full rounded-lg bg-neutral-800/10"></div>
                          <div className="h-4 w-full rounded-lg bg-neutral-800/10"></div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, filter: "blur(3px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                  >
                    <motion.div
                      initial={{ y: 0 }}
                      className="z-50 -mt-32 ml-16 h-52 max-w-full rounded-xl border-2 border-neutral-950 bg-gradient-to-r from-neutral-800 via-neutral-900 to-neutral-900 shadow-2xl"
                      whileHover={{ y: -20 }}
                      transition={{ ease: "easeInOut", duration: 0.5 }}
                    >
                      <div className="flex flex-col space-y-1 p-4 font-[550]">
                        <h1 className="text-lg tracking-tight">
                          Personal Information
                        </h1>
                        <div className="space-y-0.5 pr-2.5">
                          <p className="text-[7px]">Job Title</p>
                          <Input className="h-5 w-full rounded-sm border-neutral-600" />
                        </div>

                        <div className="space-y-0.5 pr-2">
                          <p className="text-[7px]">Company</p>
                          <Input className="h-5 w-full rounded-sm border-neutral-600" />
                        </div>

                        <div className="grid grid-cols-2 gap-3 space-y-0.5 pr-2.5">
                          <div className="">
                            <p className="text-[7px]">Start Date</p>
                            <Input className="h-5 w-full rounded-sm border-neutral-600" />
                          </div>
                          <div className="space-y-0.5">
                            <p className="text-[7px]">End Date</p>
                            <Input className="h-5 w-full rounded-sm border-neutral-600" />
                          </div>
                        </div>

                        <div className="space-y-0.5 pr-2.5">
                          <p className="text-[7px]">Description</p>
                          <Input className="h-5 w-full rounded-sm border-neutral-600" />
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <div className="max-w-lg rounded-xl border border-neutral-900 p-2">
              <div className="relative h-full w-full rounded-xl border border-neutral-800 bg-neutral-900/30 py-6">
                <div className="flex flex-col space-y-2 px-16">
                  <SaveAll className="h-8 w-8 rounded-md p-1 text-neutral-200" />
                  <h3 className="text-lg font-[550] tracking-tight">
                    Save Your Resume{" "}
                  </h3>
                  <p className="text-sm text-neutral-400">
                    Securely create, save, and manage your resume profile. Add
                    sections, preview, and return anytime—your progress is
                    autosaved.
                  </p>
                  <motion.div
                    className="mx-auto pt-4"
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={ClerkAuthSignInInterface || "/placeholder.svg"}
                      alt="Clerk Auth Interface"
                      className="h-auto w-full rounded-2xl object-contain"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
});

ProcessSection.displayName = "ProcessSection";

const HowItWorksSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className="flex min-h-screen w-full flex-col items-center overflow-x-hidden bg-gradient-to-b from-neutral-800/40 via-neutral-950/90 to-black p-3"
    >
      <div className="w-full max-w-5xl px-2 pt-20">
        <div className="flex flex-col items-center justify-center space-x-2 space-y-10">
          <div className="flex items-center justify-between gap-x-6 rounded-2xl border border-neutral-800 p-1 px-5">
            <span className="h-3 w-3 animate-pulse rounded-full bg-blue-400" />
            <div className="flex items-center gap-2">
              <Box className="h-4 w-4 text-blue-400" />
              <span className="text-md font-[450] tracking-tight text-neutral-100">
                How it works
              </span>
            </div>
          </div>

          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-bold tracking-tighter text-neutral-200">
              Build Smarter. Design Better. Impress Faster.
            </h2>
            <div className="line-spacing-2 text-[16px] font-[450] text-neutral-400">
              <span className="font-semibold text-neutral-200">
                ResumeSMITH{" "}
              </span>
              harnesses AI to auto-generate polished resumes, helps you
              customize layouts with drag-and-drop ease, and lets you export
              print-ready PDFs instantly. Achieve a standout professional
              profile without touching a single format setting.
            </div>
          </div>

          <div className="flex flex-col gap-3 md:flex-row">
            <div className="relative h-full w-full rounded-xl border border-neutral-800 bg-neutral-700/10 p-3 pt-7">
              {/* First Image */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="relative h-[360px] w-[280px]">
                  <Image
                    src={blankPage || "/placeholder.svg"}
                    alt="Blank Page"
                    className="z-20 h-full w-full rounded-lg object-contain"
                  />
                </div>
                <span className="mt-4 text-center text-sm font-[550] text-neutral-400">
                  Step 1: Start with a Blank Page
                </span>
              </motion.div>
            </div>

            <div className="relative h-full w-full rounded-xl border border-neutral-800 bg-neutral-700/10 p-4 pt-7">
              {/* Second Image */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col items-center"
              >
                <div className="relative h-[360px] w-[280px]">
                  <Image
                    src={landinpage1 || "/placeholder.svg"}
                    alt="Landing Page"
                    className="z-20 h-full w-full rounded-lg object-contain"
                  />
                </div>
                <span className="mt-4 text-center text-sm font-[550] text-neutral-400">
                  Step 2: Build Your Resume
                </span>
              </motion.div>
            </div>

            <div className="relative h-full w-full rounded-xl border border-neutral-800 bg-neutral-700/10 p-4 pt-7">
              {/* Third Image */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col items-center"
              >
                <div className="relative h-[360px] w-[280px]">
                  <Image
                    src={landingPage2 || "/placeholder.svg"}
                    alt="Final Resume"
                    className="z-20 h-full w-full rounded-lg object-contain"
                  />
                </div>
                <span className="mt-4 text-center text-sm font-[550] text-neutral-400">
                  Step 3: Customize with Colors
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

HowItWorksSection.displayName = "HowitWorksSection";

export default Page;
