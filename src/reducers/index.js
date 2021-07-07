import formVisibleReducer from './form-visible-reducer';
import ticketListReducer from './ticket-list-reducer';
import {combineReducers} from 'redux';

// const store = createStore(rootReducer);

const rootReducer = combineReducers({
    formVisibleOnPage: formVisibleReducer,
    masterTicketList: ticketListReducer
});

export default rootReducer;