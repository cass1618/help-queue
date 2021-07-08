import * as c from './ActionTypes';

export const deleteTicket = id => ({
    type: c.DELETE_TICKET,
    id
});

export const toggleForm = () => ({
type: c.TOGGLE_FORM
});

export const addTicket = (ticket) => {
    const { user1, user2, location, issue, id ,formattedWaitTime, timeOpen } = ticket;
    return {
        type: c.ADD_TICKET,
        user1: user1,
        user2: user2,
        location: location,
        issue: issue,
        id: id,
        formattedWaitTime,
        timeOpen: timeOpen
    }
}

export const updateTime = (id, formattedWaitTime) => ({
    type: c.UPDATE_TIME,
    id: id,
    formattedWaitTime: formattedWaitTime
});