import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import {useFirestore} from 'react-redux-firebase'

function EditTicketForm(props) {
    const firestore = useFirestore();
    const {ticket} = props;

    function handleEditTicketFormSubmission(event) {
      event.preventDefault();
      props.onEditTicket();
      const propertiesToUpdate = {
        user1: event.target.user1.value,
        user2: event.target.user2.value,
        location: event.target.location.value,
        issue: event.target.issue.value,
        id: ticket.id
      }

      return firestore.update({collection: "tickets", doc: ticket.id }, propertiesToUpdate)
    }

return (
    <React.Fragment>
        <ReusableForm
            formSubmissionHandler={handleEditTicketFormSubmission}
            buttonText="Help!" />
    </React.Fragment>
);
}

EditTicketForm.propTypes = {
  onEditTicket: PropTypes.func
};

export default EditTicketForm;