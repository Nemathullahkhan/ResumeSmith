// "use client";

// import ResumePreview from "@/components/ResumePreview";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
// } from "@/components/ui/dropdown-menu";
// import { useToast } from "@/hooks/use-toast";
// import { ResumeServerData } from "@/lib/types";
// import { mapToResumeValues } from "@/lib/utils";
// import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
// import { formatDate } from "date-fns";
// import { Download, MoreVertical, Printer, Trash2 } from "lucide-react";
// import Link from "next/link";
// import { useRef, useState } from "react";
// import { deleteResume } from "./action";
// import { motion } from "motion/react";

// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { useReactToPrint } from "react-to-print";
// import { useRouter } from "next/navigation";
// import LoadingButton from "@/components/LoadingButton";
// import LoadingResumes from "./components/LoadingResumes";

// interface ResumeItemProps {
//   resume: ResumeServerData;
// }

// export default function ResumeItem({ resume }: ResumeItemProps) {
//   const contentRef = useRef<HTMLDivElement>(null);
//   const [showDeleteDialog, setShowDeleteDialog] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const reactToPrintFn = useReactToPrint({
//     contentRef,
//     documentTitle: resume.title || "Resume",
//   });

//   const wasUpdated = resume.updatedAt !== resume.createdAt;

//   const handleNavigation = () => {
//     setIsLoading(true);
//     // Simulate a delay or let the link handle navigation
//   };

//   return (
//     <div className="group relative rounded-lg border border-transparent bg-secondary p-3 transition-colors hover:border-border">
//       <div className="max-h-160 space-y-3 overflow-hidden">
//         <Link
//           href={`/editor?resumeId=${resume.id}`}
//           className="flex flex-col"
//           onClick={handleNavigation}
//         >
//           {isLoading ? (
//             <div className="flex justify-center pt-40">
//               <LoadingResumes />
//             </div>
//           ) : (
//             <>
//               <div className="inline-block w-full pb-2 text-center">
//                 <p className="line-clamp-1 font-semibold">
//                   {resume.title || "No title"}
//                 </p>
//                 {resume.description && (
//                   <p className="line-clamp-2 text-sm">{resume.description}</p>
//                 )}
//                 <p className="text-xs text-muted-foreground">
//                   {wasUpdated ? "updated" : "created"} on{" "}
//                   {formatDate(resume.updatedAt, "MMM d, yyyy h:mm a")}
//                 </p>
//               </div>
//               <div className="relative inline-block w-full">
//                 <ResumePreview
//                   resumeData={mapToResumeValues(resume)}
//                   contentRef={contentRef}
//                   className="z-10 overflow-hidden shadow-sm transition-shadow group-hover:shadow-lg"
//                 />
//                 <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-neutral-800/10 to-transparent shadow-sm transition-shadow"></div>
//               </div>
//             </>
//           )}
//         </Link>
//       </div>
//       <MoreMenu
//         resumeId={resume.id}
//         onPrintClick={reactToPrintFn}
//         onDeleteClick={() => setShowDeleteDialog(true)}
//       />
//       <DeleteResumeDialog
//         resumeId={resume.id}
//         open={showDeleteDialog}
//         onOpenChange={setShowDeleteDialog}
//       />
//     </div>
//   );
// }

// interface MoreMenuProps {
//   resumeId: string;
//   onPrintClick: () => void;
//   onDeleteClick: () => void;
//   onDownloadClick: () => void;
// }

// function MoreMenu({
//   resumeId,
//   onPrintClick,
//   onDeleteClick,
//   onDownloadClick,
// }: MoreMenuProps) {
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button
//           variant="ghost"
//           size="icon"
//           className="absolute right-0.5 top-0.5 opacity-0 transition-opacity group-hover:opacity-100"
//         >
//           <MoreVertical className="size-4" />
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent>
//         <DropdownMenuItem
//           className="flex items-center gap-2"
//           onClick={onPrintClick}
//         >
//           <Printer className="size-4" />
//           Print
//         </DropdownMenuItem>
//         <DropdownMenuItem
//           className="flex items-center gap-2"
//           onClick={onDownloadClick}
//         >
//           <Download className="size-4" />
//           Download
//         </DropdownMenuItem>
//         <DropdownMenuItem
//           className="flex items-center gap-2"
//           onSelect={(e) => {
//             e.preventDefault();
//             onDeleteClick();
//           }}
//         >
//           <Trash2 className="size-4" />
//           Delete
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }

// interface DeleteResumeDialogProps {
//   resumeId: string;
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
// }

// function DeleteResumeDialog({
//   resumeId,
//   open,
//   onOpenChange,
// }: DeleteResumeDialogProps) {
//   const { toast } = useToast();
//   const router = useRouter();
//   const [isDeleting, setIsDeleting] = useState(false);

//   async function handleDelete() {
//     setIsDeleting(true);
//     try {
//       await deleteResume(resumeId);
//       onOpenChange(false);
//       router.refresh();
//       window.location.reload();
//     } catch (error) {
//       console.error(error);
//       toast({
//         variant: "destructive",
//         description: "Something went wrong. Please try again.",
//       });
//     } finally {
//       setIsDeleting(false);
//     }
//   }

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>Delete Resume</DialogTitle>
//           <DialogDescription>
//             Are you sure you want to delete this resume? This action cannot be
//             undone.
//           </DialogDescription>
//         </DialogHeader>
//         <div className="flex justify-end space-x-2">
//           <Button
//             variant="secondary"
//             className="focus-visible:ring-offset-secondary"
//             onClick={() => onOpenChange(false)}
//           >
//             Cancel
//           </Button>
//           <LoadingButton
//             variant="destructive"
//             onClick={handleDelete}
//             loading={isDeleting}
//           >
//             Delete
//           </LoadingButton>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }

