import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import { ProductService } from '../../../services/ProductService';
import Layout from '../../ui/layout/Layout';
import ProductItem from '../../ui/product-item/ProductItem';
import styles from './Home.module.scss';

const Home: FC = () => {
	const { data: products, isLoading } = useQuery(
		['products'],
		() => ProductService.getProducts(),
		{
			select: ({ products }) => products,
		}
	);

	return (
		<Layout title='Shop the collections'>
			{isLoading ? (
				<div className='text-blue-400 text-2xl'>Loading...</div>
			) : products?.length ? (
				<div className={styles.wrapper}>
					{products.map(product => (
						<ProductItem product={product} key={product.id} />
					))}
				</div>
			) : (
				<div>Products not found!</div>
			)}
		</Layout>
	);
};
export default Home;
