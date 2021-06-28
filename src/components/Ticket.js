import React from "react";
import PropTypes from "prop-types";

function Ticket(props) {
    
    return (
        <React.Fragment>
            <h3>{props.location}</h3>
            <h3>{props.user1} and {props.user2}</h3>
            <p><em>{props.issue}</em></p>
            <hr/>
        </React.Fragment>
    );
}

Ticket.propTypes = {
    user1: PropTypes.string.isRequired,
    user2: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    issue: PropTypes.string.isRequired
}

export default Ticket;