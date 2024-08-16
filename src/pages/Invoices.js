// import React from 'react';
// import InvoiceList from '../components/InvoiceList';
// import InvoiceDetail from '../components/InvoiceDetail';

// const Invoices = () => {
//   return (
//     <div className="invoices-page">
//       <InvoiceList />
//       <InvoiceDetail />
//     </div>
//   );
// };

// export default Invoices;
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InvoiceList from '../components/InvoiceList';
import InvoiceDetail from '../components/InvoiceDetail';

const Invoices = () => {
  return (
    <div className="invoices-page">
      <Routes>
        <Route index element={<InvoiceList />} />
        <Route path=":id" element={<InvoiceDetail />} />
      </Routes>
    </div>
  );
};

export default Invoices;