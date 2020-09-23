import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer, {initialState as _initialState} from './reducers';

const pizzaState = 'pizzaState';
const storage = localStorage.getItem(pizzaState);
const initialState = storage ? JSON.parse(storage) : _initialState;

const store = createStore(rootReducer, initialState, composeWithDevTools());

store.subscribe(() => {
    localStorage.setItem(pizzaState, JSON.stringify(store.getState()))
})

export default store;
