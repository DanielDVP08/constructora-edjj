export function templateVerificationEmail(linkVerification: string) {
  return `<!DOCTYPE html>
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify Your Email</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <table role="presentation" style="width: 100%; border-collapse: collapse;">
        <tr>
            <td align="center" style="padding: 0;">
                <table role="presentation" style="width: 600px; border-collapse: collapse; border: 1px solid #cccccc; border-spacing: 0; text-align: left;">
                    <tr>
                        <td align="center" style="padding: 40px 0 30px 0; background-color: #70bbd9;">
                            <img src="https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733346062/logojj_ou1syp.png" alt="Company Logo" width="300" style="height: auto; display: block;" />
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 36px 30px 42px 30px;">
                            <table role="presentation" style="width: 100%; border-collapse: collapse; border: 0; border-spacing: 0;">
                                <tr>
                                    <td style="padding: 0 0 36px 0; color: #153643;">
                                        <h1 style="font-size: 24px; margin: 0 0 20px 0; font-family: Arial, sans-serif;">Verifique su dirección de correo electrónico</h1>
                                        <p style="margin: 0 0 12px 0; font-size: 16px; line-height: 24px; font-family: Arial, sans-serif;">¡Gracias por registrarte! Estamos encantados de contar con tu presencia en nuestro sitio. Para completar tu registro y garantizar la seguridad de tu cuenta, verifica tu dirección de correo electrónico haciendo clic en el botón que aparece a continuación:</p>
                                        <p style="text-align: center;">
                                            <a href="${linkVerification}" style="background-color: #ee4c50; text-decoration: none; padding: 12px 24px; color: #ffffff; border-radius: 4px; display: inline-block; mso-padding-alt: 0; text-underline-color: #ee4c50;">
                                                <!--[if mso]><i style="letter-spacing: 25px; mso-font-width: -100%; mso-text-raise: 30pt;">&nbsp;</i><![endif]-->
                                                <span style="mso-text-raise: 15pt;">Verificar correo electrónico</span>
                                                <!--[if mso]><i style="letter-spacing: 25px; mso-font-width: -100%;">&nbsp;</i><![endif]-->
                                            </a>
                                        </p>
                                        <p style="margin: 0; font-size: 16px; line-height: 24px; font-family: Arial, sans-serif;">Si no ha creado una cuenta con nosotros, ignore este correo electrónico o comuníquese con nuestro equipo de soporte si tiene alguna pregunta.</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 30px; background-color: #ee4c50;">
                            <table role="presentation" style="width: 100%; border-collapse: collapse; border: 0; border-spacing: 0; font-size: 9px; font-family: Arial, sans-serif;">
                                <tr>
                                    <td style="padding: 0; width: 50%;" align="left">
                                        <p style="margin: 0; font-size: 14px; line-height: 16px; font-family: Arial, sans-serif; color: #ffffff;">
                                            &reg; JJ Constructora, 2023<br/>
                                        </p>
                                    </td>
                                    <td style="padding: 0; width: 50%;" align="right">
                                        <table role="presentation" style="border-collapse: collapse; border: 0; border-spacing: 0;">
                                            <tr>
                                                <td style="padding: 0 0 0 10px; width: 38px;">
                                                    <a href="http://www.twitter.com/" style="color: #ffffff;"><img src="https://assets.codepen.io/210284/tw_1.png" alt="Twitter" width="38" style="height: auto; display: block; border: 0;" /></a>
                                                    </td>
                                                <td style="padding: 0 0 0 10px; width: 38px;">
                                                    <a href="http://www.facebook.com/" style="color: #ffffff;"><img src="https://assets.codepen.io/210284/fb_1.png" alt="Facebook" width="38" style="height: auto; display: block; border: 0;" /></a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
}

export function templateChangePassword(code: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmacion de Cambio de Constraseña</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333333; margin: 0; padding: 0;">
    <table role="presentation" style="width: 100%; border-collapse: collapse;">
        <tr>
            <td style="padding: 0;">
                <table role="presentation" style="width: 100%; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <tr>
                        <td align="center" style="padding: 40px 0 30px 0; background-color: #70bbd9;">
                            <img src="https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733346062/logojj_ou1syp.png" alt="Company Logo" width="300" style="height: auto; display: block;" />
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color: #ffffff; padding: 40px 30px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                            <h1 style="color: #333333; font-size: 24px; margin-bottom: 20px;">Confirmacion de Cambio de Constraseña</h1>
                            <p style="margin-bottom: 20px;">Hemos recibido una solicitud para cambiar su contraseña. Para completar este proceso, utilice el siguiente código de confirmación:</p>
                            <p style="font-size: 32px; font-weight: bold; color: #007bff; text-align: center; margin: 30px 0; letter-spacing: 5px;">${code}</p>
                            <p style="margin-bottom: 20px;">Si no solicitó un cambio de contraseña, ignore este correo electrónico o comuníquese con nuestro equipo de soporte de inmediato..</p>
                            <p style="margin-bottom: 20px;">Este código caducará en 15 minutos por razones de seguridad.</p>
                            
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 30px; background-color: #ee4c50;">
                            <table role="presentation" style="width: 100%; border-collapse: collapse; border: 0; border-spacing: 0; font-size: 9px; font-family: Arial, sans-serif;">
                                <tr>
                                    <td style="padding: 0; width: 50%;" align="left">
                                        <p style="margin: 0; font-size: 14px; line-height: 16px; font-family: Arial, sans-serif; color: #ffffff;">
                                            &reg; JJ Constructora, 2023<br/>
                                        </p>
                                    </td>
                                    <td style="padding: 0; width: 50%;" align="right">
                                        <table role="presentation" style="border-collapse: collapse; border: 0; border-spacing: 0;">
                                            <tr>
                                                <td style="padding: 0 0 0 10px; width: 38px;">
                                                    <a href="http://www.twitter.com/" style="color: #ffffff;"><img src="https://assets.codepen.io/210284/tw_1.png" alt="Twitter" width="38" style="height: auto; display: block; border: 0;" /></a>
                                                    </td>
                                                <td style="padding: 0 0 0 10px; width: 38px;">
                                                    <a href="http://www.facebook.com/" style="color: #ffffff;"><img src="https://assets.codepen.io/210284/fb_1.png" alt="Facebook" width="38" style="height: auto; display: block; border: 0;" /></a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>

1234

56

`;
}
