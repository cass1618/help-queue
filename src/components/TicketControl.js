import React from "react";
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';
import EditTicketForm from './EditTicketForm';

class TicketControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            masterTicketList: [],
            selectedTicket: null,
            editing: false
        };
    }

    handleClick = () => {
        console.log("CLICK");
        if (this.state.selectedTicket != null) {
            console.log("IF");
            this.setState({
                formVisibleOnPage: false,
                selectedTicket: null,
                editing: false
        });
        } else {
            console.log("Else");
            this.setState(prevState => ({
                formVisibleOnPage: !prevState.formVisibleOnPage,
            }));
        }
    }


    handleAddingNewTicketToList = (newTicket) => {
        const newMasterTicketList = this.state.masterTicketList.concat(newTicket);
        this.setState({
            masterTicketList: newMasterTicketList, 
            formVisibleOnPage: false})
    }

    handleChangingSelectTicket = (id) => {
        console.log("CHANGE SELECTED")
        const selectedTicket = this.state.masterTicketList.filter(ticket => ticket.id === id)[0];
        console.log(selectedTicket);
        this.setState({selectedTicket: selectedTicket});
    }


    handleDeletingTicket = (id) => {
        const newMasterTicketList = this.state.masterTicketList.filter(ticket => ticket.id !== id);
        this.setState({
            masterTicketList: newMasterTicketList,
            selectedTicket: null
        });
    }

    handleEditClick = () => {
        this.setState({editing: true});
    }

    handleEditingTicketInList = (ticketToEdit) => {
        console.log("TICKET DETAIL")
        const editedMasterTicketList = this.state.masterTicketList
        .filter(ticket => ticket.id !== this.state.selectedTicket.id)
        .concat(ticketToEdit);
        this.setState({
            masterTicketList: editedMasterTicketList,
            editing: false,
            selectedTicket: null
        });
    }

    render() {
        console.log("RENDER")
        let currentlyVisibleState = null;
        let buttonText = null;
        console.log("CVS="+currentlyVisibleState)
        if(this.state.editing) {
            console.log("EDITING")
            currentlyVisibleState = <EditTicketForm ticket = {this.state.selectedTicket} onEditTicket = {this.handleEditingTicketInList}/>
            buttonText = "Return to Ticket List";

        } else if (this.state.selectTicket != null) {
            console.log("TICKET DETAIL")
            currentlyVisibleState = <TicketDetail ticket ={this.state.selectedTicket}
            onClickingDelete = {this.handleDeletingTicket} 
            onClickingEdit = {this.handleEditClick} />
            buttonText = "Return To Ticket List";

        } else if (this.state.formVisibleOnPage) { 
            console.log("NEW TICKET")
            currentlyVisibleState = <NewTicketForm onNewTicketCreation = {this.handleAddingNewTicketToList}/>;
            buttonText = "Return to Ticket List"; 
        } else {
            console.log("change selected else")
            currentlyVisibleState = <TicketList ticketList={this.state.masterTicketList} onTicketSelection = {this.handleChangingSelectTicket}/>;
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

export default TicketControl;