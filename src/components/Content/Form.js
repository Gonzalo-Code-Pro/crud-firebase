import React from 'react'
import { Formik } from 'formik';
import { validate  } from './formFunctions.js'
import ButtonForm from './ButtonForm'
import FormItem from './ItemForm'
import {db} from '../../firebase.js'

const initialValues = {
  email: "",
  password: ""
};

const submitForm = (values) => {
    db.collection('task').add({
        title:values.password,
        link:values.email,   
    }).then((doc)=>{
      console.log("Document writting  for id=",doc.id)      
    }).catch((err)=> console.log(err))
};

const Form = () => {
    return (
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={submitForm}
      >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty
        } = formik;
        return (
            <div className="container">
              <h1>Sign in to continue</h1>
              <form onSubmit={handleSubmit}>
                   <FormItem 
                      name="email"
                      label="Email"
                      type="email"
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      values={values.email}
                      errors={errors.email}
                      touched={touched.email}
                      placeholder="Enter you email"
                 />
                  <FormItem 
                      name="password"
                      label="Password"
                      type="password"
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      values={values.password}
                      errors={errors.password}
                      touched={touched.password}
                      placeholder="Enter Password"
                 />
                 <ButtonForm content={'Sign In'} dirty={dirty} isValid={isValid} />
              </form>
            </div>
        );
      }}
    </Formik>
    )
}

export default Form
