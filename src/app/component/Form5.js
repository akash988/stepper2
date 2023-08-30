import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import React from 'react';

function Form5({ onSubmit }) {
const { handleSubmit, register, errors } = useForm();

const onSubmitForm = (data) => {
// Handle form submission logic
onSubmit(data);
};

return (
<div className='pcontainer'>
<form onSubmit={handleSubmit(onSubmitForm)}>
<br/>  
  <h3>FAMILY REFERENCE</h3>
  <label>Please give details of a family member.</label>
  <br/>
  <br/>
  <Form.Select aria-label="Default select example">
  <option >Relation to you</option>
        <option value="1">Husband</option>
        <option value="2">Father</option>
        <option value="3">Mother</option>
        <option value="4">Wife</option>
        <option value="5">Guardian</option>
        <option value="6">Partner</option>
        <option value="7">Other</option>
    </Form.Select>
    <br/>
  <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="First Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Last Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" placeholder="Contact Number" />
      </Form.Group>
      <br/>  
  <h3>PERSONAL REFERENCE</h3>
  <label>Please give details of a friend or family member not living with you</label>
  <br/>
  <br/>
  <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="First Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Last Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" placeholder="Contact Number" />
      </Form.Group>
</form>
</div>
);
}

export default Form5;