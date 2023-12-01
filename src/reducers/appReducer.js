import * as actionTypes from "../actions/actionType";

const initialState = {
  contacts: [
    {
      id: 1,
      name: "Nhật Thương",
      email: "thuong@gmail.com",
      phone: "111-456-7890",
    },
    { id: 2, name: "Minh Tri", email: "tri@gmail.com", phone: "987-654-3210" },
  ],
  darkMode: true,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case actionTypes.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
      case actionTypes.EDIT_CONTACT:
        return {
          ...state,
          contacts: state.contacts.map((contact) =>
            contact.id === action.payload.id ? action.payload : contact
          ),
        };
    case actionTypes.CHANGE_DARK_MODE:
      return {
        ...state,
        darkMode: action.payload, 
      };
    default:
      return state;
  }
};

export default appReducer;
