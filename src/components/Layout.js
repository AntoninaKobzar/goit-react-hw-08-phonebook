import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import UserMenu from './UserMenu';
import Loader from './Loader';
// import css from './Layout.module.css';

const Layout = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/user">{<UserMenu />}</NavLink>
        </li>
      </ul>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
export default Layout;
