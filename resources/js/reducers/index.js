import { combineReducers } from 'redux';
import basketReducer from './basketReducer';
import currencyReducer from './currencyReducer';
import zoneReducer from './zoneReducer';

export default combineReducers({
    basket: basketReducer,
    currency: currencyReducer,
    zone: zoneReducer,
});
