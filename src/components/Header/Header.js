import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Authorization from '../Authorization';
import UserMenu from '../UserMenu';
import { authSelectors } from '../../redux/auth';
import style from './Header.module.css';

function Header({ children }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={style.header}>
      {children}
      <NavLink to="/contacts" className={style.link} activeClassName={style.current}>
        <span className={style.text}>Contacts</span>
      </NavLink>
      {isLoggedIn ? <UserMenu name="Alex" /> : <Authorization />}
    </header>
  );
}

export default Header;
