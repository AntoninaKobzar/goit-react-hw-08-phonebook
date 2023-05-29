import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import { Button } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label>
        <Input
          className={css.input}
          type="email"
          name="email"
          placeholder="Email"
        />
      </label>
      <label>
        <Input
          className={css.input}
          type="password"
          name="password"
          placeholder="Password"
        />
      </label>
      <Button
        className={css.btn}
        colorScheme="blue"
        variant="solid"
        type="submit"
      >
        Log In
      </Button>
    </form>
  );
};
