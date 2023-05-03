import styles from './header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <a href="/">
      <img src="/img/logo.png" alt="Logo" />
    </a>
    <button className={styles.btn}>
      <svg className={styles.icon}>
        <use href="/img/sprite.svg#cart" />
      </svg>
      <span className={styles.count}>2</span>
    </button>
  </header>
);
