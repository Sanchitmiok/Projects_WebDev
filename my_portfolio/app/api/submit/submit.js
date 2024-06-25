import dbConnect from '../../../utils/dbConnect';
import Contact from '../../../models/Contact';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'POST':
      try {
        const contactData = req.body;
        const contact = new Contact(contactData);
        await contact.save();

        // Send email notification
        await sendEmailNotification(contactData);

        res.status(201).json({ success: true, data: contact });
      } catch (error) {
        console.error('Error saving contact or sending email:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
      }
      break;
    default:
      res.status(405).json({ success: false });
      break;
  }
}

async function sendEmailNotification(contactData) {
  try {
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Prepare email message
    const message = {
      from: process.env.EMAIL_USER,
      to: process.env.NOTIFICATION_EMAIL,
      subject: 'New Contact Form Submission',
      html: `
        <p>A new contact form submission has been received:</p>
        <ul>
          <li>First Name: ${contactData.firstName}</li>
          <li>Last Name: ${contactData.lastName}</li>
          <li>Email: ${contactData.email}</li>
          <li>Phone: ${contactData.phone}</li>
          <li>Service: ${contactData.service}</li>
          <li>Message: ${contactData.message}</li>
        </ul>
      `,
    };

    // Send the email
    await transporter.sendMail(message);
    console.log('Email notification sent successfully');
  } catch (error) {
    console.error('Error sending email notification:', error);
    res.status(500).json({ success: false, error: 'Error sending email notification' }); // Update API response with error details
  }
}
