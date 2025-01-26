import { Button } from "@/components/ui/button";
import Link from "next/link";
import { steps } from "./steps";
import { FileUserIcon, PenLineIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterProps {
  currentStep: string;
  setCurrentStep: (step: string) => void;
  showSmResumePreview: boolean;
  setShowSmResumePreview: (show: boolean) => void;
  isSaving: boolean
}

export default function Footer({
  currentStep,
  setCurrentStep,
  showSmResumePreview,
  setShowSmResumePreview,
  isSaving
}: FooterProps) {
  const previousStep = steps.find(
    (_, index) => steps[index + 1]?.key === currentStep,
  )?.key;

  const nextStep = steps.find(
    (_, index) => steps[index - 1]?.key === currentStep,
  )?.key;

  return (
    <footer className="w-full border-t py-3">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3">
        <div className="flex items-center gap-3">
          <Button
            className="w-24  h-8 text-xs"
            variant="secondary"
            onClick={
              previousStep ? () => setCurrentStep(previousStep) : undefined
            }
            disabled={!previousStep}
          >
            Previous step
          </Button>
          <Button
          className="w-18 h-8 text-xs font-semibold"
            onClick={nextStep ? () => setCurrentStep(nextStep) : undefined}
            disabled={!nextStep}
          >
            Next step
          </Button>
        </div>
        <Button
         variant="outline"
         size = "icon"
         onClick={ ()=> setShowSmResumePreview(!showSmResumePreview)}
         className="md:hidden"
         title ={
          showSmResumePreview ? "Show input form": "Show resume preview"
         }
        >
          {showSmResumePreview ? <PenLineIcon/> : <FileUserIcon/>}
        </Button>
        <div className="flex items-center gap-3">
          <Button variant="secondary" className="w-16 h-8 text-xs font-semibold" asChild>
            <Link href="/resumes">Close</Link>
          </Button>
          <p className={cn("text-muted-foreground opacity-0 text-xs",isSaving && "opacity-100")}
          >
            Saving...
          </p>
        </div>
      </div>
    </footer>
  );
}
