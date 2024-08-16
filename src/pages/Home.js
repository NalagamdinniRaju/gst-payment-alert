// // import React from 'react';
// // import Reminder from '../components/Reminder';

// // const Home = () => {
// //   return (
// //     <div className="home-page">
// //       <h1>Welcome to the GST Management System</h1>
// //       <Reminder />
// //     </div>
// //   );
// // };

// // export default Home;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Home = () => {
//   const [reminders, setReminders] = useState([]);

//   useEffect(() => {
//     const fetchReminders = async () => {
//       try {
//         const response = await axios.get('/api/reminders');
//         setReminders(response.data);
//       } catch (error) {
//         console.error('Error fetching reminders:', error);
//       }
//     };

//     fetchReminders();
//   }, []);

//   return (
//     <div style={{ padding: '20px', textAlign: 'center' }}>
//       <h1>Welcome to the GST Management System</h1>
//       <div style={{ marginTop: '20px', border: '1px solid #ccc', borderRadius: '8px', padding: '20px', width: '80%', margin: '0 auto' }}>
//         <h2>Upcoming GST Reminders</h2>
//         <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
//           <thead>
//             <tr>
//               <th style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: '#4CAF50', color: 'white' }}>Reminder Date</th>
//               <th style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: '#4CAF50', color: 'white' }}>GST Amount</th>
//               <th style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: '#4CAF50', color: 'white' }}>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reminders.map((reminder, index) => (
//               <tr key={index}>
//                 <td style={{ border: '1px solid #ccc', padding: '10px' }}>{new Date(reminder.reminderDate).toLocaleDateString()}</td>
//                 <td style={{ border: '1px solid #ccc', padding: '10px' }}>{reminder.gstAmount}</td>
//                 <td style={{ border: '1px solid #ccc', padding: '10px' }}>{reminder.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Home;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Home = () => {
//   const [reminders, setReminders] = useState([]);

//   useEffect(() => {
//     const fetchReminders = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/reminders');
//                 setReminders(response.data);
//       } catch (error) {
//         console.error('Error fetching reminders:', error);
//       }
//     };

//     fetchReminders();
//   }, []);

//   return (
//     <div style={{ padding: '20px', textAlign: 'center' }}>
//       <h1>Welcome to the GST Management System</h1>
//       <div style={{ marginTop: '20px', border: '1px solid #ccc', borderRadius: '8px', padding: '20px', width: '80%', margin: '0 auto' }}>
//         <h2>Upcoming GST Reminders</h2>
//         <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
//           <thead>
//             <tr>
//               <th style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: '#4CAF50', color: 'white' }}>Reminder Date</th>
//               <th style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: '#4CAF50', color: 'white' }}>GST Amount</th>
//               <th style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: '#4CAF50', color: 'white' }}>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reminders.map((reminder, index) => (
//               <tr key={index}>
//                 <td style={{ border: '1px solid #ccc', padding: '10px' }}>{new Date(reminder.reminderDate).toLocaleDateString()}</td>
//                 <td style={{ border: '1px solid #ccc', padding: '10px' }}>{reminder.gstAmount}</td>
//                 <td style={{ border: '1px solid #ccc', padding: '10px' }}>{reminder.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Home;
