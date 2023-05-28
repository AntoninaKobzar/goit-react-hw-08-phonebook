import css from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div className={css.user}>
      <a href="/" className={css.email}>
        mango@mail.com
      </a>
      <button type="submit" className={css.logout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
