// import './CreateUser.css';

const CreateUser = (props) => {
  const createUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={createUserHandler}>
      <label htmlFor='name'>Имя</label>
      <input id='name' type='text' />
      <label htmlFor='age'>Возраст</label>
      <input id='age' type='number' />
      <button type='submit'>Добавить пользователя</button>
    </form>
  );
};

export default CreateUser;
