import { create } from 'zustand';
import axios from 'axios';
import { API_URL } from '../config';

const useProductStore = create((set) => ({
    products: [],
    totalProducts: 0,
    loading: false,
    error: null,
    page: 1,
    limit: 18,
    searchTerm: '',
    sort: '-createdAt,price',
    selectedCategory: null,
    selectedSubCategory: null,
    selectedSize: null,
    minPrice: 0,
    maxPrice: 1000,

    setPage: (page) => set({ page }),
    setLimit: (limit) => set({ limit }),
    setSearchTerm: (searchTerm) => set({ searchTerm }),
    setSort: (sort) => set({ sort }),
    setCategory: (category) => set({ selectedCategory: category }),
    setSubCategory: (subCategory) => set({ selectedSubCategory: subCategory }),
    setSize: (size) => set({ selectedSize: size }),
    setPriceRange: (minPrice, maxPrice) => set({ minPrice, maxPrice }),

    fetchProducts: async () => {
        set({ loading: true });
        const { page, limit, searchTerm, sort, selectedCategory, selectedSubCategory, selectedSize, minPrice, maxPrice } = useProductStore.getState();
        try {
            const response = await axios.get(`${API_URL}/products`, {
                params: {
                    _page: page,
                    _limit: limit,
                    _search: searchTerm ? `${searchTerm},name,slug,summary,description` : '',
                    _sort: sort,
                    category: selectedCategory,
                    subCategory: selectedSubCategory,
                    size: selectedSize,
                    price_gte: minPrice,
                    price_lte: maxPrice,
                },
            });
            set({
                products: response.data.data,
                totalProducts: response.data.total,
                totalPages: Math.ceil(response.data.total / limit),
                loading: false,
            });
        } catch (error) {
            set({ error: error.response?.data?.message || error.message, loading: false });
        }
    },

    fetchSuggestions: async (query) => {
        set({ loading: true });
        try {
            const response = await axios.get(`${API_URL}/products`, {
                params: {
                    _limit: 5,
                    _search: query ? `${query},name` : '',
                },
            });
            set({ suggestions: response.data.data, loading: false });
        } catch (error) {
            set({ error: error.response?.data?.message || error.message, loading: false });
        }
    },



    fetchProductByIdOrSlug: async (idOrSlug) => {
        set({ loading: true });
        try {
            const response = await axios.get(`${API_URL}/products/${idOrSlug}`);
            set({ product: response.data.data, loading: false });
        } catch (error) {
            set({ error: error.response?.data?.message || error.message, loading: false });
        }
    },
    fetchProductByIdForUser: async (userId) => {
        set({ loading: true });
        try {
            const response = await axios.get(`${API_URL}/users/${userId}/products`);
            set({ product: response.data.data, loading: false });
        } catch (error) {
            set({ error: error.response?.data?.message || error.message, loading: false });
        }
    },
    fetchAllProducts: async () => {
        set({ loading: true });
        try {
            const response = await axios.get(`${API_URL}/products?_limit=40&_fields=productVariants,category,subCategory,name,_id,coverPhoto`);
            set({ products: response.data.data, loading: false });
        } catch (error) {
            set({ error: error.response?.data?.message || error.message, loading: false });
        }
    },
}));

export default useProductStore;
