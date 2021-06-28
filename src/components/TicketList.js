import React from "react";
import Ticket from "./Ticket";

const masterTicketList = [
    {
        location: "3A",
        user1: "Jason",
        user2: "Elanor",
        issue: "We don't belong here!!"
    },
    {
        location: "4B",
        user1: "Tahani",
        user2: "Chidi",
        issue: "This is the bad place!"
    },
    {
        location: "5M",
        user1: "Michael",
        user2: "Janet",
        issue: "Jeremy Beremy"
    }
]

function TicketList() {
    return (
        <React.Fragment>
            <hr/>
            {masterTicketList.map((ticket, index) => 
                <Ticket user1 = {ticket.user1}
                    user2 = {ticket.user2}
                    location = {ticket.location}
                    issue = {ticket.issue}
                    key = {index}/>
            )}
        </React.Fragment>
    );
}

export default TicketList;