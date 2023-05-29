import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import css from './ContactItem.module.css';
import { Button } from '@chakra-ui/react';
export const ContactItem = ({ name, number, contactId }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch(deleteContact(contactId));
  };
  return (
    <li className={css.item}>
      <span className={css.item}>{name}: </span>
      <a href={`tel:${number}`} className={css.number}>
        {number}
      </a>
      <Button
        className={css.btn}
        colorScheme="blue"
        variant="solid"
        type="button"
        onClick={() => onDeleteContact()}
      >
        Delete
      </Button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
};
