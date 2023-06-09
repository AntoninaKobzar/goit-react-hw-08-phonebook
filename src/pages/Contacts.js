import { useEffect } from 'react';
import { getIsLoading, getError } from 'redux/contacts/contactsSelectors';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import css from '../components/App.module.css';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { useDispatch, useSelector } from 'react-redux';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>{'Loading...'}</b>}
      <ContactList />
    </div>
  );
};

export default Contacts;
