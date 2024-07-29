import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_URL, SERVER } from '../config';
axios.defaults.withCredentials = true;
const useAuthStore = create(
    persist(
        (set) => ({
            user: null,
            isLoading: false,

            login: async (email, password, router) => {
                set({ isLoading: true });
                try {
                    const response = await axios.post(`${API_URL}/auth/login`, { email, password }, { withCredentials: true });
                    if (response.status === 200) {
                        const userData = response.data;
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
            googleLogin: () => {
                window.location.href = `${SERVER}/auth/google`;
            }
        }),
        {
            name: 'auth-storage',
            getStorage: () => (typeof window !== 'undefined' ? localStorage : undefined),
        }
    )
);

export default useAuthStore;
