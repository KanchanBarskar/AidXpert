import { NextResponse } from "next/server";
import formidable from "formidable";
import fs from "fs";

// New Next.js App Router config
export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function POST(req: Request) {
  // Parse the incoming form data
  const form = formidable({ multiples: false, keepExtensions: true });

  // Try to get the Node.js IncomingMessage from the request
  let incoming: unknown = req;
  if ("req" in req) {
    incoming = req.req;
  }

  const data: { fields: formidable.Fields; files: formidable.Files } = await new Promise((resolve, reject) => {
    form.parse(
      incoming as unknown as import("http").IncomingMessage,
      (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      }
    );
  });

  // Prepare form data for backend
  const formData = new FormData();
  for (const key in data.fields) {
    const value = data.fields[key];
    if (Array.isArray(value)) {
      value.forEach((v) => formData.append(key, v));
    } else if (typeof value === "string") {
      formData.append(key, value);
    }
  }
  if (data.files.profile_image) {
    const profileImage = data.files.profile_image;
    const file = Array.isArray(profileImage) ? profileImage[0] : profileImage;
    if (file) {
      const fileBuffer = await fs.promises.readFile(file.filepath);
      const arrayBuffer = fileBuffer.buffer.slice(fileBuffer.byteOffset, fileBuffer.byteOffset + fileBuffer.byteLength);
      const blob = new Blob([arrayBuffer as ArrayBuffer], { type: file.mimetype || "application/octet-stream" });
      formData.append(
        "profile_image",
        blob,
        file.originalFilename ?? undefined
      );
    }
  }

  // Send to your backend
  const backendRes = await fetch("https://aidxpert-backend-api-uat.onrender.com/api/users", {
    method: "POST",
    body: formData,
  });

  const backendText = await backendRes.text();
  if (!backendRes.ok) {
    return NextResponse.json({ error: backendText }, { status: backendRes.status });
  }
  return NextResponse.json({ message: "User registered successfully", backend: backendText });
}