import React from 'react';
import style from './Navigation.module.css';
import Phonebook from 'pages/Phonebook';

function Navigation() {
  return (
    <ul className={style.list}>
      <li>Home</li>
      <li>Phonebook</li>
      <li>1</li>
      <li>2</li>
    </ul>
  );
}

export default Navigation;
