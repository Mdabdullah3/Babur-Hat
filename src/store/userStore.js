// store/userStore.js
import create from 'zustand';
import axios from 'axios';
import { API_URL } from '../config';
const useUserStore = create((set) => ({
    user: null,
    loading: false,
    error: null,

    fetchUser: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get(`${API_URL}/api/users/me`);
            set({ user: response.data.data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },

    updateUser: async (userData) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.patch(`${API_URL}/api/users/me`, userData);
            set({ user: response.data.data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
}));

export default useUserStore;
