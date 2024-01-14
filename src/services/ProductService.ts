import axios from 'axios';
import { IProductsResponse } from '../types/ProductInterface';

axios.defaults.baseURL = 'https://dummyjson.com/products';

export const ProductService = {
	getProducts: async () => {
		const response = await axios.get<IProductsResponse>('/', {
			params: {
				limit: 5,
			},
		});
		return response.data;
	},

	getProductByID: async (id: string) => {
		const response = await axios.get<IProductsResponse>(`/${id}`);
		return response.data;
	},
};
