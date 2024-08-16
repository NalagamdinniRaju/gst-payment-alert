const twilio = require('twilio');

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

exports.sendInvoiceSMS = async (phoneNumber, invoiceDetails) => {
  try {
    await client.messages.create({
      body: `New invoice generated. Invoice Number: ${invoiceDetails.invoiceNumber}, Amount: ${invoiceDetails.amount}, Due Date: ${invoiceDetails.dueDate}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber,
    });
    console.log('Invoice SMS sent successfully');
  } catch (error) {
    console.error('Error sending invoice SMS:', error);
  }
};

exports.sendPaymentReminderSMS = async (phoneNumber, invoiceDetails) => {
  try {
    await client.messages.create({
      body: `Payment reminder for invoice ${invoiceDetails.invoiceNumber}. Amount Due: ${invoiceDetails.amount}, Due Date: ${invoiceDetails.dueDate}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber,
    });
    console.log('Payment reminder SMS sent successfully');
  } catch (error) {
    console.error('Error sending payment reminder SMS:', error);
  }
};

exports.sendAdminGSTReminderSMS = async (phoneNumber, gstAmount, dueDate) => {
  try {
    await client.messages.create({
      body: `GST Payment Reminder. Amount: ${gstAmount}, Due Date: ${dueDate}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber,
    });
    console.log('Admin GST reminder SMS sent successfully');
  } catch (error) {
    console.error('Error sending admin GST reminder SMS:', error);
  }
};