// src/store/authStore.js
import create from 'zustand';
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_URL } from '../config';

const useAuthStore = create((set) => {
    // Initialize user from localStorage when store is created
    const storedUser = JSON.parse(localStorage.getItem('user')) || null;

    return {
        user: storedUser,
        isLoading: false,

        login: async (email, password) => {
            set({ isLoading: true });
            try {
                const response = await axios.post(`${API_URL}/auth/login`, { email, password });
                if (response.status === 200) {
                    const userData = response.data;
                    localStorage.setItem('user', JSON.stringify(userData));
                    set({ user: userData, isLoading: false });
                    toast.success('Login successful');
                } else {
                    toast.error('Login failed. Please try again.');
                    set({ isLoading: false });
                }
            } catch (error) {
                toast.error(error.response?.data?.message || 'Login failed. Please try again.');
                set({ isLoading: false });
            }
        },
        logout: () => {
            localStorage.removeItem('user');
            set({ user: null });
            toast.success('Logout successful');
        },
        register: async (formData) => {
            set({ isLoading: true });
            try {
                const response = await axios.post(`${API_URL}/auth/register`, formData);
                if (response.status === 201) {
                    toast.success('Registration successful! Please check your email for verification.');
                } else {
                    toast.error('Registration failed. Please try again.');
                }
                set({ isLoading: false });
            } catch (error) {
                toast.error(error.response?.data?.message || 'Registration failed. Please try again.');
                set({ isLoading: false });
            }
        },
        googleLogin: async () => {
            set({ isLoading: true });
            try {
                const response = await axios.get(`${API_URL}/auth/google`);
                if (response.status === 200) {
                    const userData = response.data;
                    localStorage.setItem('user', JSON.stringify(userData));
                    set({ user: userData, isLoading: false });
                    toast.success('Google login successful');
                } else {
                    toast.error('Google login failed. Please try again.');
                    set({ isLoading: false });
                }
            } catch (error) {
                toast.error('Google login failed. Please try again.');
                set({ isLoading: false });
            }
        },
    };
});

export default useAuthStore;
