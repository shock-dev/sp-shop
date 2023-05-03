import styles from './cart.module.scss';
import { CartItem } from '../CartItem';

export const Cart = () => (
  <div className={styles.wrapper}>
    <p className={styles.title}>My basket</p>
    <div className={styles.list}>
      <CartItem />
      <CartItem />
    </div>
  </div>
);
