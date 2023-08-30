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
  <h3>PLEASE COMPLETE YOUR INCOME AND EXPENSE DETAILS</h3>
  <label>TFG will use the income and expense information provided by you, plus your bureau commitments, to ensure that we
    give you a credit limit that you can afford.</label>
  <br/>
  <br/>
  <h3>MONTHLY INCOME</h3>
  <label>Please enter 0 if not applicable.</label>
  <br/>
  <label>Child grants must be excluded</label>
  <br/>
  <br/>
  <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" placeholder="Monthly Salary Before Deductions" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" placeholder="Other Income(eg. allowances)" />
      </Form.Group>
      <br/>
      <div>if required, may we obtain your pay slip from a third party on your behalf to verify your monthly income?
                </div>
                <div>
                    <input type="radio" name="agree" value="yes" formControlName="radiobtn1"/>Yes &nbsp;
                    <input type="radio" name="agree" value="no" formControlName="radiobtn1"/>No
                </div>
      <h3>MONTHLY INCOME</h3>
  <label>Please enter 0 if not applicable.</label>
  <br/>
  <br/>
  <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" placeholder="Rent" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" placeholder="Home Loan Repayments" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" placeholder="Levy/Rates/Taxes" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" placeholder="Child Support/Maintainance" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" placeholder="Medical Aid" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" placeholder="Policies" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" placeholder="Prepaid Cellular" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" placeholder="Transport Expenses" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" placeholder="Other Monthly Living Expenses" />
      </Form.Group>
      <div >if required, may we obtain your pay slip from a third party on your behalf to verify your monthly income?
                </div>
                <div>
                    <input type="radio" name="agree" value="yes" formControlName="radiobtn1"/>Yes &nbsp;
                    <input type="radio" name="agree" value="no" formControlName="radiobtn1"/>No
                </div>
</form>
</div>
);
}

export default Form3;