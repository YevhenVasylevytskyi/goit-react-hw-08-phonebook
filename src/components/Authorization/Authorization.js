import { NavLink } from 'react-router-dom';
import style from './Authorization.module.css';

function Authorization() {
  return (
    <div className={style.container}>
      <NavLink to="/login" className={style.link} activeClassName={style.current}>
        <span className={style.text}>Log in</span>
      </NavLink>
      <NavLink to="/register" className={style.link} activeClassName={style.current}>
        <span className={style.text}>Sign up</span>
      </NavLink>
    </div>
  );
}

export default Authorization;
