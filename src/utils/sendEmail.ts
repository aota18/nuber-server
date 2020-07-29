import Mailgun  from "mailgun-js";

const mailGunClient = new Mailgun({
    apiKey: process.env.MAILGUN_API || "",
    domain: process.env.MAILGUN_DOMAIN || "",

});

const sendEmail = (to: string, subject: string, html: string) => {
    const emailData = {
        from: "sapphier031794@gmail.com",
        to,
        subject,
        html
    }
    return mailGunClient.messages().send(emailData)
}


export const sendVerificationEamil = (fullName: string, key: string) => {
    const emailSubject = `Hello! ${fullName}, please verify your email`;

    const emailBody = `Verify your email by clicking <a href="https://duber.com/verification/${kwy}/">here</a>`;
    return sendEmail(emailSubject, emailBody);
}