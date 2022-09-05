import React, {useState} from 'react'
import { Formik } from 'formik'
import { FieldArrayComponent } from './Formik/FormControl/Controls';
import * as Yup from 'yup';
import FormControl from './Formik/FormControl/FormControl';
import Form, { IForm } from './Formik/FormComponent'

interface IFormData {
  name: string;
  email: string,
  channel: string,
  comments: string,
  address: string,
  social: {
    facebook: string,
    twitter: string
  },
  phoneNumbers: [string, string],
  phNumbers: [string]
}

const BasicForm = () => {
  const initialVarient:IForm['varient'] = 'blue'
  const [varient, setVarient] = useState<IForm["varient"]>(initialVarient);
  
  const initialValues: IFormData = {
    name: 'Vishwas',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
      facebook: '',
      twitter: ''
    },
    phoneNumbers: ['', ''],
    phNumbers: ['']
  }
  
  const onSubmit = (data: IFormData, actions: any) => {
    console.log('Form data', data)
    console.log('actions', actions)
    actions.setSubmitting(false)
    actions.resetForm()
  }
  
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
    channel: Yup.string().required('Required'),
    comments: Yup.string().required('Required')
  })
  
  return (
    <div className='FormWrapper'>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {formik => {
          return (
            <Form varient={varient}>
              <FormControl
                control='input' name='name' placeholder="enter your name"
                label='Name: ' type="text"
              />
              <FormControl
                control='input' name='email' placeholder="email"
                label='email: ' type="email"
              />
              <FormControl
                control='input' name='channel' placeholder="channel"
                label='channel: ' type="text"
              />
              <FormControl
                control='textarea' name='comments' placeholder="comments"
                label='comments: ' type="text"
              />
              <FormControl
                control='input' name='address' placeholder="address"
                label='address: ' type="text"
              />
              <FormControl
                control='input' name='social.facebook' placeholder="social facebook"
                label='social facebook: ' type="text"
              />
              <FormControl
                control='input' name='social.twitter' placeholder="social twitter"
                label='social twitter: ' type="text"
              />
              <FormControl
                control='input' name='phoneNumbers[0]' placeholder="phoneNumbers[0]"
                label='phoneNumbers[0]: ' type="text"
              />
              <FormControl
                control='input' name='phoneNumbers[1]' placeholder="phoneNumbers[1]"
                label='phoneNumbers[1]: ' type="text"
              />
              <FieldArrayComponent name='phNumbers' />
              <button type='submit' className='Btn' disabled={formik.isSubmitting || !formik.isValid}>
                submit
              </button>
              <button type='reset' className='Btn BtnWarning ml-3'>
                reset
              </button>
            </Form>
          )
        }
        }
      </Formik>
    </div>
  )
}

export default BasicForm