import useDimensions from "@/hooks/useDimensions";
import { cn } from "@/lib/utils";
import { resumeSchema, ResumeValues, skillSchema } from "@/lib/validation";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { formatDate } from "@/lib/dateUtils";
import { Badge } from "./ui/badge";
import { BorderStyles } from "@/app/(main)/editor/BorderStyleButton";
import { Github, Heading, Linkedin } from "lucide-react";


interface ResumePreviewProps {
  resumeData: ResumeValues;
  contentRef?: React.Ref<HTMLDivElement>;
  className?: string;
}

export default function ResumePreview({
  resumeData,
  contentRef,
  className,
}: ResumePreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { width } = useDimensions(containerRef);

  return (
    <div
      className={cn(
        "aspect-[210/297] h-fit w-full bg-white text-black",
        className,
      )}
      ref={containerRef}
    >
      <div
        className={cn("m-3.5 space-y-2 p-6", !width && "invisible")}
        style={{
          zoom: (1 / 794) * width,
        }}
        ref={contentRef}
        id="resumePreviewContent"
      >
        {/* <pre>{JSON.stringify(resumeData,null,2)}</pre> */}
        <PersonalInfoHeader resumeData={resumeData} />
        <SummarySection resumeData={resumeData} />
        <EducationSection resumeData={resumeData} />
        <WorkExperienceSection resumeData={resumeData} />
        <ProjectSection resumeData={resumeData} />
        <SkillSet resumeData={resumeData} />
        <CustomSection resumeData={resumeData} />
        <CodingProfileSection resumeData={resumeData} />
        <CoursesSection resumeData = {resumeData} />

        {/* <SkillsSection resumeData={resumeData} /> */}
      </div>
    </div>
  );
}

interface ResumeSectionProps {
  resumeData: ResumeValues;
}

