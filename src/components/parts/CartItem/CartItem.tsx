import styles from './cartitem.module.scss';

export const CartItem = () => (
  <div className={styles.wrapper}>
    <div className={styles.pic}>
      <img src="/img/sneakers/1.png" alt="" />
    </div>
    <div className={styles.panel}>
      <div className={styles.head}>
        <p className={styles.title}>New Balance 574 Vintage Brights</p>
        <button>
          <svg className={styles.icon}>
            <use href="/img/sprite.svg#cross" />
          </svg>
        </button>
      </div>
      <div className={styles.actions}>
        <button>
          <svg>
            <use href="/img/sprite.svg#minus" />
          </svg>
        </button>
        <span>1</span>
        <button>
          <svg>
            <use href="/img/sprite.svg#plus" />
          </svg>
        </button>
        <span className={styles.price}>$ 650</span>
      </div>
    </div>
  </div>
);
