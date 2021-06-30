import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewTicketForm(props) {
    function handleNewTicketFormSubmission(event) {
        event.preventDefault();
        props.onNewTicketCreation({user1: event.target.user1.value, user2: event.target.user2.value, location: event.target.location.value, issue: event.target.issue.value, id: v4}); // props instead of this because it's function rather than class component!
        //onNewTicketCreation is a callback function! defined in TicketControl
    }

    NewTicketForm.propTypes = {
        onNewTicketCreation: PropTypes.func
    };

    return (
        <React.Fragment>
            <form onSubmit={handleNewTicketFormSubmission}>
                <input
                    type="text"
                    name="user1"
                    placeholder="Name of one person"/>
                <input
                    type="text"
                    name="user2"
                    placeholder="Name of additional person"/>    
                <input
                    type="text"
                    name="location"
                    placeholder="Location"/>
                <textarea
                    name="issue"
                    placeholder="What seems to be the problem?"/>
                <button type="submit">KAZAH!</button>
            </form>
        </React.Fragment>
    );
}

export default NewTicketForm;