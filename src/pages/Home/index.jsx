import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

function Home() {
  const contacts = useSelector((state) => state.contacts);
  // console.log(contacts)

  const handleDelete = (id) => {};

  return (
    <div className="home text" >
      <div className="contact-table-container">
        <h2>Contact Table</h2>
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
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>
                 <div className="">
                    <Link  to={routes.home+'edit/'+contact.id}
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
    </div>
  );
}

export default Home;
