import { EditorFormProps } from "@/lib/types";
import GeneralInfoForm from "./forms/GeneralInfoForm";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import WorkExperienceForm from "./forms/WorkExperienceForm";
import EducationForm from "./forms/EducationForm";
import SkillsForm from "./forms/SkillsForm";
import SummaryForm from "./forms/SummaryForm";
import ProjectsForm from "./forms/ProjectsForm";
import CustomForm from "./forms/CustomForm";

export const steps: {
  title: string;
  component: React.ComponentType<EditorFormProps>;
  key: string;
}[] = [
  { title: "General Info", component: GeneralInfoForm, key: "general-info" },
  { title: "Personal Info", component: PersonalInfoForm, key: "personal-info" },
  { title: "Education", component: EducationForm, key: "education" },
  {
    title: "Work experience",
    component: WorkExperienceForm,
    key: "work-experience",
  },
  { title: "Projects", component: ProjectsForm, key: "projects" },
  { title: "Skills", component: SkillsForm, key: "skills" },
  { title: "Custom", component: CustomForm, key: "custom" },
  { title: "Summary", component: SummaryForm, key: "summary" },
];
