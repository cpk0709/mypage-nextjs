type Props = {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const defaultPage = ({value , onIncrement, onDecrement}: Props) => {
  console.log(value);
  console.log('sss',onIncrement);
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

export default defaultPage;
