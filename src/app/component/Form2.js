import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import React from 'react';

function Form2({ onSubmit }) {
const { handleSubmit, register, errors } = useForm();

const onSubmitForm = (data) => {
// Handle form submission logic
onSubmit(data);
};

return (
<div className='pcontainer'>
<form onSubmit={handleSubmit(onSubmitForm)}>
<br/>  
  <h3>PLEASE COMPLETE YOUR EMPLOYMENT DETAILS</h3>
  <h6>Please tell us more about your job.</h6>
  <br/>
  <Form.Select aria-label="Default select example">
  <option>Employment Type</option>
        <option value="1">Permanently Employed</option>
        <option value="2">Self Employed</option>
        <option value="3">Employed on Contract Basis</option>
        <option value="4">Home Executive(House Wife)</option>
        <option value="5">Student</option>
        <option value="6">Retired</option>
        <option value="7">Receive a State Grant</option>
        <option value="8">Not Employed</option>
    </Form.Select>
    <br/>
    <Form.Select aria-label="Default select example">
    <option>Type Of Student</option>
        <option value="1">Full Time</option>
        <option value="2">Part Time</option>
    </Form.Select>
    <br/>
    <Form.Select aria-label="Default select example">
    <option>Employment Category</option>
        <option value="1">Marketing/Media/Sales</option>
        <option value="2">IT / Science / Medical / Research</option>
        <option value="3">Security / Defence</option>
        <option value="4">Legal/ Financial services</option>
        <option value="5">Engineering / Architecture</option>
        <option value="6">Catering / Entertainment / Accommodation</option>
        <option value="7">Skilled labour / Artisan</option>
        <option value="8">Domestic worker / Labourer</option>
        <option value="9">Admin/ Office Support</option>
        <option value="10">Government Department</option>
        <option value="11">Driver (bus, taxi, truck, train)</option>
        <option value="12">Other Professional Services</option>
    </Form.Select>
    <br/>
    <Form.Select aria-label="Default select example">
    <option >Employment Level</option>
        <option value="1">Junior/Mid-Level</option>
        <option value="2">Senior Manager</option>
        <option value="3">Executive</option>
    </Form.Select>
    <br/>
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Educational Institution" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Employer Name" />
      </Form.Group>

</form>
</div>
);
}

export default Form2;