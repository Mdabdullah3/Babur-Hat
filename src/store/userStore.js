// store/userStore.js
import {create} from 'zustand';
import axios from 'axios';
import { API_URL, SERVER } from '../config';
import { toast } from 'react-toastify';

const useUserStore = create((set, get) => ({
    user: null,
    loading: false,
    error: null,

    fetchUser: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get(`${API_URL}/users/me`, { withCredentials: true });
            set({ user: response.data.data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },

    updateUser: async (userData) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.patch(`${API_URL}/users/me`, userData, {
                withCredentials: true,
            });
            toast.success("Profile Update Successfully")
            console.log(response);
            set({ user: response.data.data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },

    logout: async () => {
        set({ loading: true, error: null });
        try {
            await axios.post(`${API_URL}/auth/logout`, {}, { withCredentials: true });
            set({ user: null, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    updatePassword: async (currentPassword, newPassword, confirmPassword) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.patch(
                `${API_URL}/auth/update-password`,
                {
                    currentPassword,
                    password: newPassword,
                    confirmPassword,
                },
                {
                    withCredentials: true,
                }
            );
            toast.success(response.data.message);
            set({ loading: false });
        } catch (error) {
            toast.error(error.response?.data?.message || 'Password update failed.');
            set({ error: error.message, loading: false });
        }
    },
    login: async (email, password, router) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.post(`${API_URL}/auth/login`, { email, password }, { withCredentials: true });
            if (response.status === 200) {
                await get().fetchUser();
                toast.success('Login successful');
                router.push('/');
            } else {
                toast.error('Login failed. Please try again.');
                set({ loading: false });
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Login failed. Please try again.');
            set({ loading: false });
        }
    },

    register: async (formData, router) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.post(`${API_URL}/auth/register`, formData);
            if (response.status === 201) {
                toast.success('Registration successful! Please Login to continue.');
                router.push('/auth/login');
            } else {
                toast.error('Registration failed. Please try again.');
            }
            set({ loading: false });
        } catch (error) {
            toast.error(error.response?.data?.message || 'Registration failed. Please try again.');
            set({ loading: false });
        }
    },

    googleLogin: () => {
        window.location.href = `${SERVER}/api/auth/google`;
    }
}));

export default useUserStore;
