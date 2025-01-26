"use server";

import openai from "@/lib/openai";
import {
  GenerateProjectInput,
  generateProjectSchema,
  GenerateSummaryInput,
  generateSummarySchema,
  GenerateWorkExperienceInput,
  generateWorkExperienceSchema,
} from "@/lib/validation";
import { Projects, WorkExperience } from "@prisma/client";

export async function generateSummary(input: GenerateSummaryInput) {
  // Todo:Block for non-premium users

  const { jobTitle, workExperiences, educations, skillSet} =
    generateSummarySchema.parse(input);

  const systemMessage = `
    You are a job resume generator AI. Your task is to write a progessional introduction summary for a resume given the user's provided data.Only return the summary and do not include any other information in the response. Keep it concise and professional.
    `;

  const userMessage = `
    Please generate a professional resume summary from this data:
    
    Job title: ${jobTitle || "N/A"}

    Work experience:
    ${workExperiences
      ?.map(
        (exp) => `
        Position : ${exp.position || "N/A"} at ${exp.company || "N/A"} from ${exp.startDate || "N/A"} to ${exp.endDate || "Present"}
        
        Description:
        ${exp.description || "N/A"}
        `,
      )
      .join("\n\n")}

      Education:
    ${educations
      ?.map(
        (exp) => `
        Degree : ${exp.degree || "N/A"} at ${exp.school || "N/A"} from ${exp.startDate || "N/A"} to ${exp.endDate || "Present"}
        `,
      )
      .join("\n\n")}

      Skills:
      ${skillSet?.map((skill) => `
        Languages: ${skill.languages || "N/A"}
        Frameworks: ${skill.frameworks || "N/A"}
        Tools: ${skill.tools || "N/A"}
        Libraries: ${skill.libraries || "N/A"}
      `).join('\n\n')}
    `;
  console.log("systemMessage:", systemMessage);
  console.log("userMessage:", userMessage);

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: systemMessage,
      },
      {
        role: "user",
        content: userMessage,
      },
    ],
  });

  const aiResponse = completion.choices[0].message.content;

  if (!aiResponse) {
    throw new Error("Failed to generate the ai response");
  }
  return aiResponse;
}

export async function generateWorkExperience(
  input: GenerateWorkExperienceInput,
) {
  // Todo : block for non-premium users

  const { description } = generateWorkExperienceSchema.parse(input);

  const systemMessage = `
    You are a job resume generator AI. Your task is to generate a single work experience entry based on the user input. Your response must adhere to the following structure. You can omit fields if they can't be infered from the provide data, but don't add any new ones.

    Job title: <job title>
    Company: <company name>
    Company Location: <location>
    Start date: <format: YYYY--MM--DD (only if provided)
    End date: <format: YYYY--MM--DD (only if provided)
    Description: <an optimized description in bullet format, might be infered from the job title
     • X: Describe the context or challenge faced
     • Y: Explain the actions taken and your role
     • Z: Quantify the results and impact achieved
    >
    `;
  const userMessage = `
    Please provide a work experience entry from this description:
    ${description}
    `;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: systemMessage,
      },
      {
        role: "user",
        content: userMessage,
      },
    ],
  });

  const aiResponse = completion.choices[0].message.content;
  if (!aiResponse) {
    throw new Error("Failed to generate the ai response");
  }

  console.log("aiResponse: ", aiResponse);

  return {
    position: aiResponse.match(/Job title: (.*)/)?.[1] || undefined,
    company: aiResponse.match(/Company: (.*)/)?.[1] || undefined,
    companyLocation: aiResponse.match(/Company Location: (.*?)(?:\n|$)/)?.[1]?.trim() || undefined,
    description: (aiResponse.match(/Description:([\s\S]*)/)?.[1] || "").trim(),
    startDate: aiResponse.match(/Start date: (\d{4}-\d{2}-\d{2})/)?.[1] || undefined,
    endDate: aiResponse.match(/End date: (\d{4}-\d{2}-\d{2})/)?.[1] || undefined,
  };
}

export async function generateProject(input: GenerateProjectInput) {
  const { description } = generateProjectSchema.parse(input);

  const systemMessage = `Assume you are project description generator AI. Your task is to generate a single project description entry based on the user input. Your response must adhere to the following structure.
You can omit fields if they can't be infered from the provide data,but don't add any new ones.

Project Name: <Project name>
Project Link: <Project Link>
TechStack: <Technologies used for the creation of project>
Link: <Link to the project>
Description: < an optimized description in bullet format (with the symbol of bullet point),might be infered from the project name
• X: Describe the project challenge or objective
• Y: Explain the technical implementation and your role
• Z: Quantify the impact or results achieved
>`;

  const userMessage = `Please provide a project entry from this description:
${description}`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: systemMessage,
      },
      {
        role: "user",
        content: userMessage,
      },
    ],
  });

  const aiResponse = completion.choices[0].message.content;

  if (!aiResponse) {
    throw new Error("Failed to generate the ai response");
  }
  console.log("aiResponse:", aiResponse);

  return {
    id: "", // Will be generated by Prisma
    resumeId: "", // Will be set when saving to database
    createdAt: new Date(), // Current timestamp
    updatedAt: new Date(), // Current timestamp
    projectName: aiResponse.match(/Project Name: (.*)/)?.[1] || "",
    link: aiResponse.match(/Project Link: (.*)/)?.[1] || "",
    techStack: aiResponse.match(/TechStack: (.*)/)?.[1] || "",
    description: (aiResponse.match(/Description:([\s\S]*)/)?.[1] || "").trim(),
  } satisfies Projects;
}


