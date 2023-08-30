'use client'
import { useState } from 'react';
import Form1 from '../Form1/Form1';
import Form2 from '../Form1/Form2';
import Form3 from '../Form1/Form3';
import Navigation from '../Form1/Navigation';

export default function Page({onSubmit}) {
const [Step, setStep] = useState(0);

const handleStepNext = () => setStep(Step + 1);
const handleBack = () => setStep(Step - 1);


const renderForm = () => {
switch (Step) {
case 0:
return <Form1 onSubmit={handleStepNext} />;
case 1:
return <Form2 onSubmit={handleStepNext} />;
case 2:
return <Form3 onSubmit={handleStepNext} />;
default:
return null;
}
};

return (
<div>

{renderForm()}
<Navigation onNext={handleStepNext} onBack={handleBack} onstepNext={onSubmit} isFirstStep={Step === 0} isMedStep={Step===1 }  isLastStep={Step === 2} />
</div>
);
}