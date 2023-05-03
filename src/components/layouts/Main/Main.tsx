import { ReactNode } from 'react';
import { Header } from '../../parts/Header';
import { Sidebar } from '../../parts/Sidebar';
import styles from './main.module.scss';

interface MainProps {
  children?: ReactNode;
}

export const Main = ({ children }: MainProps) => (
  <>
    <Header />
    <div className={styles.wrapper}>
      <main className={styles.main}>{children}</main>
      <Sidebar />
    </div>
  </>
);
