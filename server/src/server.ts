import express from 'express'
import nodemailer from 'nodemailer'
import { prisma } from './prisma';

const app = express();

/* Middleware */
app.use(express.json());
/* End of Middleware */

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "8401a98f664471",
      pass: "da8e61e89d9c4b"
    }
  });

app.post('/feedbacks', async (req,res) => {
    const { type, comment, screenshot } = req.body;

    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot,
        }
    })

    await transport.sendMail({
        from: 'Feedback Team <hello@feedback.com>', //while in development environment, the email doesn't need to be a real email
        to: 'Janaina MJ <janaina.marostega@hotmail.com>', //sends the feedback email to the website owner/the developer
        subject: 'New Feedback',
        html: [
            `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
            `<p>Feedback Type: ${type}</p>`,
            `<p>Comment: ${comment}</p>`,
            `</div>`,
        ].join('\n')

    })

    return res.status(201).json({ data: feedback });
})

app.listen(3333, () => {
    console.log('HTTP server running!');
});

