import PropTypes from 'prop-types';
import style from './Filter.module.css';

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <label className={style.label}>
      Search
      <input
        className={style.input}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Enter the contact's name. Search is not case sensitive to the entered characters."
        required
        onChange={onChangeFilter}
        value={filter}
      ></input>
    </label>
  );
};

Filter.protoType = {
  filter: PropTypes.string,
  onChangeFilter: PropTypes.func,
};

export default Filter;

// import React from 'react';
// import shortid from 'shortid';
// import { useDispatch, useSelector } from 'react-redux';
// import contactsActions from '../../redux/contacts-1/contacts-actions';
// import style from './Filter.module.css';

// const filterInputId = shortid.generate();

// const Filter = () => {
//   const filter = useSelector(state => state.filter);

//   const dispatch = useDispatch();
//   const changeFilter = event =>
//     dispatch(contactsActions.changeFilter(event.target.value));

//   return (
//     <label className={style.label}>
//       Find contacts by name
//       <input
//         className={style.input}
//         type="text"
//         name="filter"
//         onChange={changeFilter}
//         value={filter}
//         id={filterInputId}
//       ></input>
//     </label>
//   );
// };

// export default Filter;
