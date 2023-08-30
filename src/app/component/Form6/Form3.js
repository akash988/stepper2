import { useForm } from 'react-hook-form';
import image from 'next/image';

function Form3({ onSubmit }) {
const { handleSubmit} = useForm();

const onSubmitForm = (data) => {
// Handle form submission logic
onSubmit(data);
};

return (

<div className='pcontainer'>
<form onSubmit={handleSubmit(onSubmitForm)}>
<br/>
    <h2 >OPTIONAL MAGAZINES</h2>
    <h6>Please! choose whether you would like to subscribe be to any of our optional magazines listed below. The monthly
        subscription for the magazines will be billed to your TFG account. Click on the magazine cover for more
        information and magazine price. Foschini Retail Group (Pvt) Ltd is an authorized financial services provider.
    </h6>
    <br/>
    <div className="coltxt">
        <div className="row" >
            <div className="form-group col-md-6">
                <div >
                    <div className="col">Platinum Club</div>
                    <div className="col"><img src="super.png" className="img-fluid" alt="..."/></div>
                    <div className="col">
                            <input  type="radio" name="rd5" formControlName="ch10" value="yes"/> Yes
                            <input name="rd5" type="radio" formControlName="ch10" value="no"/> No
                    </div>   
                </div>   
                    <div className="col-md-12">
                        <h6>By selecting yes i confirmed that i have read, understood and accepted the <a href="#"> Insurance policy & Disclosure Notice </a> & in perticular, the policy exclusions in respect of the insurance benefits that forms part of the platinum club.</h6>
                    </div>
            </div>
            <div className="form-group col-md-6">
                <div >
                    <div className="col" >MyKitchen</div>
                    <div className="col"><img  src="kitchen.png" className="img-fluid" alt="..."/></div>                 
                    <div className="col" >
                         <input  type="radio"  name="rd6" formControlName="ch10" value="yes"/> Yes
                        <input   name="rd6" type="radio" formControlName="ch10" value="no"/> No                 
                </div>            
                </div>
    
            </div>
    </div>
    <div class="row">
            <div class="form-group col-md-6">
                <div styleName="display: flex;">
                    <div class="col" styleName="margin-top: 10px;">Club</div>
    
                    <div class="col"><img styleName="height: 61px;" src="club.png" class="img-fluid" alt="..."/></div>
    
                    <div class="col" styleName="margin-top: 12px; margin-left: 2px;">
                            <input type="radio" name="rd7" formControlName="ch10" value="yes"/> Yes
                            <input styleName="margin-left: 3px;" name="rd7" type="radio" formControlName="ch10" value="no"/> No
                    </div>   
                </div>   
                    <div class="col-md-12">
    
                        <h6 styleName="margin-top: 7px;font-size: 7px;">By selecting yes i confirmed that i have read, understood and accepted the <a href="#"> Insurance policy & Disclosure Notice </a> & in perticular, the policy exclusions in respect of the insurance benefits that forms part of the club.</h6>
    
                    </div>
    
            </div>
            <div class="form-group col-md-6">
                <div styleName="display: flex;">
                    <div class="col" styleName="margin-top: 10px;">Living Space</div>
                    <div class="col"><img styleName="height: 61px;" src="living space.png" class="img-fluid" alt="..."/></div>                 
                    <div class="col" styleName="margin-top: 12px; margin-left: 2px;">
                         <input  type="radio" name="rd8" formControlName="ch10" value="yes"/> Yes
                        <input  styleName="margin-left: 3px;"  name="rd8" type="radio" formControlName="ch10" value="no"/> No                 
                </div>             
                </div>
    
            </div>
        </div>
        <div class="row" styleName="margin-bottom: 11px;">
            <div class="form-group col-md-6">
                <div styleName="display: flex;">
                    <div class="col">Super Club</div>
    
                    <div class="col"><img src="super.png" class="img-fluid" alt="..."/></div>
    
                    <div class="col" styleName="margin-top: 12px; margin-left: 2px;">
                            <input type="radio" formControlName="ch10" value="yes"/> Yes
                            <input styleName="margin-left: 3px;" type="radio" formControlName="ch10" value="no"/> No
                    </div>   
                </div>   
                    <div class="col-md-12">
    
                        <h6 styleName="margin-top: 7px;font-size: 7px;">By selecting yes i confirmed that i have read, understood and accepted the <a href="#"> Insurance policy & Disclosure Notice </a> & in perticular, the policy exclusions in respect of the insurance benefits that forms part of the Super club.</h6>
    
                    </div>
    
            </div>
            <div class="form-group col-md-6">
                <div styleName="display: flex;">
                    <div class="col" styleName="margin-top: 10px;">Man</div>
                    <div class="col"><img styleName="height: 61px;" src="man.png" class="img-fluid" alt="..."/></div>                 
                    <div class="col" styleName="margin-top: 12px; margin-left: 2px;">
                         <input  type="radio" formControlName="ch10" value="yes"/> Yes
                        <input styleName="margin-left: 3px;" type="radio" formControlName="ch10" value="no"/> No                 
                </div>            
                </div>
    
            </div>
        </div> 

        <div class="row" styleName="margin-bottom: 16px;">
            <div class="form-group col-md-6">
                <div class="kidsbox" styleName="display: flex;">
                    <div class="col" styleName="margin-top: 10px;">Kids Only</div>
    
                    <div class="col"><img styleName="height: 61px;" src="kids.png" class="img-fluid" alt="..."/></div>
    
                    <div class="col" styleName="margin-top: 12px;margin-left: 2px;">
                            <input  type="radio" formControlName="ch10" value="yes"/> Yes
                            <input styleName="margin-left: 3px;" type="radio" formControlName="ch10" value="no"/> No
                    </div>   
                </div>   
            
            </div>
            <div class="form-group col-md-6">
                <div styleName="display: flex;">
                    <div class="col" styleName="margin-top: 10px;">Sports Club</div>
                    <div class="col"><img styleName="height: 61px;" src="sports.png" class="img-fluid" alt="..."/></div>                 
                    <div class="col" styleName="margin-top: 12px;margin-left: 2px;">
                         <input  type="radio" formControlName="ch10" value="yes"/> Yes
                        <input styleName="margin-left: 3px;" type="radio" formControlName="ch10" value="no"/> No                 
                </div>            
                </div>
    
            </div>
        </div>
        <div class="row" styleName="margin-bottom: 11px;">
            <div class="form-group col-md-6">
                <div class="kidsbox" styleName="display: flex;">
                    <div class="col"  styleName="margin-top: 10px;">ClubX</div>
    
                    <div class="col"><img  styleName="height: 61px;" src="clubX.png" class="img-fluid" alt="..."/></div>
    
                    <div class="col" styleName="margin-top: 12px;margin-left: 2px;">
                            <input  type="radio" formControlName="ch10" value="yes"/> Yes
                            <input styleName="margin-left: 3px;" type="radio" formControlName="ch10" value="no"/> No
                    </div>   
                </div>   
    
            </div>
            <div class="form-group col-md-6">
                <div styleName="display: flex;">
                    <div class="col"  styleName="margin-top: 10px;">Soccer Club</div>
                    <div class="col"><img styleName="height: 61px;" src="soccer.png" class="img-fluid" alt="..."/></div>                 
                    <div class="col" styleName="margin-top: 12px;margin-left: 2px;">
                         <input  type="radio" formControlName="ch10" value="yes"/> Yes
                        <input styleName="margin-left: 3px;" type="radio" formControlName="ch10" value="no"/> No                 
                </div>            
                </div>
    
            </div>
        </div>
        <div class="row" styleName="margin-bottom: 11px;">
            <div class="form-group col-md-12">
                <div styleName="display: flex;">
                    <div class="col" styleName="margin-top: 19px;">Balanced Life</div>
    
                    <div class="col"><img styleName="height: 61px;" src="balanced.png" class="img-fluid" alt="..."/></div>
    
                    <div class="col" styleName="margin-top: 19px;margin-left: 2px;">
                            <input  type="radio" formControlName="ch10" value="yes"/> Yes
                            <input styleName="margin-left: 3px;" type="radio" formControlName="ch10" value="no"/> No
                    </div>   
                </div>   
    
            </div>
    </div>
    </div>
    <br/>
    <label class="emptxt" styleName="font-size: 11px;text-align: justify;">* You may only subscribe to one of the following magazines:Platinum club, club or super club. T&C's apply to all magazines benefits,compititions and subscriptions.The death benefit that form part of club, platinum, super club is underwritten by Guradrisk life limited, and authorised financial service provider(FSE 76) and licensed life insurer in terms of the insurance act 18 of 2017. </label>
    
    
    

    <br/>
</form>
</div>
);
}

export default Form3;