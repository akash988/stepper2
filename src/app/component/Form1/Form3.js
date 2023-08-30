import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import React from 'react'; 



function Form3({ onSubmit }) {
const { handleSubmit, register, errors } = useForm();

const onSubmitForm = (data) => {
// Handle form submission logic
onSubmit(data);
};

return (
<div className='pcontainer'>
<form onSubmit={handleSubmit(onSubmitForm)}>
<br/>  
  <h3 className="center">PLEASE TELL US MORE ABOUT YOURSELF</h3>
  <br/>
  <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="No.Of Dependents" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Years at Current Bank" />
      </Form.Group>
      <Form.Select aria-label="Default select example">
      <option>Month</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    <br/>
    <Form.Select aria-label="Default select example">
      <option>Year</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    <br/>
</form>
</div>
);
}

export default Form3;