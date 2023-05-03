import styles from './sidebar.module.scss';
import { Cart } from '../Cart';
import { FinalPrice } from '../FinalPrice';

interface SidebarProps {
  isOpen: boolean;
}

export const Sidebar = ({ isOpen }: SidebarProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <aside className={styles.sidebar}>
      <Cart />
      <FinalPrice />
    </aside>
  );
};
