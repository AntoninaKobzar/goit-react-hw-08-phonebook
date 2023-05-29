import { LoginForm } from 'components/LoginForm/LoginForm';
import css from '../components/LoginForm/LoginForm.module.css';
export default function Login() {
  return (
    <div>
      <h1 className={css.title}>Login</h1>
      <LoginForm />
    </div>
  );
}
