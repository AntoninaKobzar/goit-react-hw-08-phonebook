import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import css from '../components/RegisterForm/RegisterForm.module.css';
const Register = () => {
  return (
    <div>
      <h1 className={css.title}>Register</h1>

      <RegisterForm />
    </div>
  );
};

export default Register;
