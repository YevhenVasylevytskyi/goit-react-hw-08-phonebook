import { NavLink } from 'react-router-dom';
import style from './HomePage.module.css';

function Home() {
  return (
    <div>
      <p className={style.text}>        
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
