import ticketListReducer from "../../reducers/ticket-list-reducer";

describe("ticketListReducer", () => {
    test("Should return default state if there is no action type passed into the reducer", () => {
        expect(ticketListReducer({}, {type: null})).toEqual({});
    });
    //expect(current state, action to be applied - action's type is stored inside object)
});