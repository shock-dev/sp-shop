import styles from './finalprice.module.scss';
import { observer } from 'mobx-react-lite';
import { cartStore } from '../../../stores/cart';
import { numWithSpaces } from '../../../helpers/common';

export const FinalPrice = observer(() => {
  const { subtotal, tax, shopping, total } = cartStore;

  const res = [
    { title: 'Subtotal', value: subtotal },
    { title: 'Tax', value: tax },
    { title: 'Shipping', value: shopping },
    { title: 'Total', value: total },
  ];

  return (
    <div className={styles.wrapper}>
      {res.map(i => (
        <div className={styles.row} key={i.title}>
          <span>{i.title}</span>
          <span>$ {numWithSpaces(i.value)}</span>
        </div>
      ))}
    </div>
  );
});
