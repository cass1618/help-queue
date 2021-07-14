import React from "react";
import PropTypes from "prop-types";
import Ticket from "./Ticket";
import {useSelector} from "react-redux";
import {useFirestoreConnect, isLoaded} from "react-redux-firebase";

function TicketList(props) {

    useFirestoreConnect([
        {collection: "tickets"}
    ]);

    const tickets = useSelector(state => state.firestore.ordered.tickets);

    if(isLoaded(tickets)) {
        return (
            <React.Fragment>
            <hr/>
                {tickets.map((ticket) => {

                    return <Ticket
                    whenTicketClicked={props.onTicketSelection}
                    user1 = {ticket.user1}
                    user2 = {ticket.user2}
                    location={ticket.location}
                    issue={ticket.issue}
                    formattedWaitTime={ticket.formattedWaitTime}
                    id={ticket.id}
                    key={ticket.id}/>
                    
                })}
        </React.Fragment>
        )
    } else {
        return(
            <React.Fragment>
                <h3>Loading...</h3>
            </React.Fragment>
        )
    }
}

TicketList.propTypes = {
    // ticketList: PropTypes.object,
    onTicketSelection: PropTypes.func
};

export default TicketList;