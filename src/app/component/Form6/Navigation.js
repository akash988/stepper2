import Button from 'react-bootstrap/Button';
function Navigation({ onNext, onBack, isLastStep, isFirstStep,onStepBack,isMidStep}) {
    return (
    <div className="container">
    {isFirstStep && <Button variant="primary" onClick={onStepBack}>Back</Button>}   
    {!isFirstStep && <Button variant="primary" onClick={onBack}>Back</Button>}
    {!isLastStep && <Button variant="primary" onClick={onNext}>Next</Button>}
    

    </div>
    );
    }
    
    export default Navigation;