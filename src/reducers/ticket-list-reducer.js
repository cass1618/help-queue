import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
    const {user1, user2, location, issue, id, formattedWaitTime, timeOpen} = action;
    switch(action.type) {
        
        case c.ADD_TICKET:
            return Object.assign({}, state, {
                [id]: {
                    user1: user1,
                    user2: user2,
                    location: location,
                    issue: issue,
                    timeOpen: timeOpen,
                    id: id,
                    formattedWaitTime: formattedWaitTime
                    }
                });

        case c.DELETE_TICKET:
            let newState = {...state};
            delete newState[id];
            return newState;

        case c.UPDATE_TIME:
            const newTicket = Object.assign({}, state[id], {formattedWaitTime});
            const updatedState = Object.assign({}, state, {
                [id]: newTicket
            });
            return updatedState;

        default: 
            return state;
    }
};