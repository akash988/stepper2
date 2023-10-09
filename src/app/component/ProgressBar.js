import React from 'react';
function ProgressBar({ currentStep }) {
  
    const data =["Basic Info","Employment","Financial","Contact","Reference","Permission"]
    const steps = ['1', '2', '3', '4', '5', '6'];
    return (
      <div className="pcontainer">
      <div className='row1'>
       <div className='row row-cols-6'>
       {steps.map((step,index) => (
          <div className='col'>
             <div  className="labels">{data[index]}</div>
            </div>
        ))}
        </div>
        </div>
        <div className='row2'>
        <div className='row row-cols-6'>
       {steps.map((step, index) => (
          <div className='col'>
              <div key={index} className={`step ${currentStep === index ? 'active' : ''}`}>
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

  
