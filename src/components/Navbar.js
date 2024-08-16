// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">GST Management System</div>
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <Link to="/" className="nav-link">Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/invoices" className="nav-link">Invoices</Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/settings" className="nav-link">Settings</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components.css'

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/invoices">Invoices</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;