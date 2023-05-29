import { NavLink } from 'react-router-dom';
import css from '../App.module.css';

export const AuthNav = () => {
  return (
    <div className={css.nav}>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
};
