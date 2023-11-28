/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
enum ActionType {
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
}

interface Action {
  type: ActionType;
  text: string;
}

const todo = (state = ['default value'], action: Action) => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (action.type) {
    case 'ADD_TODO':
      console.log(state);
      console.log(action.text);

      return [...state, action.text];
    default:
      return state;
  }
};

export default todo;
