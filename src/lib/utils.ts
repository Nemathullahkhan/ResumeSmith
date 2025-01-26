import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ResumeServerData } from "./types";
import { ResumeValues } from "./validation";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function fileReplacer(key: unknown, value: unknown) {
  return value instanceof File
    ? {
        name: value.name,
        size: value.size,
        type: value.type,
        lastModified: value.lastModified,
      }
    : value;
}

export function mapToResumeValues(data: ResumeServerData): ResumeValues {
  return {
    id: data.id,
    title: data.title || undefined,
    description: data.description || undefined,
    photo: data.photoUrl ? new File([data.photoUrl], 'photo') : undefined,
    firstName: data.firstName || undefined,
    lastName: data.lastName || undefined,
    city: data.city || undefined,
    country: data.country || undefined,
    phone: data.phone || undefined,
    email: data.email || undefined,
    githubProfile: data.githubProfile || undefined,
    linkedinProfile: data.linkedinProfile || undefined,
    
    workExperiences: data.workExperiences.map((exp) => ({
      position: exp.position || undefined,
      company: exp.company || undefined,
      companyLocation: exp.companyLocation || undefined,
      startDate: exp.startDate?.toISOString().split("T")[0],
      endDate: exp.endDate?.toISOString().split("T")[0],
      description: exp.description || undefined,
    })),
    projects: data.projects.map((project) => ({
      projectName: project.projectName || undefined,
      link: project.link || undefined,
      techStack: project.techStack || undefined,
      description: project.description || undefined,
    })),
    educations: data.educations.map((edu) => ({
      degree: edu.degree || undefined,
      school: edu.school || undefined,
      cgpa: edu.cgpa || undefined,
      startDate: edu.startDate?.toISOString().split("T")[0],
      endDate: edu.endDate?.toISOString().split("T")[0],
    })),
    skillSet: data.skillSet.map((skill)=>({
      languages: skill.languages || undefined,
      frameworks: skill.frameworks || undefined,
      tools: skill.tools || undefined,
      libraries: skill.libraries || undefined,
    })),
    courses: data.courses.map((val)=>({
      course:val.course || undefined,
      learningPlatform: val.learningPlatform || undefined,
      courseLink:val.courseLink || undefined,
      description:val.description || undefined,
    })),
    codingProfiles: data.codingProfiles.map((val)=>({
      codingProfile: val.codingProfile || undefined,
      codingProfileLink: val.codingProfileLink || undefined,
      description:val.description || undefined,
    })),
    custom: data.custom.map((val)=>({
      heading: val.heading || undefined,
      description: val.description || undefined,
      link: val.link || undefined,
    })),
    borderStyle: data.borderStyle,
    colorHex: data.colorHex,
    summary: data.summary || undefined,
  };
}
