import { combineReducers } from 'redux';
import basketReducer from './basketReducer';
import currencyReducer from './currencyReducer';
import orderReducer from './orderReducer';

export default combineReducers({
    basket: basketReducer,
    currency: currencyReducer,
    order: orderReducer,
});
