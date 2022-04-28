// import './CreateUser.css';
import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './CreateUser.module.css';

const CreateUser = (props) => {
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');

  const createUserHandler = (event) => {
    event.preventDefault();

    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      return;
    }

    if (+inputAge < 1) {
      return;
    }

    // нам нужно передавать эти значения в компонент App при пом пропс
    // console.log(inputName, inputAge);
    props.onCreateUser(inputName, inputAge);

    // сброс инпута
    setInputName('');
    setInputAge('');
  };

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setInputAge(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={createUserHandler}>
        <label htmlFor='name'>Имя</label>
        <input
          id='name'
          type='text'
          onChange={nameChangeHandler}
          value={inputName}
        />
        <label htmlFor='age'>Возраст</label>
        <input
          id='age'
          type='number'
          onChange={ageChangeHandler}
          value={inputAge}
        />
        {/* <button type='submit'>Добавить пользователя</button> */}
        <Button type='submit'>Добавить пользователя</Button>
      </form>
    </Card>
  );
};

export default CreateUser;
