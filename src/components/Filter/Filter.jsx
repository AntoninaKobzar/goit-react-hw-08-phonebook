import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/filterSlice';
import css from './Filter.module.css';
import { Input } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();

  const onFilterChange = e => dispatch(setFilter(e.currentTarget.value));
  return (
    <div className={css.container}>
      <label>
        <p className={css.title}>Find contacts by name</p>
        <Input
          className={css.input}
          type="text"
          name="filter"
          onChange={onFilterChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></Input>
      </label>
    </div>
  );
};
