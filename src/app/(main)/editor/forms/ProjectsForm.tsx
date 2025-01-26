import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { EditorFormProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import { projectSchema, ProjectValues } from "@/lib/validation";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { zodResolver } from "@hookform/resolvers/zod";
import { GripHorizontal } from "lucide-react";
import { useEffect } from "react";
import { useFieldArray, useForm, UseFormReturn } from "react-hook-form";
import GenerateProjectButton from "./GenerateProjectButton";
import { Textarea } from "@/components/ui/textarea";

export default function ProjectsForm({
  resumeData,
  setResumeData,
}: EditorFormProps) {
  const form = useForm<ProjectValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      projects: resumeData.projects || [],
    },
  });

  useEffect(() => {
    const { unsubscribe } = form.watch(async (values) => {
      const isValid = await form.trigger();
      if (!isValid) return;
      setResumeData({
        ...resumeData,
        projects: values.projects?.filter((proj) => proj !== undefined) || [],
      });
    });
    return unsubscribe;
  }, [form, resumeData, setResumeData]);

  const { fields, append, remove, move } = useFieldArray({
    control: form.control,
    name: "projects",
  });

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = fields.findIndex((field) => field.id === active.id);
      const newIndex = fields.findIndex((field) => field.id === over.id);
      move(oldIndex, newIndex);
      return arrayMove(fields, oldIndex, newIndex);
    }
  }

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div className="space-y-1.5 text-center">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <p className="text-sm text-muted-foreground">Add projects you have worked on</p>
      </div>

      <Form {...form}>
        <form className="space-y-3">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragCancel={handleDragEnd}
            modifiers={[restrictToVerticalAxis]}
          >
            <SortableContext
              items={fields}
              strategy={verticalListSortingStrategy}
            >
              {fields.map((field, index) => (
                <ProjectItem
                  id={field.id}
                  key={field.id}
                  index={index}
                  form={form}
                  remove={remove}
                />
              ))}
            </SortableContext>
          </DndContext>
          <div className="flex justify-center">
            <Button
              type="button"
              onClick={() =>
                append({
                  projectName: "",
                  link: "",
                  techStack: "",
                  description: "",
                })
              }
            >
              Add Project
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

interface ProjectItemProps {
  id: string;
  form: UseFormReturn<ProjectValues>;
  index: number;
  remove: (index: number) => void;
}

function ProjectItem({ id, form, index, remove }: ProjectItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  return (
    <div
      className={cn(
        "space-y-3 rounded-md border bg-background p-3",
        isDragging && "relative z-50 cursor-grab shadow-lg",
      )}
      ref={setNodeRef}
     style={{
             transform: CSS.Transform.toString(transform),
             transition,
           }}
    >
      <div className="flex justify-between gap-2">
        <span className="font-semibold">Projects{index + 1}</span>
        <GripHorizontal
          className="size-5 cursor-grab text-muted-foreground focus:outline-none"
          {...attributes}
          {...listeners}
        />
      </div>
      <div className="flex justify-center">
        {/* Generate description of the project Button */}
        <GenerateProjectButton 
         onProjectGenerated={(project) => form.setValue(`projects.${index}`, project)}
         />
      </div>
      <FormField
        control={form.control}
        name={`projects.${index}.projectName`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Project Name</FormLabel>
            <FormControl>
              <Input {...field} autoFocus />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`projects.${index}.link`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Link </FormLabel>
            <FormControl>
              <Input {...field} autoFocus />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`projects.${index}.techStack`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Technologies used</FormLabel>
            <FormControl>
              <Input {...field} autoFocus />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`projects.${index}.description`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
                    <Textarea {...field} className="h-36 w-full resize-none overflow-auto p-2 border  rounded-md" autoFocus />
            </FormControl>
          </FormItem>
        )}
      />
      <Button variant="destructive" type="button" onClick={() => remove(index)}>
        Remove
      </Button>
    </div>
  );
}