"use client";

import ResumePreview from "@/components/ResumePreview";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { ResumeServerData } from "@/lib/types";
import { mapToResumeValues } from "@/lib/utils";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { formatDate } from "date-fns";
import { Download, MoreVertical, Printer, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { deleteResume } from "./action";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useReactToPrint } from "react-to-print";
import { useRouter } from "next/navigation";
import LoadingButton from "@/components/LoadingButton";
import LoadingResumes from "./components/LoadingResumes";
import { usePDF } from "react-to-pdf";

interface ResumeItemProps {
  resume: ResumeServerData;
}

export default function ResumeItem({ resume }: ResumeItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const reactToPrintFn = useReactToPrint({
    contentRef,
    documentTitle: resume.title || "Resume",
  });

  const { toPDF, targetRef } = usePDF({
    filename: `${resume.title || "resume"}.pdf`,
  });

  const wasUpdated = resume.updatedAt !== resume.createdAt;

  const handleNavigation = () => {
    setIsLoading(true);
    // Simulate a delay or let the link handle navigation
  };

  const handleDownloadClick = () => {
    // Apply print styles before generating PDF
    const styleElement = document.createElement("style");
    styleElement.textContent = `
      @page { size: A4; margin: 0.6cm; }
      #resumePreviewContent {
        zoom: 1 !important;
        padding: 0 !important;
        -webkit-user-select: text !important;
        -moz-user-select: text !important;
        -ms-user-select: text !important;
        user-select: text !important;
      }
      #resumePreviewContent a {
        pointer-events: auto !important;
        cursor: pointer !important;
        color: inherit !important;
        text-decoration: underline !important;
      }
    `;
    document.head.appendChild(styleElement);

    toPDF(); // Trigger PDF generation

    // Use setTimeout to remove the style element after a delay
    setTimeout(() => {
      document.head.removeChild(styleElement);
    }, 2000); // Adjust delay (e.g., 2000ms = 2s) based on PDF generation time
  };

  return (
    <div className="max-h-160 group relative rounded-lg border border-transparent bg-secondary p-3 transition-colors hover:border-border">
      <div className="space-y-3 overflow-hidden">
        <Link
          href={`/editor?resumeId=${resume.id}`}
          className="flex flex-col"
          onClick={handleNavigation}
        >
          {isLoading ? (
            <div className="min-h-160 flex justify-center pt-40">
              <LoadingResumes />
            </div>
          ) : (
            <>
              <div className="inline-block w-full pb-2 text-center">
                <p className="line-clamp-1 font-semibold">
                  {resume.title || "No title"}
                </p>
                {resume.description && (
                  <p className="line-clamp-2 text-sm">{resume.description}</p>
                )}
                <p className="text-xs text-muted-foreground">
                  {wasUpdated ? "updated" : "created"} on{" "}
                  {formatDate(resume.updatedAt, "MMM d, yyyy h:mm a")}
                </p>
              </div>
              <div className="relative inline-block w-full" ref={targetRef}>
                <ResumePreview
                  resumeData={mapToResumeValues(resume)}
                  contentRef={contentRef}
                  className="z-10 overflow-hidden shadow-sm transition-shadow group-hover:shadow-lg"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-neutral-800/10 to-transparent shadow-sm transition-shadow"></div>
              </div>
            </>
          )}
        </Link>
      </div>
      <MoreMenu
        resumeId={resume.id}
        onPrintClick={reactToPrintFn}
        onDeleteClick={() => setShowDeleteDialog(true)}
        onDownloadClick={handleDownloadClick}
      />
      <DeleteResumeDialog
        resumeId={resume.id}
        open={showDeleteDialog}
        onOpenChange={setShowDeleteDialog}
      />
    </div>
  );
}

interface MoreMenuProps {
  resumeId: string;
  onPrintClick: () => void;
  onDeleteClick: () => void;
  onDownloadClick: () => void;
}

function MoreMenu({
  resumeId,
  onPrintClick,
  onDeleteClick,
  onDownloadClick,
}: MoreMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0.5 top-0.5 opacity-0 transition-opacity group-hover:opacity-100"
        >
          <MoreVertical className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className="flex items-center gap-2"
          onClick={onPrintClick}
        >
          <Printer className="size-4" />
          Print
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center gap-2"
          onClick={onDownloadClick}
        >
          <Download className="size-4" />
          Download
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center gap-2"
          onSelect={(e) => {
            e.preventDefault();
            onDeleteClick();
          }}
        >
          <Trash2 className="size-4" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

interface DeleteResumeDialogProps {
  resumeId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function DeleteResumeDialog({
  resumeId,
  open,
  onOpenChange,
}: DeleteResumeDialogProps) {
  const { toast } = useToast();
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDelete() {
    setIsDeleting(true);
    try {
      await deleteResume(resumeId);
      onOpenChange(false);
      router.refresh();
      window.location.reload();
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Resume</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this resume? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end space-x-2">
          <Button
            variant="secondary"
            className="focus-visible:ring-offset-secondary"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <LoadingButton
            variant="destructive"
            onClick={handleDelete}
            loading={isDeleting}
          >
            Delete
          </LoadingButton>
        </div>
      </DialogContent>
    </Dialog>
  );
}
