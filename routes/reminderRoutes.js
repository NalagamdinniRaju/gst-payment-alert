// // const express = require('express');
// // const reminderController = require('../controllers/reminderController');

// // const router = express.Router();

// // router.post('/reminders', reminderController.createReminder);
// // router.get('/reminders', reminderController.getRemindersByMonth);
// // // const express = require('express');
// // // const router = express.Router();
// // // const Reminder = require('../models/Reminder');

// // // // Create a reminder
// // // router.post('/reminders', async (req, res) => {
// // //     try {
// // //         const { reminderDate, gstAmount } = req.body;
// // //         const reminder = await Reminder.create({ reminderDate, gstAmount, status: 'Pending' });
// // //         res.status(201).json(reminder);
// // //     } catch (error) {
// // //         res.status(400).json({ message: error.message });
// // //     }
// // // });

// // // // Get reminders for the current month
// // // router.get('/reminders', async (req, res) => {
// // //     try {
// // //         const currentDate = new Date();
// // //         const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
// // //         const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

// // //         const reminders = await Reminder.find({
// // //             reminderDate: { $gte: startOfMonth, $lte: endOfMonth },
// // //         });
// // //         res.status(200).json(reminders);
// // //     } catch (error) {
// // //         res.status(500).json({ message: error.message });
// // //     }
// // // });

// // // module.exports = router;
// const express = require('express');
// const reminderController = require('../controllers/reminderController');

// const router = express.Router();

// router.get('/reminders', reminderController.getRemindersByMonth);
// router.post('/reminders', reminderController.createReminder);

// module.exports = router;
const express = require('express');
const reminderController = require('../controllers/reminderController');

const router = express.Router();

router.get('/reminders', reminderController.getRemindersByMonth);
router.post('/reminders', reminderController.createReminder);
router.post('/reminders/:id/send', reminderController.sendReminder);

module.exports = router;