function PersonalInfoHeader({ resumeData }: ResumeSectionProps) {
  const {
    photo,
    firstName,
    lastName,
    jobTitle,
    city,
    country,
    phone,
    email,
    colorHex,
    borderStyle,
    githubProfile,
    linkedinProfile,
  } = resumeData;

  const [photoSrc, setPhotoSrc] = useState(photo instanceof File ? "" : photo);

  useEffect(() => {
    const objectUrl = photo instanceof File ? URL.createObjectURL(photo) : "";
    if (objectUrl) setPhotoSrc(objectUrl);
    if (photo === null) setPhotoSrc("");
    return () => URL.revokeObjectURL(objectUrl);
  }, [photo]);

  return (
    <div className="mb-5 flex items-center gap-6 font-['Computer_Modern']">
      {photoSrc && (
        <Image
          src={photoSrc}
          width={100}
          height={100}
          alt="Author photo"
          className="aspect-square object-cover"
          style={{
            borderRadius:
              borderStyle === BorderStyles.SQUARE
                ? "0px"
                : borderStyle === BorderStyles.CIRCLE
                  ? "9999px"
                  : "10%",
          }}
        />
      )}
      <div className="mx-auto space-y-0.5 text-center font-semibold">
        <div>
          <h1
            className="text-3xl font-bold tracking-tight"
            style={{ color: colorHex }}
          >
            {firstName} {lastName}
          </h1>
          <p className="text-xl font-semibold">{jobTitle}</p>
        </div>
        <p className="text-black-500 flex items-center justify-center gap-2 text-xs font-light tracking-wide">
          {city}
          {city && country ? " | " : ""}
          {country}
          {(city || country) && (phone || email) ? " | " : ""}
          {phone}
          {(phone || country) && email ? " |" : ""}
          {email && (
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
              className="flex gap-0.5 -mx-1 hover:text-black"
            >
              <span className="items-center font-bold ">Email:</span>
              {email}
            </a>
          )}
          {(phone || email) && githubProfile ? " | " : ""}

          {githubProfile && (
            <a
              href={githubProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-0.5 -mx-1 hover:text-black"
            >
              <span className="items-center font-bold">Github:</span>
              <Github size={14} />
            </a>
          )}
          {(email || githubProfile) && linkedinProfile ? " | " : ""}
          {linkedinProfile && (
            <a
              href={linkedinProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-0.5 -mx-1 hover:text-blue-400"
            >
              <span className="items-center font-bold">LinkedIn: </span>
              <Linkedin size={14} />
            </a>
          )}
        </p>
      </div>
    </div>
  );
}

function SummarySection({ resumeData }: ResumeSectionProps) {
  const { summary, colorHex } = resumeData;
  if (!summary) return null;
  return (
    <>
      <div className="-mb-3 break-inside-avoid space-y-1.5 font-['Computer_Modern']">
        <div className="text-md -mb-2.5 flex tracking-wider"
         style={{ color: colorHex }}>
          P
          <span className="mt-1 items-center text-xs">ROFESSIONAL PROFILE</span>
        </div>
        <div className="-mb-3 h-[1px] w-full bg-black"  style={{ background: colorHex }}/>
        <p className="-mt-1 ml-2 whitespace-pre-line text-sm">{summary}</p>
      </div>
    </>
  );
}

function WorkExperienceSection({ resumeData }: ResumeSectionProps) {
  const { workExperiences, colorHex } = resumeData;

  const workExperiencesNotEmpty = workExperiences?.filter(
    (exp) => Object.values(exp).filter(Boolean).length > 0,
  );

  if (!workExperiencesNotEmpty?.length) return null;

  return (
    <>
      <div className="-mt-4 break-inside-avoid space-y-2 font-['Computer_Modern']">
        <div className="text-md -mb-2.5 flex tracking-wider"style={{ color: colorHex }} >
          E <span className="mt-1 items-center text-xs">XPERIENCE</span>
        </div>
        <div className="-mb-3 h-[1px] w-full bg-black" style={{ background: colorHex }} />
        {workExperiencesNotEmpty.map((exp, index) => (
          <div key={index} className="break-inside-avoid">
            <div className="-mt-1.5 flex items-center justify-between pl-3 pr-2 text-sm font-semibold">
              <span className="text-[16px]">{exp.position}</span>
              {exp.startDate && (
                <span>
                  {formatDate(exp.startDate, "MM,yyyy")} -{" "}
                  {exp.endDate ? formatDate(exp.endDate, "MM,yyyy") : "Present"}
                </span>
              )}
            </div>
            <div className="m-0.5 -mt-1 flex items-center justify-between pl-2.5 text-sm font-light italic tracking-wide">
              <span>{exp.company}</span>
              {exp.companyLocation && (
                <span className="pr-3 text-sm tracking-wider">
                  {exp.companyLocation}
                </span>
              )}
            </div>
            {/* <p className="pl-2.5  m-0.5 text-xs font-semibold italic ">{exp.company}</p> */}
            <div className="-mt-1 mb-2.5 whitespace-pre-wrap pl-6 pr-5 text-sm">
              {exp.description}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function ProjectSection({ resumeData }: ResumeSectionProps) {
  const { projects, colorHex } = resumeData;

  const projectsNotEmpty = projects?.filter(
    (proj) => Object.values(proj).filter(Boolean).length > 0,
  );

  if (!projectsNotEmpty?.length) return null;

  return (
    <div className="-mt-3 break-inside-avoid space-y-1.5 font-['Computer_Modern']">
      <div
        className="text-md -mb-2.5 flex tracking-wider"
        style={{ color: colorHex }}
      >
        P <span className="mt-1 items-center text-xs">ROJECTS</span>
      </div>
      <div className="-mb-3 h-[1px] w-full bg-black"style={{ background: colorHex }} />
      {projectsNotEmpty.map((proj, index) => (
        <div key={index} className="break-inside-avoid">
          <div className="-mt-1.5 flex items-center justify-between pl-3 pr-2 font-semibold">
            {/* <span>{proj.projectName}</span> */}
            <p className="text-black-500 flex items-center justify-center gap-2 text-[16px]">
              {proj.projectName}
              {proj.projectName && proj.techStack ? " | " : ""}
              <span className="mb-1 mt-1 items-center text-sm font-thin italic">
                {proj.techStack}
              </span>
            </p>
            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[16px] no-underline"
              >
                <span className="items-center text-sm italic tracking-wide underline-offset-auto">
                  Link: {proj.projectName}
                </span>
              </a>
            )}
          </div>
          <div className="m-0.5 -mt-1.5 whitespace-pre-line pl-6 pr-5 text-sm">
            {proj.description}
          </div>
        </div>
      ))}
    </div>
  );
}

function EducationSection({ resumeData }: ResumeSectionProps) {
  const { educations, colorHex } = resumeData;

  const educationNotEmpty = educations?.filter(
    (edu) => Object.values(edu).filter(Boolean).length > 0,
  );

  if (!educationNotEmpty?.length) return null;

  return (
    <>
      <div className="-mb-3 break-inside-avoid space-y-1.5 font-['Computer_Modern']">
        <div className="text-md -mb-2.5 flex tracking-wider"  style={{ color: colorHex }}>
          E <span className="mt-1 items-center text-xs">DUCATION</span>
        </div>
        <div className="-mb-3 h-[1px] w-full bg-black "
        style={{ background: colorHex }} />
        {educationNotEmpty.map((edu, index) => (
          <div key={index} className="break-inside-avoid">
            <div className="-mt-1.5 flex items-center justify-between pl-3 pr-2 font-semibold">
              <span className="text-[16px]">{edu.degree}</span>
              {edu.startDate && (
                <span className="text-sm font-bold">
                  {edu.endDate && !edu.startDate
                    ? formatDate(edu.endDate, "MM,yyyy")
                    : edu.startDate && edu.endDate
                      ? `${formatDate(edu.startDate, "MM,yyyy")} -   ${formatDate(edu.endDate, "MM,yyyy")}`
                      : edu.startDate
                        ? `${formatDate(edu.startDate, "MM,yyyy")} - Present`
                        : ""}
                </span>
              )}
            </div>
            <div className="text-md ml-2.5 whitespace-pre-line pl-1.5 italic tracking-wide">
              {/* <span>{edu.school}</span> */}
              <div className="-mt-1 flex items-center justify-between font-light tracking-wide">
                <span>{edu.school}</span>
                {edu.cgpa && (
                  <span className="text-md tracking pr-3">
                    GPA:{" "}
                    <span className="text-sm font-bold not-italic">
                      {edu.cgpa}
                    </span>
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}


function SkillSet({ resumeData }: ResumeSectionProps) {
  const { skillSet,colorHex } = resumeData;
  const skillNotEmpty = skillSet?.filter(
    (skill) => Object.values(skill).filter(Boolean).length > 0,
  );

  if (!skillNotEmpty?.length) return null;

  return (
    <>
      <div className="-mb-3 break-inside-avoid space-y-1.5 font-['Computer_Modern']">
        <div className="text-md -mb-2.5 flex tracking-wide"style={{ color: colorHex }}>
          T <span className="mt-1 items-center text-xs">ECHNICAL SKILLS</span>
        </div>
        <div className="-mb-3 h-[1px] w-full bg-black" style={{ background: colorHex }} />
        {skillNotEmpty.map((skill, index) => (
          <div key={index} className="break-inside-avoid">
            <div className="-mt-1.5 flex flex-col pl-3.5 pr-2">
              <div className="flex items-center text-[16px] font-semibold">
                Languages:
                <span className="ml-2 text-sm font-normal tracking-wide">
                  {skill.languages}
                </span>
              </div>
              {skill.frameworks && (
                <div className="-mt-1.5 flex items-center text-[16px] font-semibold">
                  Frameworks:
                  <span className="ml-2 text-sm font-normal tracking-wide">
                    {skill.frameworks}
                  </span>
                </div>
              )}
              {skill.tools && (
                <div className="-mt-1.5 flex items-center text-[16px] font-semibold">
                  Developer Tools:
                  <span className="ml-2 text-sm font-normal tracking-wide">
                    {skill.tools}
                  </span>
                </div>
              )}
              {skill.libraries && (
                <div className="-mt-1.5 flex items-center text-[16px] font-semibold">
                  Libraries:
                  <span className="ml-2 text-sm font-normal tracking-wide">
                    {skill.libraries}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function CustomSection({ resumeData }: ResumeSectionProps) {
  const { custom,colorHex } = resumeData;

  const customNotEmpty = custom?.filter(
    (val) => Object.values(val).filter(Boolean).length > 0,
  );

  if (!customNotEmpty?.length) return null;

  return (
    <>
      {customNotEmpty.map((val, index) => (
        <div
          key={index}
          className="-mt-3 break-inside-avoid space-y-1.5 font-['Computer_Modern']"
        >
          <div className="-mb-3 flex text-[16px]  tracking-wider uppercase"style={{ color: colorHex }}>
            {val.heading?.charAt(0)}
            <span className="mt-1 items-center text-xs ">
              {val.heading?.slice(1)}
            </span>
          </div>
          <div className="-mb-3 h-[1px] w-full bg-black" style={{ background: colorHex }}/>
          <p className="m-0.5 -mt-1.5 overflow-hidden whitespace-pre-line break-words pl-6 pr-5 text-sm">   
            {val.description}
          </p>
        </div>
      ))}
    </>
  );
}

function CodingProfileSection({ resumeData }: ResumeSectionProps) {
  const { codingProfiles, colorHex } = resumeData;

  const codingProfilesNotEmpty = codingProfiles?.filter(
    (profile) => Object.values(profile).filter(Boolean).length > 0,
  );

  if (!codingProfilesNotEmpty?.length) return null;

  return (
    <div className="-mb-3 break-inside-avoid space-y-1.5 font-['Computer_Modern']">
      <div
        className="text-md -mb-2.5 flex tracking-wide"
        style={{ color: colorHex }}
      >
        C <span className="mt-1 items-center text-xs">ODING PROFILES</span>
      </div>
      <div className="-mb-3 h-[1px] w-full bg-black" style={{ background: colorHex }}/>

      {codingProfilesNotEmpty.map((prof, index) => (
        <div key={index} className="break-inside-avoid">
          <div className="justify m-1 -mt-1.5 flex items-center pl-1.5 text-sm font-semibold">
            <span className="text-black-500 flex items-center justify-center px-1 text-[16px]">
              {prof.codingProfile}
            </span>
            {prof.codingProfile && prof.codingProfileLink ? "  | " : ""}
            {prof.codingProfileLink && (
              <a
                href={prof.codingProfileLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[16px] no-underline"
              >
                <span className="items-center px-1 text-sm font-extralight italic tracking-wide underline-offset-auto">
                  Profile
                </span>
              </a>
            )}
          </div>
          <p className="m-0.5 -mt-1.5 overflow-hidden whitespace-pre-line break-words pl-6 pr-5 text-sm">
            {prof.description}
          </p>
        </div>
      ))}
    </div>
  );
}

function CoursesSection({ resumeData }: ResumeSectionProps) {
  const { courses, colorHex } = resumeData;

  const coursesNotEmpty = courses?.filter(
    (course) => Object.values(course).filter(Boolean).length > 0,
  );

  if (!coursesNotEmpty?.length) return null;

  return (
    <div className="-mb-3 break-inside-avoid space-y-1.5 font-['Computer_Modern']">
      <div
        className="text-md -mb-2.5 flex tracking-wide"
        style={{ color: colorHex }}
      >
        C <span className="mt-1 items-center text-xs">ERTIFICATIONS</span>
      </div>
      <div className="-mb-3 h-[1px] w-full bg-black"style={{ background: colorHex }} />

      {coursesNotEmpty.map((course, index) => (
        <div key={index} className="break-inside-avoid">
          <div className="justify m-1 -mt-1.5 flex items-center pl-1.5 text-sm font-semibold">
            <span className="text-black-500 flex items-center justify-center px-1 text-[16px]">
              {course.course}
            </span>
            {course.course && course.learningPlatform ?" | ":""}
            {course.learningPlatform && (
              <span className="items-center px-1 text-sm   tracking-wide underline-offset-auto">{course.learningPlatform}</span>
            )}
            {course.course && course.courseLink ? "  | " : ""}
            {course.courseLink && (
              <a
                href={course.courseLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[16px] no-underline"
              >
                <span className="items-center px-1 text-sm font-extralight italic tracking-wide underline-offset-auto">
                  Link
                </span>
              </a>
            )}
          </div>
          <p className="m-0.5 -mt-1.5 overflow-hidden whitespace-pre-line break-words pl-6 pr-5 text-sm">
            {course.description}
          </p>
        </div>
      ))}
    </div>
  );
}
