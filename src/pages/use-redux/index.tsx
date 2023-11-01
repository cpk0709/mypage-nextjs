import { useSelector, useDispatch } from 'react-redux';

const UseReduxPage = () => {
  const value = useSelector((state: {counter: number}) => state.counter);
  const dispatch = useDispatch();

  const onIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const onDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <section>
      <h1>Clicked : {value} times</h1>
      <button style={{backgroundColor:'#fff',padding:'10px',marginInline:'5px'}} onClick={onIncrement}>
        +
      </button>
      <button style={{backgroundColor:'#fff',padding:'10px',marginInline:'5px'}} onClick={onDecrement}>
        -
      </button>
    </section>
  );
};

export default UseReduxPage;
