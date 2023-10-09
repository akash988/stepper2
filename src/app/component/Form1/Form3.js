import { useForm ,Controller} from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import { FormControl } from 'react-bootstrap';
import React from 'react'; 
import Button from 'react-bootstrap/Button';


function Form3({ isLastStep ,onstepNext }) {
const { handleSubmit,control,register, watch,formState:{errors,isValid}} = useForm();

 const currentYear = new Date().getFullYear();
 const years = Array.from({
   length: currentYear - 1989
 }, (_, index) => 1990 + index);
const onSubmitForm = (data) => {
// Handle form submission logic
console.log(true);
onstepNext();
};

return (
<div className='containerMain'>
<form onSubmit={handleSubmit(onSubmitForm)}>
<br/>  
  <h3 className="topic">PLEASE TELL US MORE ABOUT YOURSELF</h3>
  <br/>
  <div className='content'>
    <Form.Group className="mb-3" controlId="ND">
    <Controller
     name="ND"
     control={control}
     rules={{required:'field is required'}}
     render={({field})=>(
     <>
     <Form.Control {...field} type="number"  placeholder="No Of Dependent" className={errors.ND ? 'is-invalid' : ''}/>
     {errors.ND && <Form.Text className="invalid-feedback">Field is Required</Form.Text> } 
     </>
     )}
     /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="Year">
        <Controller
     name="Year"
     control={control}
     rules={{required:'field is required'}}
     render={({field})=>(
     <>
     <Form.Control {...field} type="number"  placeholder="Years At Current Bank" className={errors.Year ? 'is-invalid' : ''} />
     {errors.Year && <Form.Text className="invalid-feedback">Field is Required</Form.Text> } 
     </>
     )}
     /> 
      </Form.Group>
      
      <br/>
       <Form.Group className='emptxt ' controlId="newsletter">
         
      <br/>
      <div >
        <Form.Check style={{display:'inline',marginRight:'5px',borderColor:'black',transform:'scale(1)'}}

          type="checkbox"
          

          {...register('checkboxField','newsletter')}

          isInvalid={errors.newsletter}

        />
         <Form.Label > N/A  &nbsp;&nbsp; Credit Card Expiry Date  </Form.Label></div >
        {/* {errors.newsletter && (

          <Form.Text className="invalid-feedback">Please Check the box</Form.Text>

        )} */}

</Form.Group>
      
       <Form.Group controlId="month">
        <Controller
          name="month"
          control={control}
          // rules={{ required: 'Field is required' }}
           
          render={({ field }) => (

            <>

              <Form.Select

                {...field}

                as="select"
                {...register('selectField')}
                disabled={watch('checkboxField')}

                >

                <option value = "" > Month </option>
                <option value="1">January</option>

                <option value="2">February</option>

                <option value="3">March</option>

                <option value="4">April</option>

                <option value="5">May</option>

                <option value="6">June</option>

                <option value="7">July</option>

                <option value="8">August</option>

                <option value="9">September</option>

                <option value="10">October</option>

                <option value="11">November</option>

                <option value="12">December</option>
              </Form.Select>

              {/* {errors.month  && (

                <div className="invalid-feedback">{errors.month.message}</div>

              )} */}

            </>

          )}

        />

</Form.Group>     
    <br/>
   
<Form.Group controlId="yearSelect">

        <FormControl  name="month" as="select"  {...register('selectField')}
                disabled={watch('checkboxField')} >
           <option value = "" > Year </option>
          {years.map((year) => (
             <option key={year} value={"Year"}>

              {year}

            </option>

          ))}

        </FormControl>
        {/* {errors.month  && (

                <div className="invalid-feedback">{errors.month.message}</div>

              )} */}

</Form.Group>
   
    <br/>
</div>
<div className="row" >
    <div className="col">

         {isLastStep && <Button variant="primary" type="submit" className='nextBtn'>Next</Button>}

    </div>

</div>
</form>
</div>
);
}

export default Form3;