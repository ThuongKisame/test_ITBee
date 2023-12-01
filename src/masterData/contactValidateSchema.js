import * as yup from 'yup';

const contactValidateSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().matches(/^[0-9]{10}$/, 'Invalid phone number').required('Phone is required'),
});

export default contactValidateSchema;
