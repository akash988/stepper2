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
<div className='container'>
<form onSubmit={handleSubmit(onSubmitForm)}>
<br/>  
  <h3 className="center">PLEASE TELL US MORE ABOUT YOURSELF</h3>
  
  <br/>
  <Form.Select aria-label="Default select example">
      <option>Maritial Status</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    <br/>
    <div>
        Please tick Below if you are married in community of property or by customary law(prior to November 2000) and
        you have obtained your spouse's permission to apply for a TFG account.
      </div>
      <br/>
    <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
  Yes, I have received permission from spouse to sign for TFG account.
  </label>
  <br/>
</div>
    
    <Form.Select aria-label="Default select example">
      <option>Ethnic Group</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    
</form>
</div>
);
}

export default Form2;