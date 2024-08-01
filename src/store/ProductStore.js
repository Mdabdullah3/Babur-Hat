import create from 'zustand';
import axios from 'axios';
import { API_URL } from '../config';

const useProductStore = create((set) => ({
    products: [],
    product: null,
    totalProducts: 0,
    loading: false,
    error: null,
    page: 1,
    limit: 10,
    searchTerm: '',
    sort: '-createdAt,price',
    categoryId: null, // Add this for category filtering
    subCategoryId: null, // Add this for subcategory filtering

    fetchProducts: async () => {
        set({ loading: true });
        const { page, limit, searchTerm, sort, categoryId, subCategoryId } = useProductStore.getState();
        try {
            const response = await axios.get(`${API_URL}/products`, {
                params: {
                    _page: page,
                    _limit: limit,
                    _search: searchTerm ? `${searchTerm},name,slug,summary,description` : '',
                    _sort: sort,
                    categoryId: categoryId || '', // Filter by category
                    subCategoryId: subCategoryId || '', // Filter by subcategory
                },
            });
            set({ products: response.data.data, totalProducts: response.data.total, loading: false });
        } catch (error) {
            set({ error: error.response?.data?.message || error.message, loading: false });
        }
    },

    setPage: (page) => set({ page }),
    setLimit: (limit) => set({ limit }),
    setSearchTerm: (searchTerm) => set({ searchTerm }),
    setSort: (sort) => set({ sort }),
    setCategoryId: (categoryId) => set({ categoryId }), // Update this
    setSubCategoryId: (subCategoryId) => set({ subCategoryId }), // Update this

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
}));

export default useProductStore;
