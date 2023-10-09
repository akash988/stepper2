import { useForm,Controller } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import React from 'react';
import Button from 'react-bootstrap/Button';
function Form3({ onSubmit ,onNext, isLastStep, isFirstStep}) {
const { handleSubmit,control, formState:{errors,isValid}} = useForm();
const onSubmitForm = (data) => {
 onSubmit(data);
 onNext();
};

return (
<div className='containerMain'>
<form onSubmit={handleSubmit(onSubmitForm)}>
<br/>  
  <h3 className="topic">PLEASE COMPLETE YOUR INCOME AND EXPENSE DETAILS</h3>
  <label className="emptxt">TFG will use the income and expense information provided by you, plus your bureau commitments, to ensure that we
    give you a credit limit that you can afford.</label>
  <br/>
  <br/>
  <h3 className="topic">MONTHLY INCOME</h3>
  <label className="emptxt">Please enter 0 if not applicable.</label>
  <br/>
  <label style={{fontSize:'13px'}}>Child grants must be excluded</label>
  <br/>
  <br/>
  <div className='content'>
    <Form.Group className="mb-3" controlId="Sal">
    <Controller
     name="Sal"
     control={control}
     rules={{required:'field is required'}}
     render={({field})=>(
     <>
     <Form.Control {...field} type="number" placeholder="Monthly Salary Before Deduction" className={errors.Sal ? 'is-invalid' : ''}/>
     {errors.Sal && <Form.Text className="invalid-feedback">Field is Required</Form.Text> } 
     </>
     )}
     /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="Sal1">
        <Controller
     name="Sal1"
     control={control}
     rules={{required:'field is required'}}
     render={({field})=>(
     <>
     <Form.Control {...field} type="number" placeholder="Other Income (e.g allowances)" className={errors.Sal1 ? 'is-invalid' : ''}/>
     {errors.Sal && <Form.Text className="invalid-feedback">Field is Required</Form.Text> } 
     </>
     )}
     /> 
      </Form.Group>
      <br/>
      <div class="emptxt">

        <div class="row justify-content-md-center">

            <div class="col col-lg-12">

                <div class="col col1" >if required, may we obtain your pay slip from a third party on your behalf to verify your monthly income?

                </div>

                <div class="col col2" style={{marginTop: '7px',marginRight: '5px'}}>

                    <input type="radio" name="agree" value="yes" formControlName="radiobtn2"/>Yes &nbsp;

                    <input type="radio" name="agree" value="no" formControlName="radiobtn2"/>No

                </div>

        

            </div>

          </div>

        </div>
                <br/>
      <h3 className="topic">MONTHLY EXPENSES</h3>
  <label className="emptxt">Please enter 0 if not applicable.</label>
  <br/>
  <br/>
  <Form.Group className="mb-3" controlId="Rent">
        <Controller
     name="Rent"
     control={control}
     rules={{required:'field is required'}}
     render={({field})=>(
     <>
     <Form.Control {...field} type="number" placeholder="Rent" className={errors.Rent ? 'is-invalid' : ''}/>
     {errors.Rent && <Form.Text className='text-danger '>Field is Required</Form.Text> } 
     </>
     )}
     /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="Loan">
        <Controller
     name="Loan"
     control={control}
     rules={{required:'field is required'}}
     render={({field})=>(
     <>
     <Form.Control {...field} type="number" placeholder="Home Loan Repaymants" className={errors.Loan ? 'is-invalid' : ''}/>
     {errors.Loan && <Form.Text className="invalid-feedback">Field is Required</Form.Text> } 
     </>
     )}
     /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="Tax">
        <Controller
     name="Tax"
     control={control}
     rules={{required:'field is required'}}
     render={({field})=>(
     <>
     <Form.Control {...field} type="number" placeholder="Levy/Rates/Taxes" className={errors.Tax ? 'is-invalid' : ''}/>
     {errors.Tax && <Form.Text className="invalid-feedback">Field is Required</Form.Text> } 
     </>
     )}
     /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="Child">
        <Controller
     name="Child"
     control={control}
     rules={{required:'field is required'}}
     render={({field})=>(
     <>
     <Form.Control {...field} type="number" placeholder="Child Support/Maintainance" className={errors.Child ? 'is-invalid' : ''}/>
     {errors.Child && <Form.Text className="invalid-feedback">Field is Required</Form.Text> } 
     </>
     )}
     /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="Med">
        <Controller
     name="Med"
     control={control}
     rules={{required:'field is required'}}
     render={({field})=>(
     <>
     <Form.Control {...field} type="number" placeholder="Medical Aid" className={errors.Med ? 'is-invalid' : ''}/>
     {errors.Med && <Form.Text className="invalid-feedback">Field is Required</Form.Text> } 
     </>
     )}
     /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="Pol">
        <Controller
     name="Pol"
     control={control}
     rules={{required:'field is required'}}
     render={({field})=>(
     <>
     <Form.Control {...field} type="number" placeholder="Policies" className={errors.Pol ? 'is-invalid' : ''}/>
     {errors.Pol && <Form.Text className="invalid-feedback">Field is Required</Form.Text> } 
     </>
     )}
     /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="Pre">
        <Controller
     name="Pre"
     control={control}
     rules={{required:'field is required'}}
     render={({field})=>(
     <>
     <Form.Control {...field} type="number" placeholder="Prepaid Cellular" className={errors.Pre ? 'is-invalid' : ''}/>
     {errors.Pre && <Form.Text className="invalid-feedback">Field is Required</Form.Text> } 
     </>
     )}
     /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="Trans">
        <Controller
     name="Trans"
     control={control}
     rules={{required:'field is required'}}
     render={({field})=>(
     <>
     <Form.Control {...field} type="number" placeholder="Transport Expenses" className={errors.Trans ? 'is-invalid' : ''}/>
     {errors.Trans && <Form.Text className="invalid-feedback">Field is Required</Form.Text> } 
     </>
     )}
     /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="Other">
        <Controller
     name="Other"
     control={control}
     rules={{required:'field is required'}}
     render={({field})=>(
     <>
     <Form.Control {...field} type="number" placeholder="Other Monthly Living Expenses"  className={errors.Other ? 'is-invalid' : ''}/>
     {errors.Other && <Form.Text className="invalid-feedback">Field is Required</Form.Text> } 
     </>
     )}
     /> 
      </Form.Group>
      <div className="emptxt" >if required, may we obtain your pay slip from a third party on your behalf to verify your monthly income? </div>
      <div className="emptxt" required>
          <input type="radio" name="agree" value="yes" formControlName="radiobtn1"/>Yes &nbsp;
          <input type="radio" name="agree" value="no" formControlName="radiobtn1"/>No
      </div>
      <br/>
  </div>
      <div className="row">

    <div className="col">

 

    {!isLastStep && !isFirstStep && <Button varient="success" className='nextBtn' type="submit">Next</Button>}

 

    </div>

   

 

</div>
</form>
</div>
);
}

export default Form3;