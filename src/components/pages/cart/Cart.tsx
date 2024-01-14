import { FC } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Button from '../../ui/button/Button';
import Layout from '../../ui/layout/Layout';
import styles from './Cart.module.scss';

const Cart: FC = () => {
	const { items } = useTypedSelector(state => state.cart);

	const { removeFromCart } = useActions();

	return (
		<Layout title='Cart'>
			{items.length ? (
				<div className={styles.cart}>
					{items.map(product => (
						<div key={product.id}>
							<div>
								<span className='mr-2 font-semibold'>{product.title}</span>
								<span>
									<div className={styles.price}>
										{new Intl.NumberFormat('en-US', {
											style: 'currency',
											currency: 'USD',
											maximumFractionDigits: 0,
										}).format(product.price)}
									</div>
								</span>
							</div>
							<button
								className='text-red-500'
								onClick={() => removeFromCart(product.id)}
							>
								Remove
							</button>
						</div>
					))}
				</div>
			) : (
				<div>Cart is empty!</div>
			)}
			<Button>Checkout</Button>
		</Layout>
	);
};
export default Cart;
