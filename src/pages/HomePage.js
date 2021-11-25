import { NavLink } from 'react-router-dom';
import ContactsIcon from '@mui/icons-material/Contacts';
import style from './HomePage.module.css';

function Home() {
  return (
    <div>
      <p className={style.text}>
        <ContactsIcon fontSize="large" />
        <br />
        <NavLink to="/login" className={style.link}>
          Log in
        </NavLink>{' '}
        to open the phone book or <br />
        <NavLink to="/register" className={style.link}>
          register a new profile
        </NavLink>{' '}
        to create a new phone book
      </p>
    </div>
  );
}

export default Home;
