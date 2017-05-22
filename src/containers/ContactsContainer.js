import { connect } from "react-redux";
import Contacts from "../components/Contacts";

function mapStateToProps(state) {
  // state.searchQuery from a reducer
  // filter fucntion below runs through entire array
  // const filteredContacts = state.contacts.filter((contact) => {
  //   return contact.firstName.indexOf(state.searchQuery) !== -1;
  // });
  return {
    contacts: state.contacts
  //  contacts: filteredContacts
  };
}

export default connect(mapStateToProps)(Contacts);
