import create from 'zustand'
import axios from 'axios'
import { API_URL } from '../config'

const useReviewStore = create((set) => ({
    reviews: [],
    fetchReviews: async (productId) => {
        const response = await axios.get(`${API_URL}/products/${productId}/reviews`)
        set({ reviews: response.data.data })
    },
    addReview: async (review) => {
        const response = await axios.post(`${API_URL}/reviews`, review)
        set((state) => ({ reviews: [...state.reviews, response.data.data] }))
    },
}))

export default useReviewStore
