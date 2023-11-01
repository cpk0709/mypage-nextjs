const counter = (state = 0, action:{type:string}) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 5;
    case 'DECREMENT':
      return state - 5;
      default:
        return state;
  }
}

export default counter;