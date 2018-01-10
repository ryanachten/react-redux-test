import { createStore } from 'redux';

const store = createStore( (state = { count: 0 }, action ) => {
    switch (action.type) {
      case 'INCREMENT':
      return{
        count: typeof action.incrementBy === 'number' ?
          state.count + action.incrementBy : +1
      }
      case 'DECREMENT':
        return {
          count: typeof action.decrementBy === 'number' ?
            state.count - action.decrementBy : -1
        };
      case 'SET':
        return {
          count: action.count
        };
      case 'RESET':
        return {
          count: 0
        };
      default:
        return state;
    }
});

const unsubscribe = store.subscribe( () => {
  console.log(store.getState());
});

store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'SET',
  count: 101
});

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
});

unsubscribe();
