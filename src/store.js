import { createStore } from "redux";

// reducer
export const counter = (state=0, action={}) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// create store
export const store = createStore(counter);

// dispatch() to dispatch action
// store.dispatch({type: 'INCREMENT'})
const render = () => {
  document.body.innerText = store.getState();
};


// subscribe() to subscribe to register callback
store.subscribe(render);
render();

document.addEventListener('click', () => {
  store.dispatch({type: 'INCREMENT'});
});
