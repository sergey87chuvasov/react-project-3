// import './CreateUser.css';
import React, { useState, useRef, Fragment } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './CreateUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const CreateUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [inputName, setInputName] = useState('');
  // const [inputAge, setInputAge] = useState('');
  const [error, setError] = useState();

  const createUserHandler = (event) => {
    event.preventDefault();

    const inputUserName = nameInputRef.current.value;
    const inputUserAge = ageInputRef.current.value;

    // console.log(nameInputRef.current.value);
    // console.log(ageInputRef.current.value);

    if (inputUserName.trim().length === 0 || inputUserAge.trim().length === 0) {
      setError({
        title: 'Некорректный ввод',
        message: 'Эти поля не могут быть пустыми',
      });
      return;
    }

    if (+inputUserAge < 1) {
      setError({
        title: 'Некорректный возраст',
        message: 'Возраст должен быть больше 0',
      });
      return;
    }

    // нам нужно передавать эти значения в компонент App при пом пропс
    // console.log(inputName, inputAge);
    props.onCreateUser(inputUserName, inputUserAge);

    // сброс для Ref
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';

    // сброс инпута
    // setInputName('');
    // setInputAge('');
  };

  // const nameChangeHandler = (event) => {
  //   setInputName(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setInputAge(event.target.value);
  // };

  // close error window
  const errorHandler = () => {
    setError(false);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          onCloseModal={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={createUserHandler}>
          <label htmlFor='name'>Имя</label>
          <input
            id='name'
            type='text'
            // onChange={nameChangeHandler}
            // value={inputName}
            ref={nameInputRef}
          />
          <label htmlFor='age'>Возраст</label>
          <input
            id='age'
            type='number'
            // onChange={ageChangeHandler}
            // value={inputAge}
            ref={ageInputRef}
          />
          {/* <button type='submit'>Добавить пользователя</button> */}
          <Button type='submit'>Добавить пользователя</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default CreateUser;
