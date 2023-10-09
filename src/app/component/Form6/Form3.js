import { useForm } from 'react-hook-form';
import image from 'next/image';
import Button from 'react-bootstrap/Button';
function Form3({ onSubmit }) {
const { handleSubmit} = useForm();

const onSubmitForm = (data) => {

onSubmit(data);
};

return (

<div className='containerMain'>
<form onSubmit={handleSubmit(onSubmitForm)}>
<br/>
    <h2 className='topic' >OPTIONAL MAGAZINES</h2>
    <h6 className='emptxt'>Please! choose whether you would like to subscribe be to any of our optional magazines listed below. The monthly
        subscription for the magazines will be billed to your TFG account. Click on the magazine cover for more
        information and magazine price. Foschini Retail Group (Pvt) Ltd is an authorized financial services provider.
    </h6>
    <br/>
    <div className='emptxt'>
    <div className="coltxt">
        <div class="row" style={{marginBottom: '11px'}}>
            <div class="form-group col-md-6">
                <div style={{display: 'flex'}}>
                    <div class="col">Platinum Club</div>
    
                    <div class="col"><img src="assets/super.png" class="img-fluid" alt="..."/></div>
    
                    <div class="col" style={{marginTop: '12px', marginLeft: '2px'}}>
                            <input type="radio" formControlName="ch10" value="yes"/> Yes
                            <input style={{marginLeft: '3px'}} type="radio" formControlName="ch10" value="no"/> No
                    </div>   
                </div>   
                    <div class="col-md-12">
    
                        <h6 style={{textAlign:'justify',fontSize:'10px'}}>By selecting yes i confirmed that i have read, understood and accepted the <a href="#"> Insurance policy & Disclosure Notice </a> & in perticular, the policy exclusions in respect of the insurance benefits that forms part of the Super club.</h6>
    
                    </div>
    
            </div>
            <div class="form-group col-md-6">
                <div style={{display: 'flex'}}>
                    <div class="col" style={{marginTop: '10px'}}>My Kitchen</div>
                    <div class="col"><img style={{height: '61px'}} src="assets/kitchen.png" class="img-fluid" alt="..."/></div>                 
                    <div class="col" style={{marginTop: '12px', marginLeft: '2px'}}>
                         <input  type="radio" formControlName="ch10" value="yes"/> Yes
                        <input style={{marginLeft: '3px'}} type="radio" formControlName="ch10" value="no"/> No                 
                </div>            
                </div>
    
            </div>
        </div> 
    <div class="row" style ={{marginBottom:'11px'}}>
            <div class="form-group col-md-6">
                <div style={{display: 'flex'}}>
                    <div class="col" style={{marginTop:'10px'}}>Club</div>
    
                    <div class="col"><img style={{height:'61px'}}src="assets/club.png" class="img-fluid" alt="..."/></div>
    
                    <div class="col" style={{marginTop: '12px', marginLeft: '2px'}}>
                            <input type="radio" name="rd7" formControlName="ch10" value="yes"/> Yes
                            <input style={{marginLeft: '3px'}} name="rd7" type="radio" formControlName="ch10" value="no"/> No
                    </div>   
                </div>   
                    <div class="col-md-12">
    
                        <h6 style={{textAlign:'justify',fontSize:'10px'}}>By selecting yes i confirmed that i have read, understood and accepted the <a href="#"> Insurance policy & Disclosure Notice </a> & in perticular, the policy exclusions in respect of the insurance benefits that forms part of the club.</h6>
    
                    </div>
    
            </div>
            <div class="form-group col-md-6">
                <div style={{display: 'flex'}}>
                    <div class="col" style={{marginTop:'10px'}}>Living Space</div>
                    <div class="col"><img style={{height:'61px'}} src="assets/living space.png" class="img-fluid" alt="..."/></div>                 
                    <div class="col" style={{marginTop: '12px', marginLeft: '2px'}}>
                         <input  type="radio" name="rd8" formControlName="ch10" value="yes"/> Yes
                        <input  style={{marginLeft: '3px'}}  name="rd8" type="radio" formControlName="ch10" value="no"/> No                 
                </div>             
                </div>
    
            </div>
        </div>
        <div class="row" style={{marginBottom: '11px'}}>
            <div class="form-group col-md-6">
                <div style={{display: 'flex'}}>
                    <div class="col">Super Club</div>
    
                    <div class="col"><img src="assets/super.png" class="img-fluid" alt="..."/></div>
    
                    <div class="col" style={{marginTop: '12px', marginLeft: '2px'}}>
                            <input type="radio" formControlName="ch10" value="yes"/> Yes
                            <input style={{marginLeft: '3px'}} type="radio" formControlName="ch10" value="no"/> No
                    </div>   
                </div>   
                    <div class="col-md-12">
    
                        <h6 style={{textAlign:'justify',fontSize:'10px'}}>By selecting yes i confirmed that i have read, understood and accepted the <a href="#"> Insurance policy & Disclosure Notice </a> & in perticular, the policy exclusions in respect of the insurance benefits that forms part of the Super club.</h6>
    
                    </div>
    
            </div>
            <div class="form-group col-md-6">
                <div style={{display: 'flex'}}>
                    <div class="col" style={{marginTop: '10px'}}>Man</div>
                    <div class="col"><img style={{height: '61px'}} src="assets/man.png" class="img-fluid" alt="..."/></div>                 
                    <div class="col" style={{marginTop: '12px', marginLeft: '2px'}}>
                         <input  type="radio" formControlName="ch10" value="yes"/> Yes
                        <input style={{marginLeft: '3px'}} type="radio" formControlName="ch10" value="no"/> No                 
                </div>            
                </div>
    
            </div>
        </div> 

        <div class="row" style={{marginBottom: '16px'}}>
            <div class="form-group col-md-6">
                <div class="kidsbox" style={{display: 'flex'}}>
                    <div class="col" style={{marginTop: '10px'}}>Kids Only</div>
    
                    <div class="col"><img style={{height: '61px'}} src="assets/kids.png" class="img-fluid" alt="..."/></div>
    
                    <div class="col" style={{marginTop: '12px', marginLeft: '2px'}}>
                            <input  type="radio" formControlName="ch10" value="yes"/> Yes
                            <input style={{marginLeft: '3px'}} type="radio" formControlName="ch10" value="no"/> No
                    </div>   
                </div>   
            
            </div>
            <div class="form-group col-md-6">
                <div style={{display: 'flex'}}>
                    <div class="col" style={{marginTop: '10px'}}>Sports Club</div>
                    <div class="col"><img style={{height: '61px'}} src="assets/sports.png" class="img-fluid" alt="..."/></div>                 
                    <div class="col" style={{marginTop: '12px', marginLeft: '2px'}}>
                         <input  type="radio" formControlName="ch10" value="yes"/> Yes
                        <input style={{marginLeft: '3px'}}  type="radio" formControlName="ch10" value="no"/> No                 
                </div>            
                </div>
    
            </div>
        </div>
        <div class="row" style={{marginBottom: '11px'}}>
            <div class="form-group col-md-6">
                <div class="kidsbox" style={{display: 'flex'}}>
                    <div class="col"  style={{marginTop: '10px'}}>ClubX</div>
    
                    <div class="col"><img  style={{height: '61px'}} src="assets/clubX.png" class="img-fluid" alt="..."/></div>
    
                    <div class="col"  style={{marginTop: '12px', marginLeft: '2px'}}>
                            <input  type="radio" formControlName="ch10" value="yes"/> Yes
                            <input style={{marginLeft: '3px'}} type="radio" formControlName="ch10" value="no"/> No
                    </div>   
                </div>   
    
            </div>
            <div class="form-group col-md-6">
                <div style={{display: 'flex'}}>
                    <div class="col" style={{marginTop: '10px'}}>Soccer Club</div>
                    <div class="col"><img style={{height: '61px'}}  src="assets/soccer.png" class="img-fluid" alt="..."/></div>                 
                    <div class="col" style={{marginTop: '12px', marginLeft: '2px'}}>
                         <input  type="radio" formControlName="ch10" value="yes"/> Yes
                        <input  style={{marginLeft: '3px'}}  type="radio" formControlName="ch10" value="no"/> No                 
                </div>            
                </div>
    
            </div>
        </div>
        <div class="row" style={{marginBottom: '11px'}}>
            <div class="form-group col-md-12">
                <div style={{display: 'flex'}}>
                    <div class="col" style={{marginTop: '19px'}}>Balanced Life</div>
    
                    <div class="col"><img style={{height: '61px'}} src="assets/balanced.png" class="img-fluid" alt="..."/></div>
    
                    <div class="col" style={{marginTop: '19px', marginLeft: '2px'}}>
                            <input  type="radio" formControlName="ch10" value="yes"/> Yes
                            <input style={{marginLeft: '3px'}} type="radio" formControlName="ch10" value="no"/> No
                    </div>   
                </div>   
    
            </div>
    </div>
    </div>
    <br/>
    <label class="emptxt" style={{fontSize: '11px',textAlign: 'justify'}}>* You may only subscribe to one of the following magazines:Platinum club, club or super club. T&C's apply to all magazines benefits,compititions and subscriptions.The death benefit that form part of club, platinum, super club is underwritten by Guradrisk life limited, and authorised financial service provider(FSE 76) and licensed life insurer in terms of the insurance act 18 of 2017. </label>
    
    
    </div>

    <br/>
    <div className="row">


    <div className="col">

 

    {<Button varient="success" className='nextBtn'>Submit</Button>}

 

    </div>


</div>
</form>
</div>
);
}

export default Form3;