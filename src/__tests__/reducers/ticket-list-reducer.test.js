import ticketListReducer from "../../reducers/ticket-list-reducer";
import * as c from './../../actions/ActionTypes';
import Moment from 'moment';

describe("ticketListReducer", () => {

    let action;

    const ticketData = {
        user1: "Elanor",
        user2: "Jason",
        location: "The Good Place",
        issue: "We don't belong here!",
        timeOpen: 0,
        id: 1
    };

    const currentState = {
        1: {user1: "Cass",
        user2: "James",
        location: "House",
        issue: "Not built.",
        id: 1},
        2: {user1: "Chidi",
        user2: "Tahani",
        location: "The 'Good' Place",
        issue: "This is the bad place!",
        id: 2},
    }

    test("Should return default state if there is no action type passed into the reducer", () => {
        expect(ticketListReducer({}, {type: null})).toEqual({});
    });
    //expect(current state, action to be applied - action's type is stored inside object)

    test("Should successfully add new ticket data to masterTicketList", () => {
        const {user1, user2, location, issue, id} = ticketData;
        action = {
            type: c.ADD_TICKET,
            user1: user1,
            user2: user2,
            location: location,
            issue: issue,
            id: id
        }

        expect(ticketListReducer({}, action)).toEqual({
            [id] : {
                user1: user1,
                user2: user2,
                location: location,
                issue: issue,
                id: id
            }
        });
    });

    test("Should successfully delete a ticket from masterTicketList", () => {
        action = {
            type: c.DELETE_TICKET,
            id: 1
        };

        expect(ticketListReducer(currentState, action)).toEqual({
            2: {user1: "Chidi",
            user2: "Tahani",
            location: "The 'Good' Place",
            issue: "This is the bad place!",
            id: 2},
        });
    });

    test('Should add a formatted wait time to ticket entry', () => {
        const { user1, user2, location, issue, timeOpen, id } = ticketData;
            action = {
            type: c.UPDATE_TIME,
            formattedWaitTime: '4 minutes',
            id: id
            };
            expect(ticketListReducer({[id] : ticketData}, action)).toEqual({
            [id] : {
                user1: user1,
                user2: user2,
                location: location,
                issue: issue,
                timeOpen: timeOpen,
                id: id,
                formattedWaitTime: '4 minutes'
            }
        });
    });

    test('should successfully add a ticket to the ticket list that includes Moment-formatted wait times', () => {
        const { names, location, issue, timeOpen, id } = ticketData;
        action = {
            type: 'ADD_TICKET',
            names: names,
            location: location,
            issue: issue,
            timeOpen: timeOpen,
            id: id,
            formattedWaitTime: new Moment().fromNow(true)
        };
        expect(ticketListReducer({}, action)).toEqual({
            [id] : {
                names: names,
                location: location,
                issue: issue,
                timeOpen: timeOpen,
                id: id,
                formattedWaitTime: 'a few seconds'
            }
        });
    });   


});