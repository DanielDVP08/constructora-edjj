import * as brevo from "@getbrevo/brevo";
import { templateChangePassword, templateVerificationEmail } from "./emailTemplate";

const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY as string
);

const smtpEmail = new brevo.SendSmtpEmail();

export async function sendVerificationEmail(email: string, token: string) {
  const templateEmail = templateVerificationEmail(
    `${process.env.NEXTAUTH_URL}/api/auth/verify-email?token=${token}&email=${email}`
  );
  try {
    smtpEmail.sender = {
      name: "JJ Constructora",
      email: "ontanedaeduardo@gmail.com",
    };
    smtpEmail.to = [{ email: email, name: "Usuario Nuevo" }];
    smtpEmail.subject = "Verificacion de cuenta";
    //   smtpEmail.htmlContent = `<p>Click the link below to verify your email</p>
    // <a href="${process.env.NEXTAUTH_URL}/api/auth/verify-email?token=${token}&email=${email}">Verify email</a>`;
    smtpEmail.htmlContent = templateEmail;

    await apiInstance.sendTransacEmail(smtpEmail);

    return {
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      error: true,
    };
  }
}

export async function sendSaleEmail(
  fullname: string,
  email: string,
  phoneNumber: string,
  ubicacion: string,
  price: string,
  description: string,
  urlImage: string
) {
  try {
    smtpEmail.sender = {
      name: "JJ Constructora",
      email: "ontanedaeduardo@gmail.com",
    };
    smtpEmail.to = [{ email: "danpereyrao123@gmail.com", name: "Analista" }];
    smtpEmail.subject = "Nuevo articulo recbido";
    smtpEmail.htmlContent = `<p>Hola quiero vender este Articulo</p>
  <p>
  Nombre: ${fullname},  
  email: ${email},  
  Telefono: ${phoneNumber},
  Ubicacion: ${ubicacion},
  Precio (s./): ${price},
  Descripcion: ${description},
  </p>`;
    smtpEmail.attachment = [
      { url: urlImage, name: `ImagenReferencial.${urlImage.split(".").pop()}` },
    ];

    await apiInstance.sendTransacEmail(smtpEmail);

    return {
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      error: true,
    };
  }
}

export async function sendCodeConfirmation(email: string, code: string) {
  const templateEmail = templateChangePassword(code);
  try {
    smtpEmail.sender = {
      name: "JJ Constructora",
      email: "ontanedaeduardo@gmail.com",
    };
    smtpEmail.to = [{ email: email, name: email }];
    smtpEmail.subject = "Cambiar Contraseña";
    smtpEmail.htmlContent = templateEmail;

    await apiInstance.sendTransacEmail(smtpEmail);

    return {
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      error: true,
    };
  }
}
