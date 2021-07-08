import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import Moment from 'moment';

function NewTicketForm(props) {

    function handleNewTicketFormSubmission(event) {
        event.preventDefault();
        props.onNewTicketCreation({user1: event.target.user1.value, user2: event.target.user2.value, location: event.target.location.value, issue: event.target.issue.value, id: v4(), timeOpen: new Moment(), formattedWaitTime: new Moment().fromNow(true)}); 
    }

    NewTicketForm.propTypes = {
        onNewTicketCreation: PropTypes.func
    };

    return (
        <React.Fragment>
            <ReusableForm 
                formSubmissionHandler={handleNewTicketFormSubmission}
                buttonText="Help!" />
        </React.Fragment>
    );
}

export default NewTicketForm;