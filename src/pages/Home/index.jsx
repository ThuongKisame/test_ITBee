import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../routes";
import { addContact, deleteContact } from "../../actions/contactAction";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import contactValidateSchema from "../../masterData/contactValidateSchema";

function Home() {
  const contacts = useSelector((state) => state.contacts);
  const [showContacts, setShowContacts] = useState(contacts);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const q = queryParams.get("q");
  console.log(q);

  useEffect(() => {
    const searchContacts = (searchTerm, contacts) => {
      if (!searchTerm) {
        return contacts;
      }

      const searchTermLower = searchTerm.toLowerCase();

      const filteredContacts = contacts.filter((contact) => {
        for (const key in contact) {
          if (key !== "id") {
            const valueLower = contact[key].toString().toLowerCase();
            if (valueLower.includes(searchTermLower)) {
              return true;
            }
          }
        }
        return false;
      });

      if (filteredContacts.length === 0) {
        alert("Not found!");
        return contacts;
      }

      return filteredContacts;
    };

    const filteredContacts = searchContacts(q, contacts);
    setShowContacts(filteredContacts);
  }, [q, contacts]);

  const dispatch = useDispatch();

  const [showAddModel, setShowAddModel] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: contactValidateSchema,
    onSubmit: (values, { resetForm }) => {
      let id = 0;
      if (contacts) {
        id = contacts[contacts.length - 1].id + 1;
      }

      dispatch(addContact({ ...values, id: parseInt(id) }));
      setShowAddModel(false);
      resetForm();
      alert("Success!");
    },
  });

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="home text">
      <div className="contact-table-container">
        <div className="flex-center padding-v-4">
          <h2>Contact Table</h2>{" "}
          <button
            className="medium-btn save-btn"
            onClick={() => setShowAddModel(true)}
          >
            Add new contact
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {showContacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>
                  <div className="">
                    <Link
                      to={routes.home + "edit/" + contact.id}
                      className="btn btn-info"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(contact.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* //model */}
      {showAddModel && (
        <div className="model-container">
          <div className="model-wrap">
            <div className="edit">
              <div className="container text">
                <form className="edit-form" onSubmit={formik.handleSubmit}>
                  <div>
                    <label>
                      Name:
                      <input
                        className="input-text"
                        type="text"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                      />
                    </label>
                    {formik.touched.name && formik.errors.name && (
                      <div className="error-message">{formik.errors.name}</div>
                    )}
                  </div>
                  <div>
                    <label>
                      Email:
                      <input
                        className="input-text"
                        type="text"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                      />
                    </label>
                    {formik.touched.email && formik.errors.email && (
                      <div className="error-message">{formik.errors.email}</div>
                    )}
                  </div>
                  <div>
                    <label>
                      Phone:
                      <input
                        className="input-text"
                        type="text"
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                      />
                    </label>
                    {formik.touched.phone && formik.errors.phone && (
                      <div className="error-message">{formik.errors.phone}</div>
                    )}
                  </div>
                  <div className="flex-center">
                    <button className="medium-btn save-btn" type="submit">
                      Save
                    </button>
                    <button
                      className="medium-btn cancel-btn"
                      onClick={() => setShowAddModel(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>{" "}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
