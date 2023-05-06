import styles from './buypanel.module.scss';
import React from 'react';
import { numWithSpaces } from '../../../helpers/common';

interface BuyPanelProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  price: number;
  onAdd: () => void;
}

export const BuyPanel = ({ price, onAdd, ...props }: BuyPanelProps) => (
  <div className={styles.wrapper} {...props}>
    <button className={styles.btn} onClick={onAdd}>
      <svg className={styles.icon}>
        <use href="/img/sprite.svg#cart" />
      </svg>
    </button>
    <span className={styles.price}>$ {numWithSpaces(price)}</span>
  </div>
);
