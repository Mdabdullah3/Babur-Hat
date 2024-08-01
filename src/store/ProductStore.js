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
    categoryId: null,
    subCategoryId: null,
    suggestions: [], // Store for search suggestions

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
                    categoryId: categoryId || '',
                    subCategoryId: subCategoryId || '',
                },
            });
            set({ products: response.data.data, totalProducts: response.data.total, loading: false });
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

    setPage: (page) => set({ page }),
    setLimit: (limit) => set({ limit }),
    setSearchTerm: (searchTerm) => set({ searchTerm }),
    setSort: (sort) => set({ sort }),
    setCategoryId: (categoryId) => set({ categoryId }),
    setSubCategoryId: (subCategoryId) => set({ subCategoryId }),
}));

export default useProductStore;
