import css from './App.module.css';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllContacts } from 'redux/fetchContacts';

export function App() {
const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchAllContacts())
    }, [dispatch])
  
  return (
    <div>
      <div className={css.wrapper}>
        <h1 className={css.titleForm}>Phonebook</h1>
      <PhonebookForm />
      </div>
      <h2 className={css.titleContacts}>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
}
