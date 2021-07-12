import React from "react";
// import { v4 } from "uuid";
// import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
// import Moment from 'moment';
import { useFirestore } from 'react-redux-firebase'

function NewTicketForm(props) {
    const firestore = useFirestore();

    function addTicketToFirestore(event) {
        event.preventDefault();
        props.onNewTicketCreation();
        return firestore.collection('tickets').add(
            {
                user1: event.target.user1.value,
                user2: event.target.user2.value,
                location: event.target.location.value,
                issue: event.target.issue.value,
                timeOpen: firestore.FieldValue.serverTimestamp()
            }
        );
    }

    // NewTicketForm.propTypes = {
    //     onNewTicketCreation: PropTypes.func
    // };

    return (
        <React.Fragment>
            <ReusableForm
                formSubmissionHandler={addTicketToFirestore}
                buttonText="Help!" />
        </React.Fragment>
    );
}

export default NewTicketForm;