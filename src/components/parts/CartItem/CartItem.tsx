import styles from './cartitem.module.scss';
import { Sneaker } from '../../../resources/sneakers';

interface CartItemProps extends Sneaker {
  amount: number;
  onMinus: () => void;
  onPlus: () => void;
  onDelete: () => void;
}

export const CartItem = ({
  title,
  price,
  url,
  amount,
  onMinus,
  onPlus,
  onDelete,
}: CartItemProps) => (
  <div className={styles.wrapper}>
    <div className={styles.pic}>
      <img src={url} alt="" />
    </div>
    <div className={styles.panel}>
      <div className={styles.head}>
        <p className={styles.title}>{title}</p>
        <button onClick={onDelete}>
          <svg className={styles.icon}>
            <use href="/img/sprite.svg#cross" />
          </svg>
        </button>
      </div>
      <div className={styles.actions}>
        <button onClick={onMinus}>
          <svg>
            <use href="/img/sprite.svg#minus" />
          </svg>
        </button>
        <span>{amount}</span>
        <button onClick={onPlus}>
          <svg>
            <use href="/img/sprite.svg#plus" />
          </svg>
        </button>
        <span className={styles.price}>$ {price}</span>
      </div>
    </div>
  </div>
);
