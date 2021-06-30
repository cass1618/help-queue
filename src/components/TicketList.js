import React from "react";
import Ticket from "./Ticket";
import PropTypes from "propTypes";

function TicketList() {
    return (
        <React.Fragment>
            <hr/>
            {props.ticketList.map((ticket, index) => 
                <Ticket user1 = {ticket.user1}
                    user2 = {ticket.user2}
                    location = {ticket.location}
                    issue = {ticket.issue}
                    key = {index}/>
            )}
        </React.Fragment>
    );
}

TicketList.propTypes = {
    ticketList: PropTypes.array
};

export default TicketList;