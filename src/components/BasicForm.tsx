import React, {useState} from 'react'
import { Formik } from 'formik'
import { FieldArrayComponent, Button, Search } from './Formik/FormControl/Controls';
import * as Yup from 'yup';
import FormControl from './Formik/FormControl/FormControl';
import Form, { IForm } from './Formik/FormComponent'
import { IRadioOption } from './Formik/FormControl/Controls/Radio';
import { ICheckboxOptions } from './Formik/FormControl/Controls/Checkbox';

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
  phNumbers: [string],
  radioOption: string;
  selectMenu: string;
  checkbox: string[];
  date: Date;
}

const BasicForm = () => {
  const initialVarient:IForm['varient'] = 'purple'
  const [varient, setVarient] = useState<IForm["varient"]>(initialVarient);
  
  const radioOptions: IRadioOption[] = [
    {key: 'Option1', value: 'rOption1'},
    {key: 'Option2', value: 'rOption2'},
    {key: 'Option3', value: 'rOption3'},
  ]
  
  const checkboxOptions: ICheckboxOptions[] = [
    { key: 'COption1', value: 'COption1' },
    { key: 'COption2', value: 'COption2' },
    { key: 'COption3', value: 'COption3' },
  ];
  
  
  const selectMenu: string[] = ['option1', 'option2', 'option3'];
  
  const initialValues: IFormData = {
    name: 'Hamza',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
      facebook: '',
      twitter: ''
    },
    phoneNumbers: ['', ''],
    phNumbers: [''],
    radioOption: '',
    selectMenu: '',
    checkbox: [],
    date:  new Date(),
  }
  
  const onSubmit = (data: IFormData, actions: any) => {
    console.log('Form data', data);
    actions.setSubmitting(false);
    actions.resetForm();
  }
  
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    channel: Yup.string().required('Required'),
    comments: Yup.string().required('Required'),
    radioOption: Yup.string().required('Required'),
    selectMenu: Yup.string().required("Required"),
  })
  
  return (
    <div className='FormWrapper mt-6'>
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
              <Search varient={varient} />
              <FormControl
                control='radio' name='radioOption'
                label='Radio Topic:' options={radioOptions}
              />
              <FormControl
                control='select' name='selectMenu'
                label='Select Menu:' options={selectMenu}
              />
              <FormControl
                control='checkbox' name='checkbox'
                label='checkbox:' options={checkboxOptions}
              />
              <FormControl
                control='date' name='date' placeholder="select date"
                label='date:' type='date'
              />
              <Button type='submit' varient={varient} disabled={formik.isSubmitting || !formik.isValid}>
                submit
              </Button>
              <Button type='reset' varient={'danger'} className=" ml-3">
                reset
              </Button>
            </Form>
          )
        }
        }
      </Formik>
    </div>
  )
}

export default BasicForm
