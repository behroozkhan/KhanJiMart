
import * as Yup from 'yup';
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const phoneRegex = /^\+\d{1,3}\d{9,12}$/;

// Login Validation Schema
const LoginSchema = Yup.object().shape({
  emailOrPhone: Yup.string()
  .required("Email or phone number is required")
  .test(
    "is-email-or-phone",
    "Please provide a valid email or phone number",
    value => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[0-9]{10,15}$/;
      return emailRegex.test(value) || phoneRegex.test(value);
    }
  ),
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
        emailOrPhone: Yup.string()
        .required("Email or phone number is required")
        .test(
          "is-email-or-phone",
          "Please provide a valid email or phone number",
          value => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phoneRegex = /^[0-9]{10,15}$/;
            return emailRegex.test(value) || phoneRegex.test(value);
          }
        ),
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


const phoneOrEmailVal = Yup.object().shape(
  {
    emailOrPhone: Yup.string()
      .required("Email or phone number is required")
      .test(
        "is-email-or-phone",
        "Please provide a valid email or phone number",
        value => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          const phoneRegex = /^[0-9]{10,15}$/;
          return emailRegex.test(value) || phoneRegex.test(value);
        }
      )
  }
); 



  export  {LoginSchema,RegisterSchema,phoneOrEmailVal,emailRegex};
