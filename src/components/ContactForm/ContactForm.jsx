import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import { getContacts } from 'redux/contacts/contactsSelectors';
import Notiflix from 'notiflix';
import { Button } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onFormSubmit = e => {
    e.preventDefault();
    const inputName = e.currentTarget.name.value;
    const inputNumber = e.currentTarget.number.value;
    const data = {
      id: nanoid(),
      name: inputName,
      number: inputNumber,
    };
    const normalizedFilter = inputName.toLowerCase();
    const stateNameArray = contacts.map(({ name }) => name.toLowerCase());
    !stateNameArray.includes(normalizedFilter)
      ? dispatch(addContact(data))
      : Notiflix.Notify.failure(`${data.name} is already in contacts.`);
    e.currentTarget.reset();
  };

  return (
    <form className={css.form} onSubmit={onFormSubmit}>
      <label>
        <Input
          className={css.input}
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. 
                        For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <Input
          className={css.input}
          type="tel"
          name="number"
          placeholder="Number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Button
        className={css.btn}
        colorScheme="blue"
        variant="solid"
        type="submit"
      >
        Add contact
      </Button>
    </form>
  );
};
