import React from "react";

function Ticket() {
    const user1 = "Jason";
    const user2 = "Elanor"

    return (
        <React.Fragment>
            <h3>3a</h3>
            <h3>{user1} and {user2}</h3>
            <p><em>We don't belong here!!</em></p>
            <hr/>
        </React.Fragment>
    );
}

export default Ticket;