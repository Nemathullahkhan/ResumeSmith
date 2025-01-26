// // import logo from "@/assets/logo.png";

// // import image from "@/assets/jakes-resume-1.png";
// // import { Button } from "@/components/ui/button";
// // import Image from "next/image";
// // import Link from "next/link";
// // import HomeNavbar from "./(main)/HomeNavbar";
// // import { Pencil, Save, UserRoundPen } from "lucide-react";

// // export default function Home() {
// //   return (
// //     <>
// //       <HomeNavbar />
// //       <main className="relative flex min-h-screen flex-col items-center justify-center gap-6 bg-black-100 px-5 py-64 text-center text-zinc-100 lg:gap-12 overflow-hidden">

// //         <div className="pl-5 absolute top-0 left-0 w-full grid grid-cols-[repeat(auto-fill,_64px)] grid-rows-[repeat(auto-fill,_64px)] ">
// //   {Array.from({ length: 271 }).map((_, i) => (
// //     <div
// //       key={i}
// //       className={`w-[64px] h-[64px] bg-transparent ${
// //         i >= 105 // For the last 20 squares
// //           ? "border-l border-zinc-800/40" // Only Y-axis border
// //           : "border border-zinc-900/40" // Full border for other squares
// //       }`}
// //     ></div>
// //   ))}
// // </div>

// //         {/* Heading */}
// //         <div className="max-w-prose space-y-3 z-10">
// //           <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
// //             Create the{" "}
// //             <span className="inline-block bg-gradient-to-r from-red-200 to-blue-300 bg-clip-text text-transparent">
// //               Perfect Resume
// //             </span>{" "}
// //             in Minutes
// //           </h1>
// //           <p className="text-md text-zinc-600">
// //             Our <span className="font-bold">AI resume builder</span> helps you
// //             design a professional resume
// //           </p>
// //           <p className="text-2xl font-bold tracking-tighter text-zinc-600">
// //             Get Noticed. Get Hired. Get Ahead.
// //           </p>
// //         </div>

// //         {/* Image with Silver Shine Glow */}
// //         <div className="relative z-10 mt-4">
// //           <div className="absolute inset-0 rounded-sm bg-gradient-to-r from-red-300 via-gray-800 to-blue-300 blur-2xl"></div>
// //           <Image
// //             src={image}
// //             alt="Resume preview"
// //             width={400}
// //             className="relative rounded-lg shadow-[0_0_30px_10px_rgba(192,192,192,0.5)]"
// //           />
// //         </div>

// //         {/* Button */}
// //         <Button
// //           asChild
// //           size="lg"
// //           variant="outline"
// //           className="hover:border-red-200 hover:font-bold tracking-tighter hover:shadow-red-700 border-blue-200 text-blue-100 hover:text-sm hover:text-white z-10 shadow-xl shadow-blue-800"
// //         >
// //           <Link href="/resumes">Get started</Link>
// //         </Button>

// //         <div className="flex flex-col text-zinc-100 w-2/4">
// //           <span className="w-1/4 h-1 mx-auto m-16 shadow-red-800 z-10 shadow-2xl bg-transparent ">
// //           <span className="z-0 bg-slate-50 w-full h-1 bg-white"></span>
// //           </span>
// //           <span className=" text-[32px]  tracking-tighter font-extrabold shadow-red-800 z-10 shadow-2xl bg-transparent shadow-red-80  p-2 rounded-2xl">THE PROCESS</span>
// //           <div className="flex flex-col mt-16 z-50">
// //           <span className="text-xl md:text-2xl font-bold  tracking-tight">Three steps to build your </span>
// //           <span className="font-extralight tracking-tighter text-xl md:text-[28px]">Professional Resume</span>
// //           </div>
// //         </div>
// //         <div className="flex justify-center  w-full">
// //             <div className="flex px-20 gap-12 grid-flow-row grid-col-3 md:grid-cols-1 ">
// //                 <div className="flex flex-col w-[30%] border-2 border-white p-3">
// //                 <UserRoundPen />
// //                 <span className="flex justify-start text-md tracking-tighter">SignUp</span>
// //                 <p className="flex justify-start text-xs text-zinc-600">
// //             Create a free account to get started with  <span className="px-1 font-bold">ResumeSMITH</span>
// //           </p>
// //                 </div>
// //                 <div className="flex flex-col w-[30%] border-2 border-white px-5">
// //                 <Pencil />
// //                 <span className="flex justify-start text-md tracking-tighter px-3">Craft</span>
// //                 <p className="flex justify-start text-xs text-zinc-600">
// //                 Enter your details, and let the AI craft a tailored, professional resume for you in seconds!
// //           </p>
// //                 </div>
// //                 <div className="flex flex-col w-[30%] border-2 border-white p-3">
// //                 <Save />
// //                 <span className="flex justify-start text-md tracking-tighter">Save</span>
// //                 <p className="flex justify-start text-xs text-zinc-600">
// //                 Save, download, and share your professional A4-format resume with job applications!
// //           </p>
// //                 </div>

