import { combineReducers } from 'redux';
import basketReducer, {initialState as basket} from './basketReducer';
import currencyReducer, {initialState as currency} from './currencyReducer';
import orderReducer, {initialState as order} from './orderReducer';

export const initialState = {basket, currency, order};

export default combineReducers({
    basket: basketReducer,
    currency: currencyReducer,
    order: orderReducer,
});
