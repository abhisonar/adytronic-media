"use client";
import UiHeaderChip from "@ui/ui-header-chip/ui-header-chip.component";
import React from "react";
// import { createTransport, SendMailOptions } from "nodemailer";

const ContactUsComponent = () => {
  //   const { HOST, PORT, EMAIL, EMAIL_PASSWORD } = process.env;
  //   const smtp = createTransport({
  //     host: HOST,
  //     port: 465,
  //     secure: true,
  //     auth: {
  //       user: EMAIL,
  //       pass: EMAIL_PASSWORD,
  //     },
  //   });

  //   const mailOptions: SendMailOptions = {
  //     from: EMAIL,
  //     to: EMAIL,
  //     subject: "Test Mail",
  //     html: `<p>Hello This is Test Mail</p>`,
  //   };

  const sendMail = async () => {
    // smtp.sendMail(mailOptions, function (error, info) {
    //   if (error) {
    //     throw new Error(error.message);
    //   } else {
    //     console.log("Email Sent");
    //     return true;
    //   }
    // });
  };
  return (
    <div>
      <div>
        <div>
          <UiHeaderChip bulletSize="small" bulletsColor="primary">
            <span>Contact Me</span>
          </UiHeaderChip>
          <h1>Let&apos;s Work Together.</h1>
        </div>
      </div>
    </div>
  );
};

export default ContactUsComponent;
