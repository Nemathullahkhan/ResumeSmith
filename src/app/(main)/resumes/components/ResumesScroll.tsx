"use client";

import { ResumeServerData } from "@/lib/types";
import { useState } from "react";

interface ResumeItemProps {
  resume: ResumeServerData;
}


export default function ResumeItemClient({ resume }: ResumeItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="min-w-[300px] flex-shrink-0 p-4 bg-white rounded-lg shadow-md cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-xl font-semibold">{resume.title}</h2>
      <p>Updated: {new Date(resume.updatedAt).toLocaleString()}</p>
      {isHovered && <p className="text-sm text-gray-500">Click to edit</p>}
    </div>
  );
}