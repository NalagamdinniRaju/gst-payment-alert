import axios from 'axios';

const API_BASE_URL = 'http://localhost:5600/api';

export const getInvoices = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/invoices`);
    return response.data;
  } catch (error) {
    console.error('Error fetching invoices:', error);
    throw error;
  }
};

export const getInvoiceById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/invoices/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching invoice:', error);
    throw error;
  }
};

export const createInvoice = async (invoiceData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/invoices`, invoiceData);
    return response.data;
  } catch (error) {
    console.error('Error creating invoice:', error);
    throw error;
  }
};



export const createReminder = async (reminderData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/reminders`, reminderData);
    return response.data;
  } catch (error) {
    console.error('Error creating reminder:', error);
    throw error;
  }
};



export const updateSettings = async (settingsData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/settings`, settingsData);
    return response.data;
  } catch (error) {
    console.error('Error updating settings:', error);
    throw error;
  }
};


export const getRemindersByMonth = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/reminders`);
    return response.data;
  } catch (error) {
    console.error('Error fetching reminders:', error);
    throw error;
  }
};

export const getSettings = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/settings`);
    return response.data;
  } catch (error) {
    console.error('Error fetching settings:', error);
    throw error;
  }
};

export const sendReminder = async (reminderId) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/reminders/${reminderId}/send`);
    return response.data;
  } catch (error) {
    console.error('Error sending reminder:', error);
    throw error;
  }
};