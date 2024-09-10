import { create } from 'zustand';
import axios from 'axios';
import { API_URL } from '../config';

const useOrderStore = create((set) => ({
    orders: [],
    singleOrder: null,
    userOrders: [],
    loggedInUserOrders: [],
    loading: false,
    error: null,

    // Fetch All Orders
    fetchAllOrders: async () => {
        set({ loading: true });
        try {
            const response = await axios.get(`${API_URL}/orders`, { withCredentials: true });
            set({ orders: response.data, loading: false });
        } catch (error) {
            set({ error: error.response?.data?.message || 'Error fetching orders', loading: false });
        }
    },

    // Fetch Single Order by ID
    fetchOrderById: async (orderId) => {
        set({ loading: true });
        try {
            const response = await axios.get(`${API_URL}/orders/${orderId}`, { withCredentials: true });
            set({ singleOrder: response.data, loading: false });
        } catch (error) {
            set({ error: error.response?.data?.message || 'Error fetching order', loading: false });
        }
    },

    // Fetch Orders by multiple Order IDs
    fetchOrdersByIds: async (orderIds) => {
        set({ loading: true });
        try {
            const response = await axios.post(`${API_URL}/api/orders/many`, { orderIds }, { withCredentials: true });
            set({ orders: response.data, loading: false });
        } catch (error) {
            set({ error: error.response?.data?.message || 'Error fetching multiple orders', loading: false });
        }
    },

    // Fetch All Orders of a User
    fetchUserOrders: async (userId) => {
        set({ loading: true });
        try {
            const response = await axios.get(`${API_URL}/users/${userId}/orders`, { withCredentials: true });
            set({ userOrders: response.data, loading: false });
        } catch (error) {
            set({ error: error.response?.data?.message || 'Error fetching user orders', loading: false });
        }
    },

    // Fetch All Orders of Logged In User
    fetchLoggedInUserOrders: async () => {
        set({ loading: true });
        try {
            const response = await axios.get(`${API_URL}/users/me/orders`, { withCredentials: true });
            set({ loggedInUserOrders: response?.data?.data, loading: false });
        } catch (error) {
            set({ error: error.response?.data?.message || 'Error fetching logged-in user orders', loading: false });
        }
    },

    // Create Single or Multiple Orders
    createOrder: async (orderData) => {
        set({ loading: true });
        try {
            const response = await axios.post(`${API_URL}/orders`, orderData, { withCredentials: true });
            set({ orders: [...response.data], loading: false });
        } catch (error) {
            set({ error: error.response?.data?.message || 'Error creating order', loading: false });
        }
    },

    // Update Order (Admin only)
    updateOrderStatus: async (orderId, updateData) => {
        set({ loading: true });
        try {
            const response = await axios.patch(`${API_URL}/orders/${orderId}`, updateData, { withCredentials: true });
            set({ singleOrder: response.data, loading: false });
        } catch (error) {
            set({ error: error.response?.data?.message || 'Error updating order status', loading: false });
        }
    },

    // Delete Order (Admin only)
    deleteOrder: async (orderId) => {
        set({ loading: true });
        try {
            await axios.delete(`${API_URL}/orders/${orderId}`, { withCredentials: true });
            set({ orders: (prevOrders) => prevOrders.filter((order) => order._id !== orderId), loading: false });
        } catch (error) {
            set({ error: error.response?.data?.message || 'Error deleting order', loading: false });
        }
    },
}));

export default useOrderStore;