"use client"
import Button from 'react-bootstrap/Button';
function Navigation({ onNext, onBack, isLastStep, isFirstStep ,onstepNext,isMedStep}) {
    return (
    <>
   
        <div className="row" >

                <div className="col">

                    {!isFirstStep && <Button variant="primary" onClick={onBack}>Back</Button>}

                </div>

                <div className="col">

                    {!isLastStep && <Button variant="primary" onClick={onNext}>Next</Button>}

                </div>
                <div className="col">

                    {isLastStep && <Button variant="primary" onClick={onstepNext}>Next</Button>}
                </div>

            </div></>
    );
    }
    
    export default Navigation;