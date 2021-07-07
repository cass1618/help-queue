import ticketListReducer from "../../reducers/ticket-list-reducer";
describe("ticketListReducer", () => {

    let action;
    const ticketData = {
        user1: "Elanor",
        user2: "Jason",
        location: "The Good Place",
        issue: "We don't belong here!",
        id: 1
    };
    test("Should return default state if there is no action type passed into the reducer", () => {
        expect(ticketListReducer({}, {type: null})).toEqual({});
    });
    //expect(current state, action to be applied - action's type is stored inside object)

    test("Should successfully add new ticket data to masterTicketList", () => {
        const {user1, user2, location, issue, id} = ticketData;
        action = {
            type: "ADD_TICKET",
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
});