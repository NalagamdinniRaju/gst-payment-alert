import React, { useState, useEffect } from 'react';
import { getInvoices } from '../utils/api';
import { Link } from 'react-router-dom';
import '../styles/components.css'

const InvoiceList = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      const data = await getInvoices();
      setInvoices(data);
    };
    fetchInvoices();
  }, []);

  return (
    <div className="invoice-list">
      <h2>Invoices</h2>
      <table>
        <thead>
          <tr>
            <th>Invoice Number</th>
            <th>Recruiter</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice._id}>
              <td>{invoice.invoiceNumber}</td>
              <td>{invoice.recruiterName}</td>
              <td>{invoice.amount}</td>
              <td>{invoice.status}</td>
              <td>
                <Link to={`/invoices/${invoice._id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceList;