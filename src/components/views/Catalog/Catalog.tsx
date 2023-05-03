import styles from './catalog.module.scss';
import { Card } from '../../parts/Card';
import { mock } from '../../../resources/sneakers';

export const Catalog = () => (
  <div className={styles.wrapper}>
    {mock.map(i => (
      <Card key={i.id} title={i.title} url={i.url} price={i.price} />
    ))}
  </div>
);
