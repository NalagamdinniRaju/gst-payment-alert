// import React, { useState, useEffect } from 'react';
// import { getRemindersByMonth } from '../utils/api';
// import '../styles/components.css'

// const Reminder = () => {
//   const [reminders, setReminders] = useState([]);

//   useEffect(() => {
//     const fetchReminders = async () => {
//       const data = await getRemindersByMonth();
//       setReminders(data);
//     };
//     fetchReminders();
//   }, []);

//   return (
//     <div className="reminder">
//       <h2>Upcoming GST Reminders</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Reminder Date</th>
//             <th>GST Amount</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {reminders.map((reminder) => (
//             <tr key={reminder._id}>
//               <td>{reminder.reminderDate}</td>
//               <td>{reminder.gstAmount}</td>
//               <td>{reminder.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Reminder;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Reminder = () => {
//   const [reminders, setReminders] = useState([]);

//   useEffect(() => {
//     const fetchReminders = async () => {
//       try {
//         const response = await axios.get('http://localhost:5600/api/reminders');
//         setReminders(response.data);
//       } catch (error) {
//         console.error('Error fetching reminders:', error);
//       }
//     };
//     fetchReminders();
//   }, []);

//   return (
//     <div className="reminder">
//       <h2>Upcoming GST Reminders</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Reminder Date</th>
//             <th>GST Amount</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {reminders.map((reminder) => (
//             <tr key={reminder._id}>
//               <td>{new Date(reminder.reminderDate).toLocaleDateString()}</td>
//               <td>{reminder.gstAmount}</td>
//               <td>{reminder.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Reminder;
// Reminder.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Reminder = () => {
//   const [reminders, setReminders] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchReminders = async () => {
//       try {
//         const response = await axios.get('http://localhost:5600/api/reminders');
//         console.log(response)
//         setReminders(response.data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };
//     fetchReminders();
//   }, []);

//   return (
//     <div className="reminder">
//       <h2>Upcoming GST Reminders</h2>
//       {error ? (
//         <p style={{ color: 'red' }}>{error}</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Reminder Date</th>
//               <th>GST Amount</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reminders.map((reminder) => (
//               <tr key={reminder._id}>
//                 <td>{new Date(reminder.reminderDate).toLocaleDateString()}</td>
//                 <td>{reminder.gstAmount}</td>
//                 <td>{reminder.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default Reminder;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { getSettings, getRemindersByMonth } from '../utils/api';

// const Reminder = () => {
//   const [reminders, setReminders] = useState([]);
//   const [settings, setSettings] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [remindersData, settingsData] = await Promise.all([
//           getRemindersByMonth(),
//           getSettings(),
//         ]);
//         setReminders(remindersData);
//         setSettings(settingsData);
//       } catch (error) {
//         setError(error.message);
//         toast.error('Failed to fetch data');
//       }
//     };
//     fetchData();
//   }, []);

//   const sendReminder = async (reminderId) => {
//     try {
//       await axios.post(`http://localhost:5000/api/reminders/${reminderId}/send`);
//       toast.success('Reminder sent successfully');
//     } catch (error) {
//       toast.error('Failed to send reminder');
//     }
//   };

//   return (
//     <div className="reminder">
//       <h2>Upcoming GST Reminders</h2>
//       {error ? (
//         <p style={{ color: 'red' }}>{error}</p>
//       ) : (
//         <>
//           {settings && (
//             <div className="settings-info">
//               <p>GST Number: {settings.gstNumber}</p>
//               <p>Invoice URL: {settings.invoiceUrl}</p>
//               <p>Reminder Date: {new Date(settings.reminderDate).toLocaleDateString()}</p>
//               <p>GST Amount: {settings.gstAmount}</p>
//             </div>
//           )}
//           <table>
//             <thead>
//               <tr>
//                 <th>Reminder Date</th>
//                 <th>GST Amount</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {reminders.map((reminder) => (
//                 <tr key={reminder._id}>
//                   <td>{new Date(reminder.reminderDate).toLocaleDateString()}</td>
//                   <td>{reminder.gstAmount}</td>
//                   <td>{reminder.status}</td>
//                   <td>
//                     <button onClick={() => sendReminder(reminder._id)}>Send Reminder</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </>
//       )}
//     </div>
//   );
// };

// export default Reminder; 
// correct code 
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { getSettings, getRemindersByMonth, sendReminder } from '../utils/api';

const Reminder = () => {
  const [reminders, setReminders] = useState([]);
  const [settings, setSettings] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [remindersData, settingsData] = await Promise.all([
          getRemindersByMonth(),
          getSettings(),
         
        ]);
        
        setReminders(remindersData);
        setSettings(settingsData);

      } catch (error) {
        setError(error.message);
        toast.error('Failed to fetch data');
      }
    };
    fetchData();
  }, []);

  const handleSendReminder = async (reminderId) => {
    try {
      await sendReminder(reminderId);
      toast.success('Reminder sent successfully');
      // Refresh reminders
      const updatedReminders = await getRemindersByMonth();
      setReminders(updatedReminders);
    } catch (error) {
      toast.error('Failed to send reminder');
    }
  };

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div className="reminder">
      <h2>Upcoming GST Reminders</h2>
      {settings && (
        <div className="settings-info">
          <p>GST Number: {settings.gstNumber}</p>
          <p>Invoice URL: {settings.invoiceUrl}</p>
          <p>Reminder Date: {new Date(settings.reminderDate).toLocaleDateString()}</p>
          <p>GST Amount: {settings.gstAmount}</p>
        </div>
      )}
      {/* <table>
        <thead>
          <tr>
            <th>Reminder Date</th>
            <th>GST Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reminders.map((reminder) => (
            <tr key={reminder._id}>
              <td>{new Date(reminder.reminderDate).toLocaleDateString()}</td>
              <td>{reminder.gstAmount}</td>
              <td>{reminder.status}</td>
              <td>
                <button onClick={() => handleSendReminder(reminder._id)} disabled={reminder.status === 'Sent'}>
                  Send Reminder
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default Reminder;