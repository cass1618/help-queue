import formVisibleReducer from './form-visible-reducer';
import ticketListReducer from './ticket-list-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

// const store = createStore(rootReducer);

const rootReducer = combineReducers({
    formVisibleOnPage: formVisibleReducer,
    masterTicketList: ticketListReducer,
    firestore: firestoreReducer
});

export default rootReducer;