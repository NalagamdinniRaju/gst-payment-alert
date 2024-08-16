// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../styles/components.css'

// const Settings = () => {
//   const [gstNumber, setGstNumber] = useState('');
//   const [invoiceUrl, setInvoiceUrl] = useState('');
//   const [reminderDate, setReminderDate] = useState('');
//   const [gstAmount, setGstAmount] = useState(0);

// //   useEffect(() => {
// //     // Fetch the current settings from the server
// //     const fetchSettings = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:5600/api/settings');
// //         setGstNumber(response.data.gstNumber);
// //         setInvoiceUrl(response.data.invoiceUrl);
// //         setReminderDate(response.data.reminderDate);
// //         setGstAmount(response.data.gstAmount);
// //       } catch (error) {
// //         console.error('Error fetching settings:', error);
// //       }
// //     };
// //     fetchSettings();
// //   }, []);
//   useEffect(() => {
//     const fetchSettings = async () => {
//       try {
//         const response = await axios.get('http://localhost:5600/api/settings');
//         if (response.data) {
//           setGstNumber(response.data.gstNumber || '');
//           setInvoiceUrl(response.data.invoiceUrl || '');
//           setReminderDate(response.data.reminderDate || '');
//           setGstAmount(response.data.gstAmount || 0);
//         }
//       } catch (error) {
//         console.error('Error fetching settings:', error);
//       }
//     };
//     fetchSettings();
//   }, []);

//   const handleGstNumberChange = (e) => {
//     setGstNumber(e.target.value);
//   };

//   const handleInvoiceUrlChange = (e) => {
//     setInvoiceUrl(e.target.value);
//   };

//   const handleReminderDateChange = (e) => {
//     setReminderDate(e.target.value);
//   };

//   const handleGstAmountChange = (e) => {
//     setGstAmount(e.target.value);
//   };

// //   const handleSaveSettings = async () => {
// //     try {
// //       await axios.put('http://localhost:5600/api/settings', {
// //         gstNumber,
// //         invoiceUrl,
// //         reminderDate,
// //         gstAmount,
// //       });
// //       console.log('Settings saved successfully');
// //     } catch (error) {
// //       console.error('Error saving settings:', error);
// //     }
// //   };
// const handleSaveSettings = async () => {
//     try {
//       await axios.put('http://localhost:5600/api/settings', {
//         gstNumber,
//         invoiceUrl,
//         reminderDate,
//         gstAmount: parseFloat(gstAmount), // Ensure this is a number
//       });
//       console.log('Settings saved successfully');
//     } catch (error) {
//       console.error('Error saving settings:', error.response?.data || error.message);
//     }
//   };
//   return (
//     <div className="settings-page">
//       <h2>Settings</h2>
//       <div className="settings-form">
//         <div className="form-group">
//           <label htmlFor="gstNumber">GST Number:</label>
//           <input
//             type="text"
//             id="gstNumber"
//             value={gstNumber}
//             onChange={handleGstNumberChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="invoiceUrl">Invoice URL:</label>
//           <input
//             type="text"
//             id="invoiceUrl"
//             value={invoiceUrl}
//             onChange={handleInvoiceUrlChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="reminderDate">Reminder Date:</label>
//           <input
//             type="date"
//             id="reminderDate"
//             value={reminderDate}
//             onChange={handleReminderDateChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="gstAmount">GST Amount:</label>
//           <input
//             type="number"
//             id="gstAmount"
//             value={gstAmount}
//             onChange={handleGstAmountChange}
//           />
//         </div>
//         <button className="save-button" onClick={handleSaveSettings}>
//           Save Settings
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Settings;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import '../styles/components.css'
import { getSettings, updateSettings } from '../utils/api';

const Settings = () => {
  const [gstNumber, setGstNumber] = useState('');
  const [invoiceUrl, setInvoiceUrl] = useState('');
  const [reminderDate, setReminderDate] = useState('');
  const [gstAmount, setGstAmount] = useState('');
  const [message, setMessage] = useState('');

  // useEffect(() => {
  //   const fetchSettings = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:5600/api/settings');
  //       if (response.data) {
  //         setGstNumber(response.data.gstNumber || '');
  //         setInvoiceUrl(response.data.invoiceUrl || '');
  //         setReminderDate(response.data.reminderDate ? response.data.reminderDate.split('T')[0] : '');
  //         setGstAmount(response.data.gstAmount || '');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching settings:', error);
  //       setMessage('Error fetching settings. Please try again.');
  //     }
  //   };
  //   fetchSettings();
  // }, []); corrre  
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const data = await getSettings();
        if (data) {
          setGstNumber(data.gstNumber || '');
          setInvoiceUrl(data.invoiceUrl || '');
          setReminderDate(data.reminderDate ? data.reminderDate.split('T')[0] : '');
          setGstAmount(data.gstAmount || '');
        }
      } catch (error) {
        console.error('Error fetching settings:', error);
        setMessage('Error fetching settings. Please try again.');
      }
    };
    fetchSettings();
  }, []);

  const handleGstNumberChange = (e) => setGstNumber(e.target.value);
  const handleInvoiceUrlChange = (e) => setInvoiceUrl(e.target.value);
  const handleReminderDateChange = (e) => setReminderDate(e.target.value);
  const handleGstAmountChange = (e) => setGstAmount(e.target.value);

  // const handleSaveSettings = async () => {
  //   try {
  //     await axios.put('http://localhost:5600/api/settings', {
  //       gstNumber,
  //       invoiceUrl,
  //       reminderDate,
  //       gstAmount: parseFloat(gstAmount),
  //     });
  //     setMessage('Settings saved successfully');
  //     // Clear input fields
  //     setGstNumber('');
  //     setInvoiceUrl('');
  //     setReminderDate('');
  //     setGstAmount('');
  //   } catch (error) {
  //     console.error('Error saving settings:', error.response?.data || error.message);
  //     setMessage('Error saving settings. Please try again.');
  //   }
  // }; corre
  const handleSaveSettings = async () => {
    try {
      await updateSettings({
        gstNumber,
        invoiceUrl,
        reminderDate,
        gstAmount: parseFloat(gstAmount),
      });
      toast.success('Settings saved successfully');
      // Clear input fields
      setGstNumber('');
      setInvoiceUrl('');
      setReminderDate('');
      setGstAmount('');
    } catch (error) {
      console.error('Error saving settings:', error);
      toast.error('Error saving settings. Please try again.');
    }
  };

  return (
    <div className="settings-page">
      <h2>Settings</h2>
      {message && <p className="message">{message}</p>}
      <div className="settings-form">
        <div className="form-group">
          <label htmlFor="gstNumber">GST Number:</label>
          <input
            type="text"
            id="gstNumber"
            value={gstNumber}
            onChange={handleGstNumberChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="invoiceUrl">Invoice URL:</label>
          <input
            type="text"
            id="invoiceUrl"
            value={invoiceUrl}
            onChange={handleInvoiceUrlChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="reminderDate">Reminder Date:</label>
          <input
            type="date"
            id="reminderDate"
            value={reminderDate}
            onChange={handleReminderDateChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gstAmount">GST Amount:</label>
          <input
            type="number"
            id="gstAmount"
            value={gstAmount}
            onChange={handleGstAmountChange}
          />
        </div>
        <button className="save-button" onClick={handleSaveSettings}>
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;