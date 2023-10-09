import { useForm,Controller} from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
function Form5({ onSubmit ,onNext,isLastStep, isFirstStep}) {

 const [Title, setTitle] = useState("");

const { handleSubmit,control, formState:{errors,isValid}} = useForm({
  
});
const onSubmitForm = (data) => {

onSubmit(data);
onNext();
};

return (
<div className='containerMain'>
<Form onSubmit={handleSubmit(onSubmitForm)}>
<br/>  
  <h3 className="topic">FAMILY REFERENCE</h3>
  <label className="emptxt">Please give details of a family member.</label>
  <br/>
  <br/>
  <div className='content'> 
   
<Form.Group controlId="relation">
        <Controller
          name="relation"
          control={control}
          rules={{ required: 'Field is required' }}
          render={({ field }) => (

            <>

              <Form.Select

                {...field}

                as="select"

                className={errors.relation  ? 'is-invalid' : ''}>

                <option value = "" > Relation to you </option>

               <option value="1">Husband</option>
        <option value="2">Father</option>
        <option value="3">Mother</option>
        <option value="4">Wife</option>
        <option value="5">Guardian</option>
        <option value="6">Partner</option>
        <option value="7">Other</option>

              </Form.Select>

              {errors.relation  && (

                <div className="invalid-feedback">{errors.relation.message}</div>

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
     <Form.Control {...field} type="text"  placeholder="First Name" 
    //  value={Title} onChange={(e)=>{setTitle(e.target.value)}}
      className={errors.FName  ? 'is-invalid' : ''} 
      
            />
     {errors.FName && ( 
      <div className='invalid-feedback'>{errors.FName.message}</div>
      )}
     </>
     )}
     /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
       <Controller
     name="LName"
     control={control}
     rules={{required:'field is required'}}
     render={({field})=>(
     <>
     <Form.Control {...field} type="text"  placeholder="Last Name"  className={errors.LName  ? 'is-invalid' : ''}/>
     {errors.LName && <Form.Text className="invalid-feedback">Field is Required</Form.Text> } 
     </>
     )}
     /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Controller
     name="SACell"
     
     control={control}
     rules={{required:'field is required',pattern:'[0-9]',maxLength:10,minLength:10}}
     render={({field})=>(
     <>
     <Form.Control {...field} type="number"  placeholder="Contact Number"  className={errors.SACell  ? 'is-invalid' : ''} />
     {errors.SACell && <Form.Text className="invalid-feedback">Field is Required</Form.Text> } 
     </>
     )}
     /> 
      </Form.Group>
      <br/>  
  <h3 className='topic'>PERSONAL REFERENCE</h3>
  <label className='emptxt'>Please give details of a friend or family member not living with you</label>
  <br/>
  <br/>
  <Form.Group className="mb-3" controlId="formBasicPassword">
        <Controller
     name="FName1"
     control={control}
     rules={{required:'field is required'}}
     render={({field})=>(
     <>
     <Form.Control {...field} type="text"  placeholder="First Name"  className={errors.FName1  ? 'is-invalid' : ''}/>
     {errors.FName1 && <Form.Text className="invalid-feedback">Field is Required</Form.Text> } 
     </>
     )}
     /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Controller
     name="LName1"
     control={control}
     rules={{required:'field is required'}}
     render={({field})=>(
     <>
     <Form.Control {...field} type="text"  placeholder="Last Name"  className={errors.LName1  ? 'is-invalid' : ''}/>
     {errors.LName1 && <Form.Text className="invalid-feedback">Field is Required</Form.Text> } 
     </>
     )}
     /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Controller
     name="SACell1"
     control={control}
     rules={{required:'field is required',pattern:'[0-9]',maxLength:10,minLength:10}}
     render={({field})=>(
     <>
     <Form.Control {...field} type="number"  placeholder="Contact Number"  className={errors.SACell1  ? 'is-invalid' : ''} />
     {errors.SACell1 && <Form.Text className="invalid-feedback">Field is Required</Form.Text> } 
     </>
     )}
     /> 
      </Form.Group>
  </div>
      <br/>
      <div className="row">
    <div className="col">
    {!isLastStep && !isFirstStep && <Button varient="success" type="submit" className='nextBtn'>Next</Button>}
    </div>
</div>
</Form>
</div>
);
}

export default Form5;