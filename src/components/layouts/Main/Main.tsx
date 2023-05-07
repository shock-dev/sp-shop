import { ReactNode, useEffect, useState } from 'react';
import { Header } from '../../parts/Header';
import { Sidebar } from '../../parts/Sidebar';
import styles from './main.module.scss';

interface MainProps {
  children?: ReactNode;
}

export const Main = ({ children }: MainProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('lock');
    } else {
      document.body.classList.remove('lock');
    }
  }, [isSidebarOpen]);

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
