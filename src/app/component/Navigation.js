import Button from 'react-bootstrap/Button';
function Navigation({ onNext, onBack, isLastStep, isFirstStep,isSecondStep,isThirdStep,isFourthStep,isFifthStep}) {
    return (
    
    <div className="row">

    <div className="col">

    {!isFirstStep && !isLastStep && <Button varient="success" onClick={onBack}>Back</Button>}

    </div>

    <div className="col">

    {!isLastStep && !isFirstStep && <Button varient="success" onClick={onNext}>Next</Button>}

    </div>
    

</div>

    );
    }
    
    export default Navigation;