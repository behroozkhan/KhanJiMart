
import * as Yup from 'yup';
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const phoneRegex = /^\+\d{1,3}\d{9,12}$/;

// Login Validation Schema
const LoginSchema = Yup.object().shape({
    email: Yup.string().matches(emailRegex, 'Invalid email format').email('Invalid email').required('Email Is Required'),
    password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must include at least one uppercase letter, one lowercase letter, and one number'
    )
    .required('Password is required'),
  });

// Register Validation Schema
  const RegisterSchema = Yup.object().shape({
    name: Yup.string()
        .min(3)
        .max(100)
        .required("Name Is Feild")
        ,
    email: Yup.string().matches(emailRegex, 'Invalid email format').email('Invalid email').required('Email Is Required'),
    password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must include at least one uppercase letter, one lowercase letter, and one number'
    )
    .required('Password is required'),
    // phone: Yup.string()
    // .matches(phoneRegex, 'Invalid phone number format. Example: +923332846693')
    // .required('Phone number is required')
  });



  export  {LoginSchema,RegisterSchema};
