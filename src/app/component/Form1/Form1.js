
import Form from 'react-bootstrap/Form';
import React from 'react';
import { useForm } from 'react-hook-form';


function Form1({ onSubmit }) {
  

const { handleSubmit } = useForm();

const onSubmitForm = (data) => {

onSubmit(data);
};

return (

<div className='container'>
<form onSubmit={handleSubmit(onSubmitForm)}>
<br/>  
  <h3 className="center">PLEASE COMPLETE ALL FIELDS BELOW</h3>
  <h6 className="center">You will be able to shop at TFG retail brands on your TFG Account.</h6>
  <br/>
<select  className="form-select" aria-label="Default select example">
      <option>Choose a Brand</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <br/>
    <div className="mb-3">
  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="RSA ID"/>
   </div>
      <Form.Select aria-label="Default select example">
      <option>Title</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    <br/>
    <Form.Group className="mb-3" controlId="form2">
        <Form.Control type="text" placeholder="First Name" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="form3">
        <Form.Control type="text" placeholder="Last Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="form4">
        <Form.Control type="number" placeholder="SA Cellphone" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="form5">
        <Form.Control type="text" placeholder="Promotion Code" />
      </Form.Group>
      <div className="form-check">
     <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
     <label className="form-check-label">
     I confirm that I agree to be bound by the Terms and Conditions for TFG's Account <br/> I confirm further that:<br />
    </label>
    </div>
    <ul>
            <li>
              <span>All information provided by me in this application is true, correct and complete.</span>
            </li>
            <li>
              <span>I do not have any other pending applications for credit
                outstanding;</span>
            </li>
            <li><span>I have not applied for debt review and am not under administration,
              sequestration or curatorship;</span>
            </li>
            <li><span>The documents provided for proof of income purposes (if applicable) are
              true and correct;</span>
            </li>
            <li><span>I consent to TFG contacting any credit bureau to obtain my credit
              profile
              history;</span>
            </li>
            <li><span>I consent to TFG collecting, retaining, sharing and processing my
              personal
              information for purposes of opening and maintaining a TFG Account</span>.</li>
          </ul>

          <div className="form-check">
     <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/ >
     I confirm that I agree to be bound by the Terms and Conditions for TFG's Account
    
    </div>
      
</form>
</div>

);
}

export default Form1;