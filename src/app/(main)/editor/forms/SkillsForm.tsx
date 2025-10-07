import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { EditorFormProps } from "@/lib/types";
import { skillSchema, SkillSetValues } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm, useFieldArray, UseFormReturn } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function SkillsTab({
  resumeData,
  setResumeData,
}: EditorFormProps) {
  const [showButton, setShowButton] = useState(
    resumeData.skillSet && resumeData.skillSet.length === 0 ? 0 : 1,
  );
  const form = useForm<SkillSetValues>({
    resolver: zodResolver(skillSchema),
    defaultValues: {
      skillSet: resumeData.skillSet || [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "skillSet",
  });

  useEffect(() => {
    const { unsubscribe } = form.watch(async (values) => {
      const isValid = await form.trigger();
      if (!isValid) return;

      setResumeData({
        ...resumeData,
        skillSet: values.skillSet?.filter((skill) => skill !== undefined) || [],
      });
    });
    return unsubscribe;
  }, [form, resumeData, setResumeData]);

  useEffect(() => {
    setShowButton(fields.length === 0 ? 0 : 1);
  }, [fields]);

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div className="space-y-1.5 text-center">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <p className="text-sm text-muted-foreground">
          Showcase your technical expertise. Add as many skills as you like.
        </p>
      </div>

      <Form {...form}>
        <form className="space-y-4">
          {fields.map((field, index) => (
            <SkillItem
              id={field.id}
              key={field.id}
              index={index}
              form={form}
              remove={remove}
            />
          ))}
          {showButton === 0 && (
            <div className="flex justify-center">
              <Button
                type="button"
                onClick={() => {
                  append({
                    languages: "",
                    frameworks: "",
                    tools: "",
                    libraries: "",
                  });
                }}
              >
                Add skills
              </Button>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
}

interface SkillItemProps {
  id: string;
  form: UseFormReturn<SkillSetValues>;
  index: number;
  remove: (index: number) => void;
}

function SkillItem({ form, index, remove }: SkillItemProps) {
  return (
    <div className={cn("space-y-3 rounded-md border bg-background p-3")}>
      <div className="flex items-center justify-between gap-2">
        <span className="text-[15px] font-semibold tracking-tight">
          Technical Skills
        </span>
        <Button
          className="w-16 text-xs"
          variant="destructive"
          type="button"
          onClick={() => {
            remove(index);
          }}
        >
          Remove
        </Button>
      </div>
      <hr />

      <FormField
        control={form.control}
        name={`skillSet.${index}.languages`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Languages</FormLabel>
            <FormControl>
              <Input placeholder="e.g., Python, JavaScript" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`skillSet.${index}.databases`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Databases</FormLabel>
            <FormControl>
              <Input placeholder="e.g., MongoDB, SQL" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`skillSet.${index}.frameworks`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Frameworks</FormLabel>
            <FormControl>
              <Input placeholder="e.g., React, Django" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`skillSet.${index}.tools`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Developer Tools</FormLabel>
            <FormControl>
              <Input placeholder="e.g., Git, Docker" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`skillSet.${index}.libraries`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Libraries</FormLabel>
            <FormControl>
              <Input placeholder="e.g., Pandas, TensorFlow" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`skillSet.${index}.deployment`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Deployment Platforms</FormLabel>
            <FormControl>
              <Input placeholder="e.g. AWS, Vercel" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
