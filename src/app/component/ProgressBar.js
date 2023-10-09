import React from 'react';
function ProgressBar({ currentStep }) {

    const data =["Basic Info","Employment","Financial","Contact","Reference","Permission"]

    const steps = ['1', '2', '3', '4', '5', '6'];

    return (

      <div className="pcontainer">

      <div className='srow1'>

      <div className='row smallStepper'><div>{data[currentStep]}</div></div>

      <hr className='stepperHR'></hr>

       <div className='row row-cols-6'>

       {steps.map((index) => (

          <div className='col'>

             <div key={index} className="labels">{data[index-1]}</div>

            </div>

        ))}

        </div>

        </div>

        <div className='row2' style={{marginTop:'18px'}}>

        <div className='row row-cols-6'>

       {steps.map((step, index) => (

          <div className='col'>

              <div key={index.step} className={`step ${currentStep === index ? 'active' : ''} ${currentStep>index ? 'completed':''}`}>

                {step}

              </div>

            </div>

        ))}

        </div>

        </div>

    </div>

    );

    }

export default ProgressBar;

 

 