// //             </div>
// //           </div>
// //       </main>
// //     </>
// //   );
// // }

// "use client"; // Required to make this a Client Component

// import logo from "@/assets/logo.png";
// import image from "@/assets/jakes-resume-1.png";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link";
// import HomeNavbar from "./(main)/HomeNavbar";
// import { Blocks, BlocksIcon, Compass, Layout, Pencil, Save, Shield, UserRoundPen, Wand, Zap } from "lucide-react";
// import { useUser } from "@clerk/nextjs";
// import { redirect } from "next/navigation";

// export default function Home() {
//   const { isSignedIn } = useUser();

//   return (
//     <>
//       {isSignedIn && redirect("/resumes")}
//       <HomeNavbar />
//       <main className="bg-black-100 relative flex min-h-screen flex-col items-center justify-center gap-8 overflow-hidden px-2 py-32 text-center text-zinc-100 sm:gap-12 md:px-8 lg:py-48">
//         <div className="absolute left-0 top-0 grid w-full grid-cols-[repeat(auto-fill,_64px)] grid-rows-[repeat(auto-fill,_64px)]">
//           {Array.from({ length: 274 }).map((_, i) => (
//             <div
//               key={i}
//               className={`h-[64px] w-[64px] bg-transparent ${
//                 i >= 105 // For the last 20 squares
//                   ? "border border-zinc-900/20" // Only Y-axis border
//                   : "border border-zinc-900/40" // Full border for other squares
//               }`}
//             ></div>
//           ))}
//         </div>

//         {/* Heading Section */}
//         <div className="z-10 max-w-prose space-y-4">
//           <h1 className="scroll-m-20 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
//             Create the{" "}
//             <span className="inline-block bg-gradient-to-r from-red-200 to-blue-300 bg-clip-text text-transparent">
//               Perfect Resume
//             </span>{" "}
//             in Minutes
//           </h1>
//           <p className="sm:text-md text-sm text-zinc-400">
//             Our <span className="font-bold">AI resume builder</span> helps you
//             design a professional resume
//           </p>
//           <p className="text-lg font-bold text-zinc-400 sm:text-xl">
//             Get Noticed. Get Hired. Get Ahead.
//           </p>
//         </div>
//         {/* Get Started Button */}
//         <Button
//           asChild
//           size="lg"
//           variant="outline"
//           className="z-10 -mt-4 border-zinc-200 text-blue-100 shadow-xl hover:border-blue-200 hover:font-bold hover:text-blue-200 hover:shadow-blue-700"
//         >
//           <Link href="/resumes">Get started</Link>
//         </Button>

//         {/* Image with Silver Shine Glow */}
//         <div className="relative z-10 mt-6">
//           <div className="absolute inset-0 rounded-sm bg-gradient-to-r from-red-300 via-gray-800 to-blue-300 blur-2xl"></div>
//           <Image
//             src={image}
//             alt="Resume preview"
//             width={400}
//             height={500}
//             className="relative rounded-lg shadow-[0_0_30px_10px_rgba(192,192,192,0.5)]"
//           />
//         </div>

//         {/* Features section  */}
//         {/* Features Section */}
//         <div className="mt-24 flex w-full flex-col items-center space-y-4 text-zinc-100 sm:space-y-6">
//           <div className="text-2xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">
//             Features
//           </div>
//           <p className="z-10 mt-4 text-sm text-zinc-400">
//             Discover how ResumeSMITH transforms your resume creation
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="mt-12 grid grid-cols-1 gap-6 px-8 md:grid-cols-3 lg:gap-4 lg:px-32">
//           {/* AI-Powered Content Generation */}
//           <div className="mx-auto flex w-3/4 flex-col items-center rounded-lg border border-red-400 p-4 text-center text-sm hover:border-2 hover:border-red-500 hover:bg-zinc-900 hover:shadow-2xl hover:shadow-red-800">
//             <Wand className="mb-2" />
//             <span className="font-semibold">AI-Powered Generation</span>
//             <p className="mt-1 text-xs text-zinc-400">
//               Intelligent AI transforms basic inputs into professional,
//               compelling resume content.
//             </p>
//           </div>

//           {/* Real-Time Resume Preview */}
//           <div className="mx-auto flex w-3/4 flex-col items-center rounded-lg border border-zinc-500 p-4 text-center text-sm hover:border-white hover:bg-zinc-900 hover:shadow-2xl hover:shadow-zinc-600">
//             <Layout className="mb-2" />
//             <span className="font-semibold">Live Resume Preview</span>
//             <p className="mt-1 text-xs text-zinc-400">
//               Instantly see your resume transform as you build it, across all
//               devices.
//             </p>
//           </div>

