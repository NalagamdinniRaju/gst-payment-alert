// const Settings = require('../models/Settings');

// exports.getSettings = async (req, res) => {
//   try {
//     const settings = await Settings.findOne();
//     res.status(200).json(settings);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.updateSettings = async (req, res) => {
//   try {
//     const { gstNumber, invoiceUrl, reminderDate, gstAmount } = req.body;
//     let settings = await Settings.findOne();

//     if (!settings) {
//       settings = new Settings({ gstNumber, invoiceUrl, reminderDate, gstAmount });
//     } else {
//       settings.gstNumber = gstNumber;
//       settings.invoiceUrl = invoiceUrl;
//       settings.reminderDate = reminderDate;
//       settings.gstAmount = gstAmount;
//     }

//     await settings.save();
//     res.status(200).json(settings);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };
const Settings = require('../models/Settings');

exports.getSettings = async (req, res) => {
  try {
    let settings = await Settings.findOne();
    if (!settings) {
      settings = new Settings({
        gstNumber: '',
        invoiceUrl: '',
        reminderDate: new Date(),
        gstAmount: 0,
      });
      await settings.save();
    }
    res.status(200).json(settings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateSettings = async (req, res) => {
  try {
    const { gstNumber, invoiceUrl, reminderDate, gstAmount } = req.body;
    let settings = await Settings.findOne();

    if (!settings) {
      settings = new Settings({ gstNumber, invoiceUrl, reminderDate, gstAmount });
    } else {
      settings.gstNumber = gstNumber;
      settings.invoiceUrl = invoiceUrl;
      settings.reminderDate = reminderDate;
      settings.gstAmount = gstAmount;
    }

    await settings.save();
    res.status(200).json(settings);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};