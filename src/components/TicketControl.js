import React from "react";
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';
import EditTicketForm from './EditTicketForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class TicketControl extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            formVisibleOnPage: false,
            // masterTicketList: [],
            selectedTicket: null,
            editing: false
        };
    };

    handleClick = () => {
        if (this.state.selectedTicket != null) {
            this.setState({
                formVisibleOnPage: false,
                selectedTicket: null,
                editing: false
        });
        } else {
            this.setState(prevState => ({
                formVisibleOnPage: !prevState.formVisibleOnPage,
            }));
        }
    }

    handleAddingNewTicketToList = (newTicket) => {
        // const newMasterTicketList = this.state.masterTicketList.concat(newTicket);
        const {dispatch} = this.props;
        const {id, user1, user2, location, issue} = newTicket;
        const action = {
            type: "ADD_TICKET",
            id: id,
            user1: user1,
            user2: user2,
            location: location,
            issue: issue
        }
        
        dispatch(action);

        this.setState({
            // masterTicketList: newMasterTicketList, 
            formVisibleOnPage: false})
    }

    handleChangingSelectTicket = (id) => {
        const selectedTicket = this.props.masterTicketList[id];
        this.setState({selectedTicket: selectedTicket});
    }


    handleDeletingTicket = (id) => {
        // const newMasterTicketList = this.state.masterTicketList.filter(ticket => ticket.id !== id);
        const {dispatch} = this.props;
        const action = {
            type: "DELETE_TICKET",
            id: id
        }

        dispatch(action);

        this.setState({
            // masterTicketList: newMasterTicketList,
            selectedTicket: null
        });
    }

    handleEditClick = () => {
        this.setState({editing: true});
    }

    handleEditingTicketInList = (ticketToEdit) => {
        // const editedMasterTicketList = this.state.masterTicketList
        // .filter(ticket => ticket.id !== this.state.selectedTicket.id)
        // .concat(ticketToEdit);
        const {dispatch} = this.props;
        const {id, user1, user2, location, issue} = ticketToEdit;
        const action = {
            type: "ADD_TICKET",
            id: id,
            user1: user1,
            user2: user2,
            location: location,
            issue: issue
        }

        dispatch(action);

        this.setState({
            // masterTicketList: editedMasterTicketList,
            editing: false,
            selectedTicket: null
        });
    }

    render() {
        let currentlyVisibleState = null;
        let buttonText = null;
        if(this.state.editing) {
            currentlyVisibleState = <EditTicketForm ticket = {this.state.selectedTicket} onEditTicket = {this.handleEditingTicketInList}/>
            buttonText = "Return to Ticket List";

        } else if (this.state.selectedTicket != null) {
            currentlyVisibleState = <TicketDetail ticket ={this.state.selectedTicket}
            onClickingDelete = {this.handleDeletingTicket} 
            onClickingEdit = {this.handleEditClick} />
            buttonText = "Return To Ticket List";

        } else if (this.state.formVisibleOnPage) { 
            currentlyVisibleState = <NewTicketForm onNewTicketCreation = {this.handleAddingNewTicketToList}/>;
            buttonText = "Return to Ticket List"; 
        } else {
            currentlyVisibleState = <TicketList ticketList={this.props.masterTicketList} 
            onTicketSelection = {this.handleChangingSelectTicket}/>;
            buttonText = "Add Ticket";
        }
        return (
            <React.Fragment>
                {currentlyVisibleState}
                <button onClick={this.handleClick}>{buttonText}</button>
            </React.Fragment>
        );
    }
}

TicketControl.propTypes = {
    masterTicketList: PropTypes.object
};

const mapStateToProps = state => {
    return {
        masterTicketList: state
    }
}

TicketControl = connect(mapStateToProps)(TicketControl);

export default TicketControl;