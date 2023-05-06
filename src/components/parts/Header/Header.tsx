import { observer } from 'mobx-react-lite';
import styles from './header.module.scss';
import { cartStore } from '../../../stores/cart';
import { Link } from 'react-router-dom';

interface HeaderProps {
  toggleSidebar: () => void;
}

export const Header = observer(({ toggleSidebar }: HeaderProps) => {
  const amount = cartStore.items.length;
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src="/img/logo.png" alt="Logo" />
      </Link>
      <button className={styles.btn} onClick={toggleSidebar}>
        <svg className={styles.icon}>
          <use href="/img/sprite.svg#cart" />
        </svg>
        {amount > 0 && <span className={styles.count}>{amount}</span>}
      </button>
    </header>
  );
});
