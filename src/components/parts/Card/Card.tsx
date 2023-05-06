import styles from './card.module.scss';
import { BuyPanel } from '../BuyPanel';
import { Link } from 'react-router-dom';

interface CardProps {
  id: number;
  title: string;
  price: number;
  url: string;
  onAdd: () => void;
}

export const Card = ({ id, title, price, url, onAdd }: CardProps) => (
  <article className={styles.card}>
    <div className={styles.pic}>
      <img src={url} alt="" height={130} />
    </div>
    <div className={styles.body}>
      <Link to={`product/${id}`} className={styles.title}>
        {title}
      </Link>
      <BuyPanel price={price} onAdd={onAdd} role="contentinfo" />
    </div>
  </article>
);
