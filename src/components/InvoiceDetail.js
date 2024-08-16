import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getInvoiceById } from '../utils/api';
import '../styles/components.css'

const InvoiceDetail = () => {
  const { id } = useParams();
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    const fetchInvoice = async () => {
      const data = await getInvoiceById(id);
      setInvoice(data);
    };
    fetchInvoice();
  }, [id]);

  if (!invoice) {
    return <div>Loading...</div>;
  }

  return (
    <div className="invoice-detail">
      <h2>Invoice Details</h2>
      <p>Invoice Number: {invoice.invoiceNumber}</p>
      <p>Recruiter: {invoice.recruiterName}</p>
      <p>Amount: {invoice.amount}</p>
      <p>Status: {invoice.status}</p>
      <p>GST Number: {invoice.gstNumber}</p>
      <p>Invoice URL: {invoice.invoiceUrl}</p>
    </div>
  );
};

export default InvoiceDetail;