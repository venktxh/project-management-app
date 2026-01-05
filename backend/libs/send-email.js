import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();

sgMail.setApiKey(process.env.SEND_GRID_API);

const fromEmail = process.env.FROM_EMAIL || "madamalaranesh@gmail.com";

export const sendEmail = async (to, subject, html) => {
  const msg = {
    to,
    from: `TaskHUb <${fromEmail}>`,
    subject,
    html,
  };
  try {
    await sgMail.send(msg);
    console.log("Email sent to ", to);
    return true;
  } catch (error) {
    console.error("Error sending email: ", error);
    return false;
  }
};
