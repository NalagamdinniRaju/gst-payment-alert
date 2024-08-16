const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  // Configure your email service here
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendInvoiceNotification = async (recruiterEmail, invoiceDetails) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "nrsraju9398@gmail.com",
      subject: 'New Invoice Generated',
      html: `
        <h1>New Invoice Generated</h1>
        <p>Invoice Number: ${invoiceDetails.invoiceNumber}</p>
        <p>Amount: ${invoiceDetails.amount}</p>
        <p>Due Date: ${invoiceDetails.dueDate}</p>
        <p>Please log in to your account to view and download the invoice.</p>
      `,
    });
    console.log('Invoice notification email sent successfully');
  } catch (error) {
    console.error('Error sending invoice notification email:', error);
  }
};

exports.sendPaymentReminder = async (recruiterEmail, invoiceDetails) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: recruiterEmail,
      subject: 'Payment Reminder',
      html: `
        <h1>Payment Reminder</h1>
        <p>This is a reminder that payment for invoice ${invoiceDetails.invoiceNumber} is due soon.</p>
        <p>Amount Due: ${invoiceDetails.amount}</p>
        <p>Due Date: ${invoiceDetails.dueDate}</p>
        <p>Please ensure timely payment to avoid any late fees.</p>
      `,
    });
    console.log('Payment reminder email sent successfully');
  } catch (error) {
    console.error('Error sending payment reminder email:', error);
  }
};

exports.sendAdminGSTReminder = async (adminEmail, gstAmount, dueDate) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: adminEmail,
      subject: 'GST Payment Reminder',
      html: `
        <h1>GST Payment Reminder</h1>
        <p>This is a reminder to pay the GST amount to the government.</p>
        <p>GST Amount: ${gstAmount}</p>
        <p>Due Date: ${dueDate}</p>
        <p>Please ensure timely payment to avoid any penalties.</p>
      `,
    });
    console.log('Admin GST reminder email sent successfully');
  } catch (error) {
    console.error('Error sending admin GST reminder email:', error);
  }
};