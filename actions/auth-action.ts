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
  form.set("role", data.role);

  await fetch("/api/registermember", {
    method: "POST",
    body: form,
  });

  // await res.json();
}

export async function updateMember(data: FieldValues) {
  const form = new FormData();

  form.set("email", data.email);
  form.set("profileImage", data.profileimage);
  form.set("newProfileImage", data.newProfileImage);
  form.set("isWorking", data.isWorking);
  form.set("phoneNumber", data.phoneNumber);
  form.set("description", data.description);
  form.set("education", data.education);
  form.set("career", data.career);
  form.set("university", data.university);
  form.set("lastJob", data.lastjob);
  form.set("skills", data.skills);
  form.set("resume", data.cv);
  form.set("newCV", data.newCV);

  await fetch("/api/updatemember", {
    method: "POST",
    body: form,
  });
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
  form.set(
    "businessName",
    (data.businessName as string).trim().replaceAll(" ", "_")
  );
  form.set("rucNumber", data.rucNumber);
  form.set("companyName", data.companyName);
  form.set("businessAddress", data.businessAddress);
  // form.set("residence", `${data.department},${data.province}`);
  form.set(
    "department",
    (data.department as string).trim().replaceAll(" ", "_")
  );
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
  // console.log("se registro");
}

export async function updateBusiness(data: FieldValues) {
  const form = new FormData();

  form.set("email", data.useremail);

  form.set("coverImage", data.coverimage);
  form.set("newCoverImage", data.newCoverImage);

  form.set("profileimage", data.profileimage);
  form.set("newProfileImage", data.newProfileImage);

  form.set("logoImage", data.companylogo);
  form.set("newLogoImage", data.newLogo);

  form.set("description", data.description);
  form.set("address", data.businessaddress);
  form.set("whatsappLink", data.whatsapp);
  form.set("googleMapsLink", data.googlemaps);

  form.set("proforma", data.proforma);
  form.set("newProforma", data.newProforma);

  await fetch("/api/updatebusiness", {
    method: "POST",
    body: form,
  });
}

export async function isValidPass(pass: string, userpass: string) {
  const isValid = await bcrypt.compare(pass, userpass);
  return isValid;
}

export async function sendCodeChangePass(email: string, code: string) {
  const form = new FormData();

  form.set("email", email);
  form.set("code", code);

  await fetch("/api/sendcode", {
    method: "POST",
    body: form,
  });

  // await sendCodeConfirmation(email, code);
}

export async function changePass(pass: string, email: string) {
  const form = new FormData();

  form.set("email", email);
  form.set("password", pass);

  await fetch("/api/changepass", {
    method: "POST",
    body: form,
  });
}

export async function cerrarSession() {
  await signOut({
    redirectTo: "/signin",
  });
}

export async function isValidEmail(emailUser: string) {
  console.log("entro",emailUser);
  const form = new FormData();

  form.set("email", emailUser);

  const res = await fetch("/api/exitsemail", {
    method: "POST",
    body: form,
  });

  console.log(res)

  if(!res.ok){
    return false
  }

  return true;
}
