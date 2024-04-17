import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "Yup";

import style from "./ContactForm.module.css";

export default function ContactForm({ onAdd }) {
  return (
    <div>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, "Too Short!")
            .max(50, "Too Long!")
            .required("Required"),
          number: Yup.string()
            // .min(3, "Must be at least 3 characters")
            // .max(50, "Must be 50 characters or less")
            .matches(/[0-9]{3}-[0-9]{2}-[0-9]{2}/, {
              message: "Number format: XXX-XX-XX",
              excludeEmptyString: false,
            })
            .required("Required"),
        })}
        onSubmit={(values, { resetForm }) => {
          onAdd({ ...values, id: nanoid() });
          resetForm();
        }}>
        <Form className={style.form}>
          <label htmlFor="name">Name</label>
          <Field
            type="text"
            id="name"
            name="name"
          />
          <ErrorMessage
            className={style.error}
            name="name"
            component="span"
          />

          <label htmlFor="number">Number</label>
          <Field
            type="text"
            id="number"
            name="number"
          />
          <ErrorMessage
            name="number"
            component="span"
            className={style.error}
          />

          <button
            className={style.btn}
            type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
