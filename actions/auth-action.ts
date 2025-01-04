// "use server"

import { FieldValues } from "react-hook-form";
// import { signIn } from "../auth";
import { signIn, signOut } from "next-auth/react";
import db from "@/libs/bd";
import bcrypt from "bcryptjs";

export const loginAction = async (data: FieldValues) => {
  try {
    console.log(data);
    await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
  } catch (error) {
    console.log(error);
  }
};

export async function updateSession(email: string, password: string) {
  await signOut({
    redirect: false,
  });
  const res = await signIn("credentials", {
    email: email,
    password: password,
    redirect: false,
  });

  console.log(res);
  return res;
}

export async function registerMember(data: FieldValues) {
  const form = new FormData();
  const category =
    data.education === "Secundaria Completa"
      ? "operario"
      : data.education === "Bachiller"
      ? "tecnico"
      : "profesional";

  if (data.competencies.length === 0) {
    return;
  }

  form.set("image", data.profileImage);
  form.set("firstName", data.firstName);
  form.set("lastName", data.lastName);
  form.set("documentId", data.documentid);
  form.set("phoneNumber", data.phoneNumber);
  form.set("email", data.email);
  form.set("description", data.description);
  form.set("education", data.education);
  form.set("career", data.degree);
  form.set("university", data.university);
  form.set("codCip", data.cipCode);
  form.set("skills", data.competencies.toString());
  form.set("yearsOfExperience", data.yearsOfExperience);
  form.set("yearsOfFieldExperience", data.yearsOfFieldExperience);
  form.set(
    "lastJob",
    `${data.lastJob.company},${data.lastJob.position},${data.lastJob.startDate},${data.lastJob.endDate}`
  );
  form.set("location", `${data.department},${data.province}`);
  form.set("resume", data.resume);
  form.set("category", category);
  form.set("paymentApproved", data.paymentApproved);

  await fetch("/api/registermember", {
    method: "POST",
    body: form,
  });

  // await res.json();
}

export async function registerVerification(email: string, password: string) {
  console.log("entro a verificar");

  const user = await db.user.findUnique({
    where: {
      email: email as string,
    },
  });

  console.log(user);

  if (!user) {
    console.log("no coincide el usuario");
    return;
  }

  const isValid = await bcrypt.compare(password, user.password as string);

  return isValid;
}

export async function registerBusiness(data: FieldValues) {
  console.log("entro a registrar");
  const form = new FormData();

  form.set("email", data.userEmail);
  form.set("role", data.roleUser);
  form.set("businessName", data.businessName);
  form.set("rucNumber", data.rucNumber);
  form.set("companyName", data.companyName);
  form.set("businessAddress", data.businessAddress);
  // form.set("residence", `${data.department},${data.province}`);
  form.set("department", data.department);
  form.set("province", data.province);
  form.set("description", data.description);
  form.set("profileImage", data.profileImage);
  form.set("companyLogo", data.companyLogo);
  form.set("coverImage", data.coverImage);
  form.set("resume", data.proformaFile);
  form.set("whatsappLink", data.whatsappLink);
  form.set("googleMapsLink", data.googleMapsLink);
  form.set("paymentApproved", data.paymentApproved);

  await fetch("/api/registerbusiness", {
    method: "POST",
    body: form,
  });
  console.log("se registro");
}
