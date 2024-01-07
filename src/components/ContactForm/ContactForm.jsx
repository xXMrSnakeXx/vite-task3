import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import { useId } from "react";
import * as Yup from "yup";
const initialValues = {
  name: "",
  number: "",
};
const contactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.number()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
const ContactForm = ({ onHandleSubmit }) => {
  const nameId = useId();
  const numberId = useId();
  const handleSubmit = (values, { resetForm }) => {
    onHandleSubmit({ ...values, id: nanoid() });
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactsSchema}
    >
      <Form>
        <label htmlFor={nameId}>Name</label>
        <Field type="text" name="name" id={nameId} />
        <ErrorMessage name="name" as="span" />
        <label htmlFor={numberId}>Name</label>
        <Field type="text" name="number" id={numberId} />
        <ErrorMessage name="number" as="span" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
