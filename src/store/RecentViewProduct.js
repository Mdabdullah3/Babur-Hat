import {create} from 'zustand';

const useRecentlyViewedStore = create((set) => ({
    recentlyViewed: [],
    addRecentlyViewed: (product) => set((state) => {
        const existingProduct = state.recentlyViewed.find(item => item._id === product._id);
        if (existingProduct) {
            return state;
        }
        const updatedRecentlyViewed = [product, ...state.recentlyViewed].slice(0, 5);
        localStorage.setItem("recentlyViewed", JSON.stringify(updatedRecentlyViewed));
        return { recentlyViewed: updatedRecentlyViewed };
    }),
    initializeRecentlyViewed: () => set(() => {
        const storedRecentlyViewed = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
        return { recentlyViewed: storedRecentlyViewed };
    })
}));

export default useRecentlyViewedStore;
