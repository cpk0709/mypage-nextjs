import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const UseReduxPage = () => {
  const value = useSelector((state: {counter: number}) => state.counter);
  const todoValue = useSelector((state: {todos: string[]}) => state.todos);
  console.log('todoValue :::: ',todoValue);
  const dispatch = useDispatch();

  const [todoVal,setTodoVal] = useState<string>();

  useEffect(() => {
    setTodoVal(todoVal);
  },[todoValue])

  const onIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const onDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  // event 타입 지정 첫번째 방법
  const changeTodo: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    // dispatch({ type: 'ADD_TODO', text: e.target.value });
    setTodoVal(e.target.value);
  }

  // event 타입 지정 두번째 방법
  // const changeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setTodoVal(e.target.value);
  // }

  const addTodo:React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', text: todoVal });
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
      <form onSubmit={addTodo}>
        <input value={todoVal} onChange={changeTodo} style={{color:'#fff'}}/>
        <button  style={{color:'#fff'}} >add todo</button>
      </form>
    </section>
  );
};

export default UseReduxPage;
