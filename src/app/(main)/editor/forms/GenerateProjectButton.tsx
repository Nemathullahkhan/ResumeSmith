import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  GenerateProjectInput,
  generateProjectSchema,
  Projects,
} from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { WandSparklesIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import LoadingButton from "@/components/LoadingButton";
import { generateProject } from "./actions";

interface GenerateProjectButtonProps {
  onProjectGenerated: (project: Projects) => void;
}

export default function GenerateProjectButton({
  onProjectGenerated,
}: GenerateProjectButtonProps) {
  const [showInputDialog, setShowInputDialog] = useState(false);

  return (
    <>
      <Button
        variant="outline"
        type="button"
        onClick={() => setShowInputDialog(true)}
      >
        <WandSparklesIcon className="mr-2 size-4" />
        Smart fill (AI)
      </Button>
      <InputDialog
        open={showInputDialog}
        onOpenChange={setShowInputDialog}
        onProjectGenerated={(project) => {
          onProjectGenerated(project);
          setShowInputDialog(false);
        }}
      />
    </>
  );
}

interface InputDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onProjectGenerated: (project: Projects) => void;
}

function InputDialog({
  open,
  onOpenChange,
  onProjectGenerated,
}: InputDialogProps) {
  const { toast } = useToast();

  const form = useForm<GenerateProjectInput>({
    resolver: zodResolver(generateProjectSchema),
    defaultValues: {
      description: "",
    },
  });

  async function onSubmit(input: GenerateProjectInput) {
    try {
      const response = await generateProject(input);
      onProjectGenerated(response);
      onOpenChange(false);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        description: "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Generate Project Description</DialogTitle>
          <DialogDescription>
            Describe the project you want to generate a description for and the
            AI will generate an optimized description for you.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="h-36 w-full resize-none overflow-auto p-2 placeholder:text-sm"
                      placeholder={`"My project is a <type of application, e.g., todo app, e-commerce platform> built with <technologies used, e.g., MERN stack, React, Node.js, MongoDB>, deployed on <platform, e.g., Vercel, AWS>. It offers <key features, e.g., user authentication, real-time updates, payment processing> and delivers <user value, e.g., a seamless, interactive experience>."`}
                      autoFocus
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <LoadingButton type="submit" loading={form.formState.isSubmitting}>
              Generate
            </LoadingButton>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
