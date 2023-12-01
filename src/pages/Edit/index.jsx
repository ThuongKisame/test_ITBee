import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editContact } from "../../actions/contactAction";
import { routes } from "../../routes";

function Edit() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedContact = useSelector((state) => {
    const contacts = state.contacts;

    const contact = contacts.find((contact) => contact.id === parseInt(id));

    return contact; 
  });

  useEffect(() => {
    if (!selectedContact) {
      navigate(routes.home);
    }
  }, [selectedContact, navigate]);

  const [newContact, setNewContact] = useState({
    name: selectedContact?.name || "",
    email: selectedContact?.email || "",
    phone: selectedContact?.phone || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...newContact, id: id });
    dispatch(editContact({ ...newContact, id: parseInt(id) }));
  };
  return (
    <div className="edit">
      <div className="container text">
        <form className="edit-form" onSubmit={handleSubmit}>
          <div>
            <label>
              Name:
              <input
                className="input-text"
                type="text"
                name="name"
                value={newContact.name}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                className="input-text"
                type="text"
                name="email"
                value={newContact.email}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div>
            <label>
              Phone:
              <input
                className="input-text"
                type="text"
                name="phone"
                value={newContact.phone}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="flex-center">
            <button className="medium-btn save-btn" type="submit">
              Save
            </button>
            <Link className="medium-btn cancel-btn" to={routes.home}>
              Cancel
            </Link>
          </div>
        </form>{" "}
      </div>
    </div>
  );
}

export default Edit;
