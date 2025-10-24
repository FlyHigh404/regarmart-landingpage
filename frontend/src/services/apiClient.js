const BASE_URL = import.meta.env.VITE_BACKEND_API_URL; 

/**
 * @param {object} params
 * @returns {string}
 */
const buildQuery = (params) => {
  const query = Object.keys(params)
    .filter(key => params[key] !== null && params[key] !== undefined && params[key] !== '')
    .map(key => {
      const value = Array.isArray(params[key]) ? params[key].join(',') : params[key];
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .join('&');
  return query ? `?${query}` : '';
};

/**
 * @param {string} endpoint
 * @param {object} params
 * @param {string} token
 */
export async function apiClientGet(endpoint, params = {}, token = null) {
  const url = `${BASE_URL}${endpoint}${buildQuery(params)}`;
  
  const headers = {
    'Content-Type': 'application/json',
  };
  
  try {
    const response = await fetch(url, { headers });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `API Error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`[API Error ${endpoint}]:`, error);
    throw error; 
  }
}