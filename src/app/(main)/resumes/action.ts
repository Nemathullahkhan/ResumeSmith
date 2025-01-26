
"use server"

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server"
import { del } from "@vercel/blob";
import { revalidatePath } from "next/cache";

export async function deleteResume(id: string) {
    console.log("Server Action: Deleting resume", { resumeId: id });

    const { userId } = await auth();

    if (!userId) {
        console.error("Delete Resume: User not authenticated");
        throw new Error("User not authenticated")
    }

    const resume = await prisma.resume.findUnique({
        where: {
            id,
            userId
        }
    })

    if (!resume) {
        console.error("Delete Resume: Resume not found", { resumeId: id });
        throw new Error("Resume not found");
    }

    if (resume.photoUrl) {
        await del(resume.photoUrl)
    }

    await prisma.resume.delete({
        where: {
            id: id,
        }
    })

    console.log("Server Action: Resume deleted successfully", { resumeId: id });

    // Aggressive revalidation
    revalidatePath("/resumes", "page");
    revalidatePath("/", "layout");

    return { success: true, message: "Resume deleted successfully" };
}   