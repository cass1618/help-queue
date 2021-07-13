import React from "react";
import PropTypes from "prop-types";
import Ticket from "./Ticket";

function TicketList(props) {

    return (
        <React.Fragment>
        <hr/>
        {Object.values(props.ticketList).map((ticket) => 
            <Ticket
            whenTicketClicked={props.onTicketSelection}
            user1 = {ticket.user1}
            user2 = {ticket.user2}
            location={ticket.location}
            issue={ticket.issue}
            formattedWaitTime={ticket.formattedWaitTime}
            id={ticket.id}
            key={ticket.id}/>
            
        )}
        </React.Fragment>
    );
}

TicketList.propTypes = {
    ticketList: PropTypes.object,
    onTicketSelection: PropTypes.func
};

export default TicketList;