import { createUploadthing, type FileRouter } from "uploadthing/next";
import { auth } from "@clerk/nextjs/server";

const f = createUploadthing();

const handleAuth = async () => {
  const { userId } = await auth();

  if (!userId) throw new Error("unauthorized");
  return { userId };
  };
  export const ourFileRouter = {

  profileImage: f({image: { maxFileSize: "256MB", maxFileCount: 1}})
  .middleware(() => handleAuth())
  .onUploadComplete(() => {}),

}  satisfies FileRouter;


export type OurFileRouter = typeof ourFileRouter;
