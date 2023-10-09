import { useForm,Controller } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import React from 'react'; 
import Button from 'react-bootstrap/Button';

function Form2({ onSubmit,onNext,isLastStep }) {
const { handleSubmit,control, register, formState:{errors} } = useForm();

const onSubmitForm = (data) => {

onSubmit(data);
onNext();
};

return (
<div className='containerMain'>
<form onSubmit={handleSubmit(onSubmitForm)}>
<br/>  
  <h3 className="topic">PLEASE TELL US MORE ABOUT YOURSELF</h3>
  
  <br/>
  <div className="emptxt">
 <div className='content'>
   <Form.Group controlId="status">
        <Controller
          name="status"
          control={control}
          rules={{ required: 'Field is required' }}
          render={({ field }) => (

            <>

              <Form.Select

                {...field}

                as="select"

                className={errors.status ? 'is-invalid' : ''}>

                <option value = ""> Maritial Status </option>
                <option value="1">Married</option>
                <option value="2">UnMarried</option>
                <option value="3">Divorced</option>
                <option value="4">Widowed</option>
                
              </Form.Select>

              {errors.status  && (

                <div className="invalid-feedback">{errors.status.message}</div>

              )}

            </>

          )}

        />

</Form.Group>  
   
    <br/>
    <Form.Group controlId="newsletter">
          <div className="page2">
        Please tick Below if you are married in community of property or by customary law(prior to November 2000) and
        you have obtained your spouse's permission to apply for a TFG account.
      </div>
      <br/>
      <div>
        <Form.Check style={{display:'inline',marginRight:'5px',transform:'scale(1.2)'}}

          type="checkbox"

         

          {...register('newsletter', { required: 'Field is required' })}

          isInvalid={errors.newsletter}

        />
         < Form.Label > Yes, I have received permission from spouse to sign for TFG account.</Form.Label></div >
        {errors.newsletter && (

          <Form.Text className="invalid-feedback">Please Check the box.</Form.Text>

        )}

</Form.Group>
   
    <Form.Group controlId="group">
        <Controller
          name="group"
          control={control}
          rules={{ required: 'Field is required' }}
          render={({ field }) => (

            <>

              <Form.Select

                {...field}

                as="select"

                className={errors.group ? 'is-invalid' : ''}>

                <option value = "" > Ethnic Group</option>
                <option value="1">White</option>
                <option value="2">African</option>
                <option value="2">Indian</option>
                <option value="2">Coloured</option>
                <option value="2">Asian</option>
                <option value="2">I do not want to Answer</option>
              </Form.Select>

              {errors.group  && (

                <div className="invalid-feedback">{errors.group.message}</div>

              )}

            </>

          )}

        />

</Form.Group>     
   </div> 
   <br/>
 </div>
 <br/>
   <div className="row" >

                <div className="col">
                   {!isLastStep && <Button variant="primary" type="submit" className='nextBtn'>Next</Button>}
                 </div>
            </div>
</form>
</div>
);
}

export default Form2;