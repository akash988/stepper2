'use client'
import Form from 'react-bootstrap/Form';
import React from 'react';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
function Form1({ onSubmit ,onNext, isLastStep}) {
  

const { handleSubmit,errors } = useForm();

const onSubmitForm = (data) => {

onSubmit(data);
};

return (
<div className='containerMain'>

<form onSubmit={handleSubmit(onSubmitForm)}>

<br/>  

<h5 className='topic'>PERMISSIONS TO PERSONALISED OFFERS & UPDATES</h5>
<br/>
<div className='emptxt'>
<label > AS a TFG Account customer, you'll qualify for personalised offers and updates from all of TFG's brands,

  including cellular, insurance and publishing offers. Do you agree to us sending you these offers</label>

  <br/>
  <br/>

  <div className="darkGrey">

            <div className="row justify-content-md-center">

                <div className="col">

                <span>SMS</span>

                </div>

                <div className="col">

                <input className="checkBorder" type="checkbox" formControlName="ch1" />

                <span style={{paddingLeft:'5px'}}>

                    Yes

                  </span>

                </div>    

            </div>
            <br/>

            <div className="row justify-content-md-center">

                <div className="col">

                    <span>Email</span>

                    </div>

                    <div className="col">

                    <input className="checkBorder" type="checkbox" formControlName="ch2"/>

                    <span style={{paddingLeft:'5px'}} >

                        Yes

                      </span>

                    </div>  

            </div>
              < br/>

            <div className="row justify-content-md-center">

                <div className="col">

                    <span>Telephone</span>

                    </div>

                    <div className="col">

                    <input className="checkBorder" type="checkbox" formControlName="ch3" />

                    <span style={{paddingLeft:'5px'}} >

                        Yes

                      </span>

                    </div>      

            </div>

             < br/>

            <div className="row justify-content-md-center">

                <div className="col">

                    <span>Mail/Post</span>

                    </div>

                    <div className="col">

                    <input className="checkBorder" type="checkbox" formControlName="ch4" />

                    <span style={{paddingLeft:'5px'}} >

                        Yes

                      </span>

                    </div>      

            </div>

        </div>  

        <br/>

        <label>Do you agree that TF may share your personal information with selected business partners to market their

            products to you?</label>

        <br/><br/>

        <div className="row justify-content-md-center">

                <div className="col">

                    <span>Third Party Marketing</span>

                    </div>

                    <div className="col">

                    <input className="checkBorder" type="checkbox" formControlName="ch4" />

                    <span style={{paddingLeft:'5px'}}>

                        Yes

                      </span>

                    </div>      

            </div>
            </div>
            <br/>
            <div className="row">

    <div className="col">
    {!isLastStep && <Button variant="primary" className='nextBtn' onClick={onNext}>Next</Button>}
    </div>
</div>

           

</form>

</div>
);
}

export default Form1;