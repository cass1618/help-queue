import React from "react";
import { v4 } from "uuid";

function NewTicketForm() {
    function handleNewTicketFormSubmission(event) {
        event.preventDefault();
        console.log(event.target.user1.value); //grabs the values from submit event
        console.log(event.target.user2.value);
        console.log(event.target.location.value);
        console.log(event.target.issue.value);
    }

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