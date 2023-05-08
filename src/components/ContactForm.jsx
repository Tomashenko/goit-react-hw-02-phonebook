import React, {Component} from "react";

class ContactForm extends Component {

state = {
    contacts: [],
    name: '',
    number: ''
}

handleSubmit = e => {
 e.preventDefault();

 this.props.onSubmit({
    name: this.state.name,
    number: this.state.number
});
};

handleChange = e => {
  console.log(e.currentTarget);
  console.log(e.currentTarget.name);
  console.log(e.currentTarget.value);

  const {name, value} = e.currentTarget;
  this.setState({ [name] : value});
}

render(){
    return(

    <form  onSubmit={this.handleSubmit}>

    <label>Name

     <input
     type="text"
     name="name"
     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
     required
     onChange={this.handleChange}
     value={this.state.name}
     /></label>

    <label>Number
     <input
     type="tel"
     name="number"
     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
     required
     onChange={this.handleChange}
     value={this.state.number}
     /></label>

     <button type='submit' 
     >Add contact</button> 

    </form>
     )};
}

export default ContactForm;