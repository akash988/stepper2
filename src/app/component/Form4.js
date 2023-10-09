import { useForm ,Controller} from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import React from 'react';
import Button from 'react-bootstrap/Button';
function Form4({ onSubmit ,onNext ,isLastStep, isFirstStep}) {
const { handleSubmit,control,register, formState:{errors,isValid}} = useForm();

const onSubmitForm = (data) => {

onSubmit(data);
onNext();
};

return (
<div className='containerMain'>
<form onSubmit={handleSubmit(onSubmitForm)}>
<br/>  
  <h3 className="topic">CONTACT DETAILS</h3>
  <label className="emptxt">Please tell us where we can reach you(other than your Cellphone).</label>
  <br/>
  <br/>
  <div className='content'>
    <Form.Group className="mb-3" controlId="Home">
        <Controller
     name="Home"
     control={control}
     rules={{required:'field is required',pattern:'[0-9]',maxLength:10,minLength:10}}
     render={({field})=>(
     <>
     <Form.Control {...field} type="number"  placeholder="Home TelePhone" className={errors.Home ? 'is-invalid' : ''}/>
     {errors.Home && <Form.Text className="invalid-feedback">Fiels is Required</Form.Text> } 
     </>
     )}
     /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="Work">
        <Controller
     name="Work"
     control={control}
     rules={{required:'field is required',pattern:'[0-9]',maxLength:10,minLength:10}}
     render={({field})=>(
     <>
     <Form.Control {...field} type="number"  placeholder="Work TelePhone" className={errors.Work ? 'is-invalid' : ''} />
     {errors.Work && <Form.Text className="invalid-feedback">Fiels is Required</Form.Text> } 
     </>
     )}
     /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="Email">
        <Controller
     name="Email"
     control={control}
     rules={{required:'field is required',pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"}}
     render={({field})=>(
     <>
     <Form.Control {...field} type="text"  placeholder="Email Address" className={errors.Email? 'is-invalid' : ''} />
     {errors.Email && <Form.Text className="invalid-feedback">Fiels is Required</Form.Text> } 
     </>
     )}
     /> 
      </Form.Group>
  <br/>
  <h3 className="topic">Home Address</h3>
  <label className="emptxt">Please enter the address where you currently live.</label>
  <br/>
  <br/>
  <Form.Group className="mb-3" controlId="Add1">
         <Controller
     name="Add1"
     control={control}
     rules={{required:'field is required'}}
     render={({field})=>(
     <>
     <Form.Control {...field} type="text"  placeholder="Address Line1" className={errors.Add1 ? 'is-invalid' : ''}/>
     {errors.Add1 && <Form.Text className="invalid-feedback">Fiels is Required</Form.Text> } 
     </>
     )}
     /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Address Line 2" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Town">
         <Controller
     name="Town"
     control={control}
     rules={{required:'field is required'}}
     render={({field})=>(
     <>
     <Form.Control {...field} type="text"  placeholder="Town/City/Suburb" className={errors.Town ? 'is-invalid' : ''}/>
     {errors.Town && <Form.Text className="invalid-feedback">Fiels is Required</Form.Text> } 
     </>
     )}
     /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="Code">
         <Controller
     name="Code"
     control={control}
     rules={{required:'field is required',pattern:'[0-9]',maxLength:6,minLength:6}}
     render={({field})=>(
     <>
     <Form.Control {...field} type="number"  placeholder="Postal Code" className={errors.Code ? 'is-invalid' : ''}/>
     {errors.Code && <Form.Text className="invalid-feedback">Fiels is Required</Form.Text> } 
     </>
     )}
     /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="Years">
         <Controller
     name="Years"
     control={control}
     rules={{required:'field is required'}}
     render={({field})=>(
     <>
     <Form.Control {...field} type="number"  placeholder="Years at Current Address" className={errors.Years ? 'is-invalid' : ''}/>
     {errors.Years && <Form.Text className="invalid-feedback">Fiels is Required</Form.Text> } 
     </>
     )}
     /> 
      </Form.Group>
      <div className='emptxt'><Form.Group controlId="newsletter">
          
      <br/>
      <div>
        <Form.Check style={{display:'inline',marginRight:'5px',transform:'scale(1.2)'}}

          type="checkbox"

          

          {...register('newsletter', { required: 'Field is required' })}

          isInvalid={errors.newsletter}

        />
        <Form.Label > Is your Postal Adrress the same as above ? </Form.Label></div>

        {errors.newsletter && (

          <Form.Text className="invalid-feedback">Please Check the Box</Form.Text>

        )}

</Form.Group></div>
  </div>
     
<br/>
<div className="row">

 

   

 

    <div className="col">

 

    {!isLastStep && !isFirstStep && <Button varient="success" className='nextBtn' type="submit" >Next</Button>}

 

    </div>

   

 

</div>
</form>
</div>
);
}

export default Form4;