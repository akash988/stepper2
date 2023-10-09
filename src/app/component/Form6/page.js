'use client'
import { useState } from 'react';
import Form1 from '../Form6/Form1';
import Form2 from '../Form6/Form2';
import Form3 from '../Form6/Form3';


export default function Home({onStepBack}) {
const [Step, setStep] = useState(0);

const handleNext = () => setStep(Step + 1);
const handleBack = () => setStep(Step - 1);


const renderForm = () => {
switch (Step) {
case 0:
return <Form1 onSubmit={handleNext} onNext={handleNext} onBack={handleBack} onStepBack={onStepBack} isFirstStep={Step === 0} isMedStep={Step===1 }  isLastStep={Step === 2} />;
case 1:
return <Form2 onSubmit={handleNext}onNext={handleNext} onBack={handleBack} onStepBack={onStepBack} isFirstStep={Step === 0} isMedStep={Step===1 }  isLastStep={Step === 2}  />;
case 2:
return <Form3 onSubmit={handleNext} onNext={handleNext} onBack={handleBack} onStepBack={onStepBack} isFirstStep={Step === 0} isMedStep={Step===1 }  isLastStep={Step === 2} />;
default:
return 
}
};

return (
<div>

{renderForm()}

</div>
);
}