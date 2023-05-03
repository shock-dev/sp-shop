import styles from './card.module.scss';

interface CardProps {
  title: string;
  price: number;
  url: string;
}

export const Card = ({ title, price, url }: CardProps) => (
  <article className={styles.card}>
    <div className={styles.pic}>
      <img src={url} alt="" height={130} />
    </div>
    <div className={styles.body}>
      <h6 className={styles.title}>{title}</h6>
      <footer className={styles.footer}>
        <button className={styles.btn}>
          <svg className={styles.icon}>
            <use href="/img/sprite.svg#cart" />
          </svg>
        </button>
        <span className={styles.price}>$ {price}</span>
      </footer>
    </div>
  </article>
);