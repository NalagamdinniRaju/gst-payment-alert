const Reminder = require('../models/Reminder');
const Settings = require('../models/Settings');
const { sendAdminGSTReminder } = require('../utils/emailHelper');
const { sendAdminGSTReminderSMS } = require('../utils/smsHelper');

exports.createReminder = async (req, res) => {
  try {
    const { reminderDate, gstAmount } = req.body;
    const reminder = await Reminder.create({
      reminderDate,
      gstAmount,
      status: 'Pending',
    });
    res.status(201).json(reminder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getRemindersByMonth = async (req, res) => {
  try {
    const currentDate = new Date();
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    const reminders = await Reminder.find({
      reminderDate: { $gte: startOfMonth, $lte: endOfMonth },
    });
    res.status(200).json(reminders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.sendReminder = async (req, res) => {
  try {
    const reminder = await Reminder.findById(req.params.id);
    if (!reminder) {
      return res.status(404).json({ message: 'Reminder not found' });
    }

    const settings = await Settings.findOne();
    if (!settings) {
      return res.status(404).json({ message: 'Settings not found' });
    }

    await sendAdminGSTReminder(settings.email, reminder.gstAmount, reminder.reminderDate);
    await sendAdminGSTReminderSMS(settings.phoneNumber, reminder.gstAmount, reminder.reminderDate);

    reminder.status = 'Sent';
    await reminder.save();

    res.status(200).json({ message: 'Reminder sent successfully' });
  } catch (error) {
    console.error('Error sending reminder:', error);
    res.status(500).json({ message: 'Failed to send reminder. Please try again.' });
  }
};