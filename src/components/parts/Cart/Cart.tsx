import styles from './cart.module.scss';
import { CartItem } from '../CartItem';
import { observer } from 'mobx-react-lite';
import { cartStore } from '../../../stores/cart';
import { arrayUniqueByKey } from '../../../helpers/common';
import { countById } from '../../../helpers/cart';
import { Sneaker } from '../../../resources/sneakers';

export const Cart = observer(() => {
  const { items } = cartStore;

  const uniqueItems = arrayUniqueByKey(items, 'id');

  const plus = (item: Sneaker) => {
    cartStore.add(item);
  };

  const minus = (id: Sneaker['id']) => {
    cartStore.minus(id);
  };

  const deleteSection = (id: Sneaker['id']) => {
    cartStore.delete(id);
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>My basket</p>
      {uniqueItems.length > 0 && (
        <div className={styles.list}>
          {uniqueItems.map(i => (
            <CartItem
              key={i.id}
              id={i.id}
              title={i.title}
              price={i.price}
              url={i.url}
              amount={countById(items, i.id)}
              onMinus={() => minus(i.id)}
              onPlus={() => plus(i)}
              onDelete={() => deleteSection(i.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
});
