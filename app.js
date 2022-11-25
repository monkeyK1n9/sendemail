import nodemailer from 'nodemailer';
import mailgun from "nodemailer-mailgun-transport"

export const sendEmail = (auth, sender, recipient, subject, emailContent, callback) => {

    const transporter = nodemailer.createTransport(mailgun(auth))

    const recipientString = `${recipient.join(', ')}`

    const mailOptions = {
        from: sender,
        to: recipientString,
        subject,
        html: emailContent
    }

    transporter.sendMail(mailOptions, function(err, result) {
        if (err) {
            return callback(err, null)
        }

        callback(null, result)
    })
}
