const mongoose = require('mongoose');
const Invoice = require('./models/Invoice');
const Reminder = require('./models/Reminder');
const Settings = require('./models/Settings');

const seedData = async () => {
  try {
    // Check if data already exists
    const invoiceCount = await Invoice.countDocuments();
    const reminderCount = await Reminder.countDocuments();
    const settingsCount = await Settings.countDocuments();

    if (invoiceCount === 0) {
      await Invoice.insertMany([
        {
          invoiceNumber: 'INV-001',
          recruiterName: 'John Doe',
          amount: 1000,
          status: 'Pending',
          gstNumber: 'GST123456',
          invoiceUrl: 'https://example.com/invoice1',
        },
        {
          invoiceNumber: 'INV-002',
          recruiterName: 'Jane Smith',
          amount: 1500,
          status: 'Paid',
          gstNumber: 'GST789012',
          invoiceUrl: 'https://example.com/invoice2',
        },
        {
          invoiceNumber: 'INV-003',
          recruiterName: 'Alice Johnson',
          amount: 2000,
          status: 'Overdue',
          gstNumber: 'GST345678',
          invoiceUrl: 'https://example.com/invoice3',
        },
      ]);
      console.log('Dummy invoices inserted');
    }

    if (reminderCount === 0) {
      await Reminder.insertMany([
        {
        id: 1,
          reminderDate: new Date('2024-09-15'),
          gstAmount: 180,
          status: 'Pending',
        },
        {
            id: 2,
          reminderDate: new Date('2024-10-15'),
          gstAmount: 270,
          status: 'Sent',
        },
        {
            id: 3,
          reminderDate: new Date('2024-11-15'),
          gstAmount: 360,
          status: 'Pending',
        },
      ]);
      console.log('Dummy reminders inserted');
    }

    if (settingsCount === 0) {
      await Settings.create({
        gstNumber: 'GSTIN1234567890',
        invoiceUrl: 'https://example.com/invoices',
        reminderDate: new Date('2024-09-01'),
        gstAmount: 1000,
      });
      console.log('Dummy settings inserted');
    }

    console.log('Seed data insertion complete');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
};

module.exports = seedData;