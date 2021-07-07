import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
    return (
        <React.Fragment>
            <form onSubmit={props.formSubmissionHandler}>

                <input
                    type='text'
                    name='user1'
                    placeholder='Name' />

                <input
                    type='text'
                    name='user2'
                    placeholder='Name' />

                <input
                    type='text'
                    name='location'
                    placeholder='Location' />

                <textarea
                    name='issue'
                    placeholder='Describe your issue.' />

                <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;