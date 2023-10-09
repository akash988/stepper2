'use client'
import { useState } from 'react';
import Form1 from './component/Form1/page';
import Form2 from '../app/component/Form2';
import Form3 from '../app/component/Form3';
import Form4 from '../app/component/Form4';
import Form5 from '../app/component/Form5';
import Form6 from './component/Form6/page';
import ProgressBar from '../app/component/ProgressBar';
import Header from './component/Header/page'
import Footer from './component/Footer/page'

export default function Home() {
const [currentStep, setCurrentStep] = useState(0);

const handleNext = () => setCurrentStep(currentStep + 1);
const handleBack = () => setCurrentStep(currentStep - 1);

const renderForm = () => {
switch (currentStep) {
case 0:
return <Form1 onSubmit={handleNext} onNext={handleNext} onBack={handleBack} isFirstStep={currentStep === 0} isSecondStep={currentStep === 1} isThirdStep={currentStep === 2} isFourthStep={currentStep === 5} isFifthStep={currentStep === 4} isLastStep={currentStep === 5}/>;
case 1:
return <Form2 onSubmit={handleNext} onNext={handleNext} onBack={handleBack} isFirstStep={currentStep === 0} isSecondStep={currentStep === 1} isThirdStep={currentStep === 2} isFourthStep={currentStep === 5} isFifthStep={currentStep === 4} isLastStep={currentStep === 5}/>;
case 2:
return <Form3 onSubmit={handleNext} onNext={handleNext} onBack={handleBack} isFirstStep={currentStep === 0} isSecondStep={currentStep === 1} isThirdStep={currentStep === 2} isFourthStep={currentStep === 5} isFifthStep={currentStep === 4} isLastStep={currentStep === 5}/>;
case 3:
return <Form4 onSubmit={handleNext} onNext={handleNext} onBack={handleBack} isFirstStep={currentStep === 0} isSecondStep={currentStep === 1} isThirdStep={currentStep === 2} isFourthStep={currentStep === 5} isFifthStep={currentStep === 4} isLastStep={currentStep === 5} />;
case 4:
return <Form5 onSubmit={handleNext} onNext={handleNext} onBack={handleBack} isFirstStep={currentStep === 0} isSecondStep={currentStep === 1} isThirdStep={currentStep === 2} isFourthStep={currentStep === 5} isFifthStep={currentStep === 4} isLastStep={currentStep === 5}/>;
case 5:
return <Form6 onSubmit={handleNext} onStepBack={handleBack}/>;

default:
return <p>Submit</p>
}
};

return (
<div>
<Header/>
<ProgressBar currentStep={currentStep} />
{renderForm()}
<Footer/>
</div>
);
}