import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Loader from './Loader';
import UserMenu from './UserMenu';

import css from './Navigation/Navigation.module.css';

const Layout = () => {
  return (
    <div>
      <div className={css.header}>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>

        <ul className={css.list}>
          <li>
            <NavLink className={css.link} to="/register">
              Register
            </NavLink>
          </li>
          <li>
            <NavLink className={css.link} to="/login">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className={css.link} to="/contacts">
              Contacts
            </NavLink>
          </li>
        </ul>
        <UserMenu />
      </div>

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
export default Layout;
