import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { editContact } from '../../actions/contactAction';
import { useFormik } from 'formik';
import contactValidateSchema from '../../masterData/contactValidateSchema';
import { routes } from '../../routes';

function Edit() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedContact = useSelector((state) => {
    const contacts = state.contacts;
    return contacts.find((contact) => contact.id === parseInt(id));
  });

  useEffect(() => {
    if (!selectedContact) {
      navigate(routes.home);
    }
  }, [selectedContact, navigate]);

  const formik = useFormik({
    initialValues: {
      name: selectedContact?.name || '',
      email: selectedContact?.email || '',
      phone: selectedContact?.phone || '',
    },
    validationSchema: contactValidateSchema,
    onSubmit: (values) => {
      dispatch(editContact({ ...values, id: parseInt(id) }));
      alert('Success!');
      navigate(routes.home);
    },
  });

  return (
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
            <Link className="medium-btn cancel-btn" to={routes.home}>
              Cancel
            </Link>
          </div>
        </form>{' '}
      </div>
    </div>
  );
}

export default Edit;
