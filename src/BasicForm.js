import { useFormik } from "formik";
import * as yup from 'yup';

// Old way without library like yup or Joi
// const validateForm = (values) => {
//     const errors = {};
//     console.log("validateForm", values);

//     if(values.email.length < 7) {
//         errors.email = "Please enter a longer email";
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//         errors.email = 'Invalid email address';
//     }

//     if(values.password.length < 8) {
//         errors.password = "Please enter a longer password of minimum 8 characters";
//     } else if(values.password.length > 15) {
//         errors.password = "Please enter a shorter password of maximum 15 characters";
//     }
//     console.log(errors);
//     return errors;
// }

const formValidationSchema = yup.object({
    email: yup.string().min(5, "Need a bigger email address 😄").matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Pattern not matched 😅"),
    password: yup.string().min(8, "Need a bigger password 😄").max(12, "Too much password 😅")
});

export function BasicForm() {
  const { handleChange, handleSubmit, handleBlur, values, touched, errors} = useFormik({
    initialValues: { email: "", password: "" },
    // validate: validateForm,
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
        console.log("onSubmit", values);
    }
  });
  return (
    <form onSubmit={handleSubmit}>
      <input id="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" placeholder="Enter your email" />
      {touched.email && errors.email ? errors.email : ""}
      <input id="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} type="password" placeholder="Enter your password" />
      {touched.password && errors.password ? errors.password : ""}
      <button type="submit">Submit</button>
    </form>
  );
}
