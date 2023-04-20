import { Form, Label, Btn } from './ContactForm.styled';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const FormSchema = Yup.object().shape({
  name: Yup.string().required('Required field!'),
  number: Yup.number().required('Required field!'),
});

export const ContactForm = ({ onSave }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={FormSchema}
      onSubmit={(values, actions) => {
        onSave({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <Form>
        <Label>
          Name
          <br />
          <Field name="name" />
        </Label>
        <Label>
          Number
          <br />
          <Field type="number" name="number" />
        </Label>
        <Btn type="submit">Add contact</Btn>
      </Form>
    </Formik>
  );
};

// Notification.propTypes = {
//     message: PropTypes.string.isRequired,
// };
