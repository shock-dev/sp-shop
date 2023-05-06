import { Link, useParams } from 'react-router-dom';
import styles from './product.module.scss';
import { BuyPanel } from '../../parts/BuyPanel';
import { mock } from '../../../resources/sneakers';
import { cartStore } from '../../../stores/cart';

export const Product = () => {
  const { id } = useParams();

  if (!id) {
    return null;
  }

  const product = mock.find(i => i.id === +id);

  if (!product) {
    return null;
  }

  const addProduct = () => {
    cartStore.add(product);
  };

  return (
    <div className={styles.wrapper}>
      <Link to="/" className={styles.link}>
        Back in catalog
      </Link>
      <div className={styles.pic}>
        <img src="/img/sneakers/big.png" alt="" />
      </div>
      <h1 className={styles.title}>{product.title}</h1>
      <p className={styles.model}>Item model number: MT91547</p>
      <BuyPanel price={product.price} onAdd={addProduct} />
    </div>
  );
};
