// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Invoices from './pages/Invoices';
// import Settings from './pages/Settings';

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route exact path="/" component={Home} />
//         <Route path="/invoices" component={Invoices} />
//         <Route path="/settings" component={Settings} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Home from './pages/Home';
import Invoices from './pages/Invoices';
import Settings from './pages/Settings';
import Reminder from './components/Reminder';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Reminder />} />
          <Route path="/invoices/*" element={<Invoices />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;