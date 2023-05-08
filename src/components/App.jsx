import React, {Component} from "react";
import shortid from "shortid";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";

class App extends Component {
  state = {
    contacts: [    
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
  }

addName = (data) => {

  const addname = {
    ...data,
    id: shortid.generate(),
  };

   console.log(addname);
  this.setState(prevState => ({
    contacts: [addname, ...prevState.contacts],
  }));
}

changeFilter = e => {
  this.setState({filter: e.currentTarget.value});
}

deleteContact = contactId => {
  this.setState(prevState => ({
    contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  }));
};

render() {

  const normalizedFilter = this.state.filter.toLowerCase();

  const visibleContacts = this.state.contacts.filter(contact => 
    contact.name.toLowerCase().includes(normalizedFilter));

  return (
    <div >
       <h1>Phonebook</h1>

       <ContactForm  onSubmit={this.addName}/>

       <h2>Contacts</h2>
   
       <Filter value={this.state.filter} onChange={this.changeFilter}/>
       <ContactList contacts={visibleContacts}
        onDeletecontact={this.deleteContact}/>
    </div>
  );
};
}

export default App;

