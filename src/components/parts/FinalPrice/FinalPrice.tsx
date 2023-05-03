import styles from './finalprice.module.scss';

export const FinalPrice = () => (
  <div className={styles.wrapper}>
    <div className={styles.row}>
      <span>Subtotal</span>
      <span>$ 1 850</span>
    </div>
    <div className={styles.row}>
      <span>Tax</span>
      <span>$ 100</span>
    </div>
    <div className={styles.row}>
      <span>Shipping</span>
      <span>$ 150</span>
    </div>
    <div className={styles.row}>
      <span>Total</span>
      <span>$ 2 100</span>
    </div>
  </div>
);
