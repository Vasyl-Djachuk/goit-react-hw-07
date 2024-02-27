import css from './ContactList.module.css';
import { Contact } from './Contact/Contact';
import { useSelector } from 'react-redux';
import { selectVisibleContact } from '../../redux/selectors';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

export const ContactList = () => {
  // const filters = useSelector(getFilter);
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContact);

  // let filtredContacts = [];
  // if (contacts.length > 0)
  //   filtredContacts = contacts.filter(
  //     contact =>
  //       contact.name
  //         .toLowerCase()
  //         .split(` `)
  //         .filter(n => n.startsWith(filters.filter.toLowerCase())).length > 0
  //   );

  const handleDeleteClick = e => {
    dispatch(deleteContact(e.target.dataset.id));
  };

  return (
    <ul className={css.list}>
      {contacts.length > 0 &&
        contacts.map(({ id, name: names, phone }) => {
          return (
            <li className={css.item} key={id}>
              <Contact
                id={id}
                names={names}
                number={phone}
                handleDeleteClick={handleDeleteClick}
              />
            </li>
          );
        })}
    </ul>
  );
};
