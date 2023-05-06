import styles from './catalog.module.scss';
import { Card } from '../../parts/Card';
import { mock, Sneaker } from '../../../resources/sneakers';
import { cartStore } from '../../../stores/cart';

export const Catalog = () => {
  const addProduct = (item: Sneaker) => {
    cartStore.add(item);
  };

  return (
    <div className={styles.wrapper}>
      {mock.map(i => (
        <Card
          key={i.id}
          id={i.id}
          title={i.title}
          url={i.url}
          price={i.price}
          onAdd={() => addProduct(i)}
        />
      ))}
    </div>
  );
};
