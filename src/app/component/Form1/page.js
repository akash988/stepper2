'use client'
import { useState } from 'react';
import Form1 from '../Form1/Form1';
import Form2 from '../Form1/Form2';
import Form3 from '../Form1/Form3';


export default function Page({onSubmit}) {
const [Step, setStep] = useState(0);

const handleStepNext = () => setStep(Step + 1);
const handleBack = () => setStep(Step - 1);


const renderForm = () => {
switch (Step) {
case 0:
return <Form1 onSubmit={handleStepNext} onNext={handleStepNext} onBack={handleBack} onstepNext={onSubmit} isFirstStep={Step === 0} isMedStep={Step===1 }  isLastStep={Step === 2}/>;
case 1:
return <Form2 onSubmit={handleStepNext} onNext={handleStepNext} onBack={handleBack} onstepNext={onSubmit} isFirstStep={Step === 0} isMedStep={Step===1 }  isLastStep={Step === 2}/>;
case 2:
return <Form3 onSubmit={handleStepNext} onNext={handleStepNext} onBack={handleBack} onstepNext={onSubmit} isFirstStep={Step === 0} isMedStep={Step===1 }  isLastStep={Step === 2}/>;
default:
return null;
}
};

return (
<div>

{renderForm()}

</div>
);
}