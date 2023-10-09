
import Form from 'react-bootstrap/Form';
import React ,{useState} from 'react';
import { useForm,Controller} from 'react-hook-form';
import Button from 'react-bootstrap/Button';

function Form1({ onSubmit,onNext, isLastStep}) {
  

const { handleSubmit,control,register, formState:{errors,touched},setValue} = useForm();

 const [FName, setFName] = useState("");


const onSubmitForm = (data) => {

onSubmit(data);
 onNext();
};

return (

<div className='containerMain'>
<form onSubmit={handleSubmit(onSubmitForm)}>
<br/>  
  <h3 className="topic">PLEASE COMPLETE ALL FIELDS BELOW</h3>
  <h6 className="emptxt">You will be able to shop at TFG retail brands on your TFG Account.</h6>
  <br/>
  <div className='content'>

 <Form.Group  controlId="brand">
        <Controller
          name="brand"
          control={control}
          rules={{ required: 'Field is required' }}
          render={({ field }) => (

            <>

              <Form.Select

                {...field}

                className={errors.brand  ? 'is-invalid' : ''}
                >

                <option value = "" > Choose a Brand </option>

               <option value="1">Foschini</option>

          <option value="2">TotalSports</option>

          <option value="3">Markham</option>

          <option value="4">Exact!</option>

          <option value="5">SportScene</option>

          <option value="3">American Swiss</option>

          <option value="3">Sterns</option>

          <option value="3">Donna</option>

          <option value="3">@home</option>

          <option value="3">Mat and May</option>

          <option value="3">Fabiani</option>

          <option value="3">The FIX</option>

          <option value="3">G-Star Raw(In Store Only)</option>

          <option value="3">Hi</option>

          <option value="3">Soda Bloc</option>

          <option value="3">Archive</option>

          <option value="3">Relay Jeans</option>

          <option value="3">RFO</option>

          <option value="3">Sneaker Factory</option>

              </Form.Select>

              {errors.brand && (

                <div className="invalid-feedback">Please select a brand</div>

              )}

            </>

          )}

        />

</Form.Group>     

    <br/>
   <Form.Group className="mb-3" controlId="RSA">
    <Controller
     name="RSA"
     control={control}
     rules={{required:'field is required',pattern:'[0-9]',maxLength:12,minLength:12}}
     render={({field})=>(
     <>
     <Form.Control {...field} type="number"  placeholder="RSA ID"  className={errors.RSA  ? 'is-invalid' : ''} />
     {errors.RSA  && <Form.Text className="invalid-feedback">Please Provide 12 digits RSA ID</Form.Text> } 
     </>
     )}
    /> 
     
      </Form.Group>
       <Form.Group controlId="title">
        <Controller
          name="title"
          control={control}
          rules={{ required: 'Field is required' }}
          render={({ field }) => (

            <>

              <Form.Select

                {...field}

                as="select"

                className={errors.title ? 'is-invalid' : ''}>

                <option value = "" > Title </option>
                <option value="1">Mr.</option>
                <option value="2">Mrs.</option>
                <option value="3">Ms.</option>
                <option value="4">Dr.</option>
              </Form.Select>

              {errors.title  && (

                <div className="invalid-feedback">Please select a title</div>

              )}

            </>

          )}

        />

</Form.Group>     
      
    <br/>
    <Form.Group className="mb-3" controlId="FName">
        
    <Controller
     name="FName"
     control={control}
     rules={{required:'field is required'}}
     render={({field})=>(
     <>
     < Form.Control {
       ...field
     }
     type = "text"
     placeholder = "First Name"
     
     className = {
       errors.FName ? 'is-invalid' : ''
     }
     />
     {errors.FName && <Form.Text className="invalid-feedback">Field is Required</Form.Text> } 
     </>
     )}
     /> 
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="form3">
        <Controller
     name="LName"
     control={control}
     rules={{required:'field is required'}}
     render={({field})=>(
     <>
     < Form.Control {
       ...field
     }
     type = "text"
     placeholder = "Last Name"
     className = {
       errors.LName ? 'is-invalid' : ''
     }
     />
     {errors.LName && <Form.Text className="invalid-feedback">Field is Required</Form.Text> } 
     </>
     )}
     /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="form4">
       <Controller
     name="SACell"
     control={control}
     rules={{required:'field is required',pattern:'[0-9]',maxLength:10,minLength:10}}
     render={({field})=>(
     <>
     <Form.Control {...field} type="number"  placeholder="SA CellPhone" className={errors.SACell ? 'is-invalid' : ''}/>
     {errors.SACell && <Form.Text className="invalid-feedback">Please fill 10 digit cell Number</Form.Text> } 
     </>
     )}
     /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="form5">
        <Controller
     name="PCode"
     control={control}
     rules={{required:'field is required'}}
     render={({field})=>(
     <>
     <Form.Control {...field} type="text"  placeholder="Promotion Code" className={errors.PCode ? 'is-invalid' : ''}/>
     {errors.PCode && <Form.Text className="invalid-feedback">Field is Required</Form.Text> } 
     </>
     )}
     /> 
      </Form.Group>
      <div>
        <Form.Group className='emptxt ' controlId="newsletter" style={{textAlign:"initial"}}>
         
      <br/>
      <div  style={{display:'flex'}}>
        <Form.Check style={{marginRight:'5px',transform:'scale(1.2)'}}

          type="checkbox"

          {...register('newsletter', { required: 'Field is required' })}

          isInvalid={errors.newsletter}

        />
         < Form.Label > I confirm that I agree to be bound by the < a href = "#" >Terms and Conditions  </a>
          for TFG's Account </Form.Label></div>
            &nbsp; &nbsp; &nbsp;I confirm further that: < br />
          
        {errors.newsletter && (

          <Form.Text className="invalid-feedback">Please Check the box</Form.Text>

        )}
         <ul>
            <li>
              <span>All information provided by me in this application is true, correct and complete.</span>
            </li>
            <li>
              <span>I do not have any other pending applications for credit outstanding;</span>
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
           < a href = "#" > Click Here </a> to see how we process your personal information.
        

</Form.Group>

  </div>
  <Form.Group className='emptxt ' controlId="terms">
      <div style={{display:'flex'}}>
        <Form.Check style={{display:'inline',marginRight:'5px',transform:'scale(1.2)'}}

          type="checkbox"

         

          {...register('terms', { required: 'Field is required' })}

          isInvalid={errors.terms}

        />
         <Form.Label >  If I am not successful with this credit application, I give TFG permission to contact the credit bureau at a
          later stage to offer me a TFG Account.</Form.Label></div >
        {errors.terms && (

          <Form.Text className="invalid-feedback">Please Check the box</Form.Text>

        )}

</Form.Group>
      </div>
      
      <div className="row" >

    <div className="col">

          {!isLastStep && <Button type="submit" className='nextBtn' variant="primary">Next</Button>}

</div>

 

            </div>
</form>
</div>

);
}

export default Form1;