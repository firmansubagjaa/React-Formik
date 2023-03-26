import { useFormik } from "formik";
import * as Yup from "yup";
import background from "./assets/background.jpg";
import { useState } from "react";

// const validate = (values) => {
//   const errors = {};
//   if (!values.firstname) {
//     errors.firstname = "Required";
//   } else if (values.firstname.length > 15) {
//     errors.firstname = "Must be 15 characters or less";
//   }

//   if (!values.lastname) {
//     errors.lastname = "Required";
//   } else if (values.lastname.length > 15) {
//     errors.lastname = "Must be 20 characters or less";
//   }

//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }

//   return errors;
// };

function App() {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
      lastname: Yup.string().max(15, "Must be 20 characters or less").required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <div className="container bg-center bg-cover" style={{ backgroundImage: `url(${background})` }}>
        <div className="h-[100vh] flex justify-center items-center">
          <div className="card bg-slate-700">
            <form onSubmit={formik.handleSubmit} className="flex flex-col card-body input-group-md">
              {/* firstname */}
              <label htmlFor="firstname">Firstname</label>
              <input className="input" type="text" name="firstname" id="firstname" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstname} />

              {/* error handling */}
              {formik.errors.firstname ? <div className="text-red-400">{formik.errors.firstname}</div> : null}

              <label htmlFor="lastname">Lastname</label>
              <input className="input" type="text" name="lastname" id="lastname" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastname} />

              {/* error handling */}
              {formik.errors.lastname ? <div className="text-red-400">{formik.errors.lastname}</div> : null}

              {/* email */}
              <label htmlFor="email">Email Address</label>
              <input className="input" type="email" name="email" id="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />

              {/* error handling */}
              {formik.errors.email ? <div className="text-red-400">{formik.errors.email}</div> : null}

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
