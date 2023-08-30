import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import React from 'react';

function Form4({ onSubmit }) {
const { handleSubmit, register, errors } = useForm();

const onSubmitForm = (data) => {
// Handle form submission logic
onSubmit(data);
};

return (
<div className='pcontainer'>
<form onSubmit={handleSubmit(onSubmitForm)}>
<br/>  
  <h3>CONTACT DETAILS</h3>
  <label>Please tell us where we can reach you(other than your Cellphone).</label>
  <br/>
  <br/>
  <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" placeholder="Home Telephone" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" placeholder="Work Telephone" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="Email Address" />
      </Form.Group>
  <br/>
  <h3>Home Address</h3>
  <label>Please enter the address where you currently live.</label>
  <br/>
  <br/>
  <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Address Line 1" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Address Line 2" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Town/City/Suburb" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" placeholder="Postal Code" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" placeholder="Years at Current Address" />
      </Form.Group>
      <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  
  Is your Postal Adrress the same as above?

</div>
</form>
</div>
);
}

export default Form4;