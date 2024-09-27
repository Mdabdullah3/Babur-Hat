import { create } from "zustand";
import axios from "axios";
import { API_URL } from "../config";
const useEventStore = create((set) => ({
    events: [],
    eventProducts: [],
    event: null,
    packageProducts: [],
    loading: false,
    error: null,
    fetchEvents: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get(`${API_URL}/events`);
            set({ events: response.data.data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    fetchEventById: async (eventId) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get(`${API_URL}/events/${eventId}`);
            set({ event: response.data.data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    fetchAllEventsProducts: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get(`${API_URL}/event-products`);
            set({ eventProducts: response.data.data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    fetchPackageProducts: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get(`${API_URL}/package-products`);
            set({ packageProducts: response.data.data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
}));

export default useEventStore