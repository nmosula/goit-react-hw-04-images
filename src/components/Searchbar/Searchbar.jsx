import { Formik, Field } from 'formik';
import { Form, FormField, ErrorMessage, FrmButton, FrmButtonLabel } from './Searchbar.styled';
import * as Yup from 'yup';


const nameRegex = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const Schema = Yup.object().shape({
    searchQuery: Yup.string()
        .matches(nameRegex, {message: "Invalid Search text", })
        .required('Required'),
});


const Searchbar = ({ onSave }) => {

    return (
            <Formik
                initialValues={{
                    searchQuery: '',
                }}
                validationSchema={Schema}
                onSubmit={(values, actions) => {
                    onSave({
                        ...values,
                    });
                    actions.resetForm();
                }}
            >

            <Form>
                <FormField>
                    <FrmButton type="submit">
                        <FrmButtonLabel></FrmButtonLabel>
                    </FrmButton>
                    <Field name="searchQuery" />
                    <ErrorMessage name="searchQuery" component="span" />
                </FormField>
            </Form>
    
            </Formik>

    );
    
}

export default Searchbar;