import { ReactNode, useState } from 'react';
import { Header } from '../../parts/Header';
import { Sidebar } from '../../parts/Sidebar';
import styles from './main.module.scss';

interface MainProps {
  children?: ReactNode;
}

export const Main = ({ children }: MainProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebarOpen} />
      <div className={styles.wrapper}>
        <main className={styles.main}>{children}</main>
        <Sidebar isOpen={isSidebarOpen} />
      </div>
    </>
  );
};
