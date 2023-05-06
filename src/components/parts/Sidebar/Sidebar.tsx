import cc from 'classcat';
import styles from './sidebar.module.scss';
import { Cart } from '../Cart';
import { FinalPrice } from '../FinalPrice';

interface SidebarProps {
  isOpen: boolean;
}

export const Sidebar = ({ isOpen }: SidebarProps) => (
  <aside className={cc([styles.sidebar, { [styles.open]: isOpen }])}>
    <Cart />
    <FinalPrice />
  </aside>
);
