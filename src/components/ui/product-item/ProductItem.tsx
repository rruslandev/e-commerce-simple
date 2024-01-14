import { FC } from 'react';
import { IProduct } from '../../../types/ProductInterface';

import { Link } from 'react-router-dom';
import styles from './ProductItem.module.scss';

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className={styles.item}>
			<Link to={`/product/${product.id}`}>
				<div
					style={{
						backgroundImage: `url(${product.thumbnail})`,
					}}
					className={styles.image}
				/>
			</Link>
			<div className={styles.heading}>{product.title}</div>
			<div className={styles.price}>
				{new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD',
					maximumFractionDigits: 0,
				}).format(product.price)}
			</div>
		</div>
	);
};
export default ProductItem;
