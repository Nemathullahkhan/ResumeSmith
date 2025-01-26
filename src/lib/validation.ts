import { z } from "zod";

export const optionalString = z.string().trim().optional().or(z.literal(""));

export const generalInfoSchema = z.object({
  title: optionalString,
  description: optionalString,
});

export type GeneralInfoValues = z.infer<typeof generalInfoSchema>;

export const personalInfoSchema = z.object({
  // for photo
  photo: z
    .custom<File | undefined>()
    .refine(
      // error message ig
      (file) =>
        !file || (file instanceof File && file.type.startsWith("image/")),
      "Must be an image file ",
    )
    .refine(
      (file) => !file || file.size <= 1024 * 1024 * 4,
      "File must be less than 4mb",
    ),
  firstName: optionalString,
  lastName: optionalString,
  jobTitle: optionalString,
  city: optionalString,
  country: optionalString,
  phone: optionalString,
  email: optionalString,
  githubProfile: optionalString,
  linkedinProfile: optionalString,
});

export type PersonalInfoValues = z.infer<typeof personalInfoSchema>;

export const workExperienceSchema = z.object({
  workExperiences: z
    .array(
      z.object({
        position: optionalString,
        company: optionalString,
        companyLocation: optionalString,
        startDate: optionalString,
        endDate: optionalString,
        description: optionalString,
      }),
    )
    .optional(),
});

export type WorkExperienceValues = z.infer<typeof workExperienceSchema>;

export type WorkExperience = NonNullable<z.infer<typeof workExperienceSchema>["workExperiences"]>[number]

export const projectSchema = z.object({
  projects:z.array(
    z.object({
      projectName: optionalString,
      link:optionalString,
      techStack: optionalString,
      description: optionalString,
    }),
  )
  .optional(),
});

export type ProjectValues = z.infer<typeof projectSchema>;
export type Projects = NonNullable<z.infer<typeof projectSchema>["projects"]>[number]

export const educationSchema = z.object({
  educations: z
    .array(
      z.object({
        degree: optionalString,
        school: optionalString,
        startDate: optionalString,
        endDate: optionalString,
        cgpa: optionalString,
      }),
    )
    .optional(),
});

export type EducationValues = z.infer<typeof educationSchema>;


export const skillSchema = z.object({
  skillSet:z.array(
    z.object({
      languages: optionalString,
      frameworks: optionalString,
      tools: optionalString,
      libraries: optionalString,
    })
  )
  .optional(),
})

export type SkillSetValues = z.infer<typeof skillSchema>;

export type SkillSet = NonNullable<z.infer<typeof skillSchema>["skillSet"]>[number]

export const customSchema = z.object({
  custom:z.array(
    z.object({
      heading: optionalString,
      description: optionalString,
      link: optionalString
    })
  )
  .optional(),
})

export type customValues = z.infer<typeof customSchema>;

export type customSet = NonNullable<z.infer<typeof customSchema>["custom"]>[number]

export const courseSchema = z.object({
  courses:z.array(
    z.object({
      course : optionalString,
      learningPlatform : optionalString,
      courseLink : optionalString,
      description: optionalString,
    })
  )
  .optional()
})

export type courseValues = z.infer<typeof courseSchema>;

export type courseSet = NonNullable<z.infer<typeof courseSchema>["courses"]>[number]



export const codingProfileSchema = z.object({
  codingProfiles:z.array(
    z.object({
      codingProfile : optionalString,
      codingProfileLink : optionalString,
      description: optionalString,
    }),
  )
  .optional()
})

export type codingProfileValues = z.infer<typeof codingProfileSchema>;

export type codingProfiles = NonNullable<z.infer<typeof codingProfileSchema>["codingProfiles"]>[number]







export const summarySchema = z.object({
  summary: optionalString,
});

export type SummaryValues = z.infer<typeof summarySchema>;

export const resumeSchema = z.object({
  ...generalInfoSchema.shape,
  ...personalInfoSchema.shape,
  ...workExperienceSchema.shape,
  ...projectSchema.shape,
  ...educationSchema.shape,
  // ...skillsSchema.shape,
  ...courseSchema.shape,
  ...codingProfileSchema.shape,
  ...skillSchema.shape,
  ...customSchema.shape,
  ...summarySchema.shape,
  colorHex: optionalString,
  borderStyle: optionalString,
});

export type ResumeValues = Omit<z.infer<typeof resumeSchema>, "photo"> & {
  id?: string;
  Phone?: File | string | null;
};

export const generateWorkExperienceSchema = z.object({
  description: z
    .string()
    .trim()
    .min(1, "Required")
    .min(20, "Must be atleast 20 characters"),
});

export type GenerateWorkExperienceInput = z.infer<typeof generateWorkExperienceSchema>;

export const generateSummarySchema = z.object({
  jobTitle: optionalString,
  ...workExperienceSchema.shape,
  ...educationSchema.shape,
  ...skillSchema.shape,
  ...customSchema.shape,
  
});

export const generateProjectSchema = z.object({
  description: z
    .string()
    .trim()
    .min(1, "Required")
    .min(20, "Must be atleast 20 characters"),
});

export type GenerateProjectInput = z.infer<typeof generateProjectSchema>;

export type GenerateSummaryInput = z.infer<typeof generateSummarySchema>;
