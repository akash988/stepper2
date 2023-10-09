import { useForm,Controller } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import React from 'react';
import Button from 'react-bootstrap/Button';
function Form2({ onNext, isLastStep, isFirstStep }) {
const { handleSubmit,control, formState:{errors,isValid}} = useForm();
 

const onSubmit = (data) => {

console.log(data);

  onNext();

};

return (
<div className='containerMain'>
<Form onSubmit={handleSubmit(onSubmit)}>
<br/>  
  <h3 className="topic">PLEASE COMPLETE YOUR EMPLOYMENT DETAILS</h3>
  <h6 className="emptxt">Please tell us more about your job.</h6>
  <br/>
  <div className='content'>
    <Form.Group controlId="emp">
        <Controller
          name="emp"
          control={control}
          rules={{ required: 'Field is required' }}
          render={({ field }) => (

            <>

              <Form.Select

                {...field}

                as="select"

                className={errors.emp ? 'is-invalid' : ''}>

                <option value = "" > Employment Type </option>
                <option value="1">Permanently Employed</option>
                <option value="2">Self Employed</option>
                <option value="3">Employed on Contract Basis</option>
                <option value="4">Home Executive(House Wife)</option>
                <option value="5">Student</option>
                <option value="6">Retired</option>
                <option value="7">Receive a State Grant</option>
                <option value="8">Not Employed</option>
              </Form.Select>

              {errors.emp  && (

                <div className="invalid-feedback">Please select a field</div>

              )}

            </>

          )}

        />

</Form.Group>     
      
    
    <br/>
    <Form.Group controlId="type">
        <Controller
          name="type"
          control={control}
          rules={{ required: 'Field is required' }}
          render={({ field }) => (

            <>

              <Form.Select

                {...field}

                as="select"

                className={errors.type ? 'is-invalid' : ''}>

                <option value = "" > Type Of Students </option>
                <option value="1">Full Time</option>
                <option value="2">Part Time</option>
              </Form.Select>

              {errors.type  && (

                <div className="invalid-feedback">{errors.type.message}</div>

              )}

            </>

          )}

        />

</Form.Group>     
      
    
    <br/>
    <Form.Group controlId="catg">
        <Controller
          name="catg"
          control={control}
          rules={{ required: 'Field is required' }}
          render={({ field }) => (

            <>

              <Form.Select

                {...field}

                as="select"

                className={errors.catg ? 'is-invalid' : ''}>
                <option value = "" > Employment Category </option>
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

              {errors.catg  && (

                <div className="invalid-feedback">{errors.catg.message}</div>

              )}

            </>

          )}

        />

</Form.Group>     
      
    
    <br/>
    <Form.Group controlId="level">
        <Controller
          name="level"
          control={control}
          rules={{ required: 'Field is required' }}
          render={({ field }) => (

            <>

              <Form.Select

                {...field}

                as="select"

                className={errors.level ? 'is-invalid' : ''}>

                <option value = "" > Employment Level </option>
                <option value="1">Junior/Mid-Level</option>
                <option value="2">Senior Manager</option>
                <option value="3">Executive</option>
              </Form.Select>

              {errors.level  && (

                <div className="invalid-feedback">{errors.level.message}</div>

              )}

            </>

          )}

        />

</Form.Group>     
      
   
    <br/>
    <Form.Group className="mb-3" controlId="name">
     <Controller
     name="name"
     control={control}
     rules={{required:'field is required'}}
     render={({field})=>(
     <>
     <Form.Control {...field} type="text" placeholder="Educational Institution" className={errors.name ? 'is-invalid' : ''} />
     {errors.name && <Form.Text className='text-danger '>Field is Required</Form.Text> } 
     </>
     )}
     /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="ename">
        <Controller
     name="ename"
     control={control}
     rules={{required:'field is required'}}
     render={({field})=>(
     <>
     <Form.Control {...field} type="text"  placeholder="Employer Name" className={errors.ename ? 'is-invalid' : ''} />
     {errors.name && <Form.Text className="invalid-feedback">Field is Required</Form.Text> } 
     </>
     )}
     /> 
      </Form.Group>
<br/>
  </div>
<div className="row">
    <div className="col">
    {!isLastStep && !isFirstStep && <Button type="submit" className='nextBtn' varient="success"  >Next</Button>}
    </div>
</div>
</Form>
</div>
);
}

export default Form2;