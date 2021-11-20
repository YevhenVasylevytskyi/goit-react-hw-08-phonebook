import React from 'react';
import style from './HomePage.module.css';

function HomePage() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>
        Приветственная страница нашего сервиса{' '}
        <span role="img" aria-label="Иконка приветствия">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
}

export default HomePage;
