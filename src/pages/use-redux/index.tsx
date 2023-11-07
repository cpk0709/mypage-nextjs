import { useSelector, useDispatch } from 'react-redux';

const UseReduxPage = () => {
  const value = useSelector((state: {counter: number}) => state.counter);
  const todoValue = useSelector((state: {todos: string[]}) => state.todos);
  console.log('todoValue :::: ',todoValue);
  const dispatch = useDispatch();

  const onIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const onDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const changeTodo = (e) => {
    dispatch({ type: 'ADD_TODO', text: e.target.value });
  }

  return (
    <section>
      <h1>Clicked : {value} times</h1>
      <button style={{backgroundColor:'#fff',padding:'10px',marginInline:'5px'}} onClick={onIncrement}>
        +
      </button>
      <button style={{backgroundColor:'#fff',padding:'10px',marginInline:'5px'}} onClick={onDecrement}>
        -
      </button>
      <input value={todoValue} onChange={changeTodo} style={{color:'#fff'}}/>
    </section>
  );
};

export default UseReduxPage;
