import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { ProductService } from '../../../services/ProductService';
import Button from '../../ui/button/Button';
import Layout from '../../ui/layout/Layout';
import Gallery from './gallery/Gallery';

const Product: FC = () => {
	const params = useParams();

	const productId = params.id;

	const { data: product, isLoading } = useQuery(['product', productId], () =>
		ProductService.getProductByID(productId || '')
	);

	const { items } = useTypedSelector(state => state.cart);
	const { removeFromCart, addToCart } = useActions();

	if (!product)
		return (
			<Layout>
				<div>Product not found!</div>
			</Layout>
		);

	const isInCart = items.some(item => item.id === Number(productId));

	return (
		<Layout>
			{isLoading && <div>Loading...</div>}
			<Gallery images={product.images} />

			<h1 className='text-3xl font-semibold mb-2 mt-4'>{product.title}</h1>

			<div className='text-lg'>
				{new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD',
					maximumFractionDigits: 0,
				}).format(product.price)}
			</div>

			<Button
				onClick={() =>
					isInCart ? removeFromCart(Number(productId)) : addToCart(product)
				}
			>
				{isInCart ? 'This product already in cart' : 'Add to cart'}
			</Button>
		</Layout>
	);
};
export default Product;
