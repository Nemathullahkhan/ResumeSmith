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
import { courseSchema, courseValues } from "@/lib/validation";
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
import { Textarea } from "@/components/ui/textarea";

export default function CoursesForm({
  resumeData,
  setResumeData,
}: EditorFormProps) {
  const form = useForm<courseValues>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      courses: resumeData.courses || [],
    },
  });

  useEffect(() => {
    const { unsubscribe } = form.watch(async (values) => {
      const isValid = await form.trigger();
      if (!isValid) return;
      setResumeData({
        ...resumeData,
        courses: values.courses?.filter((course) => course !== undefined) || [],
      });
    });
    return unsubscribe;
  }, [form, resumeData, setResumeData]);

  const { fields, append, remove, move } = useFieldArray({
    control: form.control,
    name: "courses",
    keyName: "id",
  });

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = fields.findIndex((field) => field.id === active.id);
    const newIndex = fields.findIndex((field) => field.id === over.id);

    if (oldIndex !== newIndex) {
      move(oldIndex, newIndex);
    }
  }

  return (
    <div className="mx-auto mt-10 max-w-xl space-y-6">
      <Form {...form}>
        <form className="space-y-3">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToVerticalAxis]}
          >
            <SortableContext
              items={fields}
              strategy={verticalListSortingStrategy}
            >
              {fields.map((field, index) => (
                <CourseItem
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
                  course: "",
                  courseLink: "",
                  description: "",
                })
              }
            >
              Add Certifications
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

interface ProjectItemProps {
  id: string;
  form: UseFormReturn<courseValues>;
  index: number;
  remove: (index: number) => void;
}

function CourseItem({ id, form, index, remove }: ProjectItemProps) {
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
        <span className="font-semibold">Cerifications: {index + 1}</span>
        <GripHorizontal
          className="size-5 cursor-grab text-muted-foreground focus:outline-none"
          {...attributes}
          {...listeners}
        />
      </div>

      <FormField
        control={form.control}
        name={`courses.${index}.course`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Course</FormLabel>
            <FormControl>
              <Input {...field} autoFocus />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`courses.${index}.learningPlatform`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Learning Platform/ Organization</FormLabel>
            <FormControl>
              <Input {...field} autoFocus />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`courses.${index}.courseLink`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Attachment Link</FormLabel>
            <FormControl>
              <Input {...field} autoFocus />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`courses.${index}.description`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Textarea
                {...field}
                className="h-36 w-full resize-none overflow-auto p-2"
                autoFocus
              />
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
