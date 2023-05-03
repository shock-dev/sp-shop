import styles from './sidebar.module.scss';
import { Cart } from '../Cart';
import { FinalPrice } from '../FinalPrice';

export const Sidebar = () => (
  <aside className={styles.sidebar}>
    <Cart />
    <FinalPrice />
  </aside>
);