//           {/* Comprehensive Resume Builder */}
//           <div className="mx-auto flex w-3/4 flex-col items-center rounded-lg border border-blue-200 p-4 text-center text-sm hover:border-2 hover:border-blue-500 hover:bg-zinc-900 hover:shadow-2xl hover:shadow-blue-800">
//             <BlocksIcon className="mb-2" />
//             <span className="font-semibold">Comprehensive Builder</span>
//             <p className="mt-1 text-xs text-zinc-400">
//               Create detailed resumes with multi-step forms covering all
//               professional details.
//             </p>
//           </div>

//           {/* Secure Authentication */}
//           <div className="mx-auto flex w-3/4 flex-col items-center rounded-lg border border-green-400 p-4 text-center text-sm hover:border-2 hover:border-green-500 hover:bg-zinc-900 hover:shadow-2xl hover:shadow-green-800">
//             <Shield className="mb-2" />
//             <span className="font-semibold">Secure Authentication</span>
//             <p className="mt-1 text-xs text-zinc-400">
//               Protect your professional information with robust, multi-method
//               authentication.
//             </p>
//           </div>

//           {/* Auto-Save Protection */}
//           <div className="mx-auto flex w-3/4 flex-col items-center rounded-lg border border-zinc-500 p-4 text-center text-sm hover:border-white hover:bg-zinc-900 hover:shadow-2xl hover:shadow-zinc-600">
//             <Zap className="mb-2" />
//             <span className="font-semibold">Auto-Save Protection</span>
//             <p className="mt-1 text-xs text-zinc-400">
//               Never lose your progress with automatic saving and intelligent
//               warning systems.
//             </p>
//           </div>

//           {/* Multiple Resume Management */}
//           <div className="mx-auto flex w-3/4 flex-col items-center rounded-lg border border-blue-200 p-4 text-center text-sm hover:border-2 hover:border-blue-500 hover:bg-zinc-900 hover:shadow-2xl hover:shadow-blue-800">
//             <Compass className="mb-2" />
//             <span className="font-semibold">Multiple Resume Management</span>
//             <p className="mt-1 text-xs text-zinc-400">
//               Create, edit, and manage multiple resume versions with ease.
//             </p>
//           </div>
//         </div>

//         {/* Process Section */}

//         <div className="mt-24 flex w-full flex-col items-center space-y-4 text-zinc-100 sm:space-y-6">
//           <div className="text-2xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">
//             Process
//           </div>
//           <p className="z-10 mt-4 text-sm text-zinc-400">
//             Learn how easy it is to build your resume.
//           </p>
//         </div>

//         {/* Steps Section */}
//         <div className="mt-12 grid grid-cols-1 gap-6 px-8 md:grid-cols-3 lg:gap-4 lg:px-32">
//           {/* Step 1: Sign Up */}
//           <div className="mx-auto flex w-3/4 flex-col items-center rounded-lg border border-red-400 p-4 text-center text-sm hover:border-2 hover:border-red-500 hover:bg-zinc-900 hover:shadow-2xl hover:shadow-red-800">
//             <UserRoundPen className="mb-2" />
//             <span className="font-semibold">Sign Up</span>
//             <p className="mt-1 text-xs text-zinc-400">
//               Create a free account to get started with{" "}
//               <span className="font-bold">ResumeSMITH</span>.
//             </p>
//           </div>

//           {/* Step 2: Craft */}
//           <div className="mx-auto flex w-3/4 flex-col items-center rounded-lg border border-zinc-500 p-4 text-center text-sm hover:border-white hover:bg-zinc-900 hover:shadow-2xl hover:shadow-zinc-600">
//             <Pencil className="mb-2" />
//             <span className="font-semibold">Craft</span>
//             <p className="mt-1 text-xs text-zinc-400">
//               Enter your details, and let the AI craft a tailored, professional
//               resume for you in seconds!
//             </p>
//           </div>

//           {/* Step 3: Save */}
//           <div className="mx-auto flex w-3/4 flex-col items-center rounded-lg border border-blue-200 p-4 text-center text-sm hover:border-2 hover:border-blue-500 hover:bg-zinc-900 hover:shadow-2xl hover:shadow-blue-800">
//             <Save className="mb-2" />
//             <span className="font-semibold">Save</span>
//             <p className="mt-1 text-xs text-zinc-400">
//               Save, download, and share your professional A4-format resume with
//               job applications!
//             </p>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }

//  ?????????????????????????????????????????????????????????????????????????????????????
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
  Wand,
  Zap,
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
// Navbar Component
const HomeNavbar = ({ scrollToSection }) => {
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

  const scrollToSection = (section) => {
    const refs = {
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
const FeatureCard = ({ icon: Icon, title, description }) => (
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
const ProcessCard = ({ icon: Icon, title, description }) => (
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
