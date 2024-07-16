import create from 'zustand';
import axios from 'axios';
import { API_URL } from '../config';
import { toast } from 'react-toastify';

const useReviewStore = create((set) => ({
    reviews: [],
    review: null,
    loading: false,
    error: null,

    fetchAllReviews: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get(`${API_URL}/reviews`);
            set({ reviews: response.data.data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },

    fetchReviewsByProduct: async (productId) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get(`${API_URL}/products/${productId}/reviews`);
            set({ reviews: response.data.data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },

    fetchReviewsByUser: async (userId) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get(`${API_URL}/users/${userId}/reviews`);
            set({ reviews: response.data.data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },

    fetchReviewsByMe: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get(`${API_URL}/me/reviews`);
            set({ reviews: response.data.data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },

    fetchReviewById: async (reviewId) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get(`${API_URL}/reviews/${reviewId}`);
            set({ review: response.data.data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },

    addReview: async (reviewData) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.post(`${API_URL}/reviews`, reviewData);
            if (response.data.data) {
                toast.success('Review added successfully!');

            }
            console.log(response);
        } catch (error) {
            set({ error: error.message, loading: false });
            toast.error(error.message);
            console.log(error);
        }
    },

    updateReview: async (reviewId, reviewData) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.patch(`${API_URL}/reviews/${reviewId}`, reviewData);
            if (response.data.data) {
                toast.success('Review updated successfully!');
            }
        } catch (error) {
            set({ error: error.message, loading: false });
            toast.error(error.message);
        }
    },

    deleteReview: async (reviewId) => {
        set({ loading: true, error: null });
        try {
            await axios.delete(`${API_URL}/reviews/${reviewId}`);
            toast.success('Review deleted successfully!');
        } catch (error) {
            set({ error: error.message, loading: false });
            toast.error(error.message);
        }
    },
}));

export default useReviewStore;
