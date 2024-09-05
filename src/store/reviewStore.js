import { create } from 'zustand';
import axios from 'axios';
import { API_URL } from '../config';
import { toast } from 'react-toastify';

const useReviewStore = create((set) => ({
    reviews: [],
    review: null,
    loading: false,
    error: null,
    replys: [],
    fetchAllReviews: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get(`${API_URL}/reviews`);
            set({ reviews: response.data?.data || [], loading: false }); // Safeguard to ensure it's always an array
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    fetchAllReplies: async (productId) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get(`${API_URL}/products/${productId}/reviews?_limit=2000&repliesOnly=true`);
            set({ replys: response.data?.data || [], loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },

    fetchReviewsByProduct: async (productId) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get(`${API_URL}/products/${productId}/reviews?_limit=2000`);
            set({ reviews: response.data?.data || [], loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },

    fetchReviewsByUser: async (userId) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get(`${API_URL}/users/${userId}/reviews`);
            set({ reviews: response.data?.data || [], loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },

    fetchReviewsByMe: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get(`${API_URL}/me/reviews`);
            set({ reviews: response.data?.data || [], loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },

    fetchReviewById: async (reviewId) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get(`${API_URL}/reviews/${reviewId}`);
            set({ review: response.data?.data || null, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },

    addReview: async (reviewData, message) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.post(`${API_URL}/reviews`, reviewData, {
                withCredentials: true,
            });
            if (response.data?.data) {
                toast.success(message);
                set((state) => ({
                    reviews: [...state.reviews, response.data.data],
                    loading: false,
                }));
            }
            console.log(response);
        } catch (error) {
            set({ error: error.message, loading: false });
            toast.error(error.message);
            console.log(error);
        }
    },

    updateReview: async (reviewId, reviewData, message) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.patch(`${API_URL}/reviews/${reviewId}`, reviewData, {
                withCredentials: true,
            });
            if (response.data?.data) {
                toast.success(message);
                set((state) => ({
                    reviews: state.reviews.map((review) =>
                        review._id === reviewId ? response.data.data : review
                    ),
                    loading: false,
                }));
            }
        } catch (error) {
            set({ error: error.message, loading: false });
            toast.error(error.message);
        }
    },

    deleteReview: async (reviewId, message) => {
        set({ loading: true, error: null });
        try {
            await axios.delete(`${API_URL}/reviews/${reviewId}`);
            toast.success(message);
            set((state) => ({
                reviews: state.reviews.filter((review) => review._id !== reviewId),
                loading: false,
            }));
        } catch (error) {
            set({ error: error.message, loading: false });
            toast.error(error.message);
        }
    },
}));

export default useReviewStore;
