import React from "react";
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';
import EditTicketForm from './EditTicketForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

class TicketControl extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selectedTicket: null,
            editing: false
        };
    };

    componentDidMount() {
        this.waitTimeUpdateTimer = setInterval(() =>
            this.updateTicketElapsedWaitTime(),
            60000
        );
    }

    componentDidUpdate() {
        console.log("component updated!");
    }
    
    componentWillUnmount(){
        clearInterval(this.waitTimeUpdateTimer);
    }
    
    updateTicketElapsedWaitTime = () => {
        const { dispatch } = this.props;
        Object.values(this.props.masterTicketList).forEach(ticket => {
            const newFormattedWaitTime = ticket.timeOpen.fromNow(true);
            const action = a.updateTime(ticket.id, newFormattedWaitTime);
            dispatch(action);
        });
    }

    handleClick = () => {
        if (this.state.selectedTicket != null) {
            this.setState({
                selectedTicket: null,
                editing: false
        });
        } else {
            const {dispatch} = this.props;
            const action = a.toggleForm();
            dispatch(action);
        }
    }

    handleAddingNewTicketToList = (newTicket) => {
        const {dispatch} = this.props;
        const action = a.addTicket(newTicket);
        dispatch(action);
        const action2 = a.toggleForm();
        dispatch(action2);
    }

    handleChangingSelectedTicket = (id) => {
        console.log("handle changing selected")
        const selectedTicket = this.props.masterTicketList[id];
        console.log("change ticket to: "+selectedTicket);
        this.setState({selectedTicket: selectedTicket});
    }

    handleDeletingTicket = (id) => {
        const {dispatch} = this.props;
        const action = a.deleteTicket(id);

        dispatch(action);

        this.setState({
            selectedTicket: null
        });
    }

    handleEditClick = () => {
        this.setState({editing: true});
    }

    handleEditingTicketInList = (ticketToEdit) => {
        const {dispatch} = this.props;
        const action = a.addTicket(ticketToEdit);

        dispatch(action);

        this.setState({
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
            console.log("else if 2");
            currentlyVisibleState = <TicketDetail ticket ={this.state.selectedTicket}
            onClickingDelete = {this.handleDeletingTicket} 
            onClickingEdit = {this.handleEditClick} />
            buttonText = "Return To Ticket List";
 
        } else if (this.props.formVisibleOnPage) {
            currentlyVisibleState = <NewTicketForm onNewTicketCreation = {this.handleAddingNewTicketToList}/>;
            buttonText = "Return to Ticket List"; 
        } else {
            currentlyVisibleState = 
                <TicketList
                    ticketList={this.props.masterTicketList}
                    onTicketSelection={this.handleChangingSelectedTicket}
                />
            buttonText = "Add Ticket";
        }
        return (
            <React.Fragment>
                {currentlyVisibleState}
                <button onClick={this.handleClick}>
                {buttonText}</button>
            </React.Fragment>
        );
    }
}

TicketControl.propTypes = {
    masterTicketList: PropTypes.object,
    formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
    return {
        masterTicketList: state.masterTicketList,
        formVisibleOnPage: state.formVisibleOnPage
    }
}

TicketControl = connect(mapStateToProps)(TicketControl);

export default TicketControl;