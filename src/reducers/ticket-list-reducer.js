export default (state = {}, action) => {
    const {user1, user2, location, issue, id} = action;
    switch(action.type) {
        case "ADD_TICKET":
            return Object.assign({}, state, {
                [id]: {
                    user1: user1,
                    user2: user2,
                    location: location,
                    issue: issue,
                    id: id
                }
            });
            default: 
                return state;
    }
};