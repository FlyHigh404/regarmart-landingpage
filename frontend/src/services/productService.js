import { apiClientGet } from './apiClient';
// --- UTILITY FORMATTING ---
const formatRupiah = (number) => {
    return number.toLocaleString("id-ID");
};

/**
 * @param {Array} products
 */
const mapProductsToFrontend = (products) => {
    return products.map(product => ({
        id: product.id,
        name: product.name,
        description: product.description, 
        stock: product.stock > 0, 
        price: product.effective_price, 
        priceFormatted: `Rp${formatRupiah(product.effective_price)}`,
        oldPrice: product.is_promo && product.base_price ? product.base_price : null,
        oldPriceFormatted: product.is_promo && product.base_price ? `Rp${formatRupiah(product.base_price)}` : null,
        promo: product.is_promo,
        image: product.image_url || '/placeholder.png', 
    }));
};

// --- API CALLS ---
export const fetchCategories = async () => {
    try {
        const response = await apiClientGet('/categories');
        return response.data || [];
    } catch (error) {
        return [];
    }
};

export const fetchUnits = async () => {
    try {
        const response = await apiClientGet('/units');
        return (response.data || []).map(unit => ({ ...unit, isSelected: false }));
    } catch (error) {
        return [];
    }
};

/**
 * @param {object} params 
 */
export const fetchProducts = async (params) => {
    const apiParams = {
        search: params.searchQuery,
        category: params.categoryFilter,
        unit: params.unitFilters.length > 0 ? params.unitFilters.join(',') : null,
        
        isPromo: params.isPromoFilter === 'promo' ? true : params.isPromoFilter === 'normal' ? false : null,
        
        sortByType: params.sortBy === 'terlaris' ? 'bestseller' : null, 
        sortByPrice: params.sortBy === 'harga-asc' ? 'asc' : params.sortBy === 'harga-desc' ? 'desc' : null,
        
        page: params.currentPage,
        limit: params.itemsPerPage,
    };
    
    Object.keys(apiParams).forEach(key => apiParams[key] == null && delete apiParams[key]);

    const userToken = 'YOUR_USER_TOKEN'; 

    try {
        const response = await apiClientGet('/products', apiParams, userToken);
        
        const mappedData = mapProductsToFrontend(response.data || []);
        
        return {
            data: mappedData,
            meta: response.meta || { totalItems: 0, totalPages: 1, currentPage: 1, itemsPerPage: params.itemsPerPage },
            message: response.message,
        };
    } catch (error) {
        throw new Error(error.message || "Gagal mengambil produk dari server.");
    }
};