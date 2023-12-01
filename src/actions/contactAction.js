import * as actionTypes from './actionType';
export const addContact = (newContact) => ({
    type: actionTypes.ADD_CONTACT,
    payload: newContact,
  });
  
  export const deleteContact = (contactId) => ({
    type: actionTypes.DELETE_CONTACT,
    payload: contactId,
  });
  
  export const editContact = (updatedContact) => ({
    type: actionTypes.EDIT_CONTACT,
    payload: updatedContact,
  });
