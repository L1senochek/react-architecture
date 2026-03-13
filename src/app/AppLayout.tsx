import { NavLink, Outlet } from 'react-router-dom';

import styles from './AppLayout.module.css';

export function AppLayout() {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.logo}>React Architecture</div>
          <nav className={styles.nav}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                [
                  styles.navLink,
                  isActive ? styles.active : '',
                ]
                  .filter(Boolean)
                  .join(' ')
              }
              end
            >
              Мои задачи
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                [
                  styles.navLink,
                  isActive ? styles.active : '',
                ]
                  .filter(Boolean)
                  .join(' ')
              }
            >
              Регистрация
            </NavLink>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

