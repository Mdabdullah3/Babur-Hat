import { create } from 'zustand';
import axios from 'axios';
import { API_URL } from '../config';
import toast from 'react-hot-toast';

const useOrderStore = create((set) => ({
    payments: [],
    loading: false,
    error: null,

    // Create payment function
    createPayment: async (paymentData) => {
        set({ loading: true });
        try {
            const response = await axios.post(`${API_URL}/payments`, paymentData);
            set((state) => ({
                payments: [...state.payments, response.data],
                loading: false,
            }));
            toast.success("Payment created successfully!");
        } catch (error) {
            set({ error: error.response?.data?.message || error.message, loading: false });
            toast.error(error.message || "An error occurred while creating the payment.");
        }
    },

    // Fetch all payments
    fetchAllPayments: async () => {
        set({ loading: true });
        try {
            const response = await axios.get(`${API_URL}/payments`);
            set({ payments: response.data, loading: false });
        } catch (error) {
            set({ error: error.response?.data?.message || error.message, loading: false });
        }
    },

    // Fetch payments for a specific user
    fetchPaymentsByUser: async (userId) => {
        set({ loading: true });
        try {
            const response = await axios.get(`${API_URL}/users/${userId}/payments`);
            set({ payments: response.data, loading: false });
        } catch (error) {
            set({ error: error.response?.data?.message || error.message, loading: false });
        }
    },

    // Fetch a single payment by ID
    fetchPaymentById: async (paymentId) => {
        set({ loading: true });
        try {
            const response = await axios.get(`${API_URL}/payments/${paymentId}`);
            set({ payments: [response.data], loading: false });
        } catch (error) {
            set({ error: error.response?.data?.message || error.message, loading: false });
        }
    },
}));

export default useOrderStore;
