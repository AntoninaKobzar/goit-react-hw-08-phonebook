import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';
import { Button } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        <Input
          className={css.input}
          type="text"
          name="name"
          placeholder="Username"
        />
      </label>
      <label className={css.label}>
        <Input
          className={css.input}
          type="email"
          name="email"
          placeholder="Email"
        />
      </label>
      <label className={css.label}>
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
        Register
      </Button>
    </form>
  );
};
