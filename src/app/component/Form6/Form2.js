import { useForm } from 'react-hook-form';

function Form2({ onSubmit }) {
const { handleSubmit, register, errors } = useForm();

const onSubmitForm = (data) => {
// Handle form submission logic
onSubmit(data);
};

return (
<div className="pcontainer">
<form onSubmit={handleSubmit(onSubmitForm)}>
<br/>
<h3 className="topic">OPTIONAL PRODUCTS WITH INSURANCE BENEFITS</h3>

<h6 className="emptxt">Please indicate if you would like to take up one of our optional products which include insurance benefits. The
    monthly premium for the insurance will be billed to your TFG Account. Click on the product logo for pricing and
    product summary.

    Foschini Retail Group (Pty) Ltd is an authorised financial services provider.</h6><br/>


   <div className="emptext" styleName="font-size: 13px;">
    <div className="row">
        <div className="emptxt" styleName="font-size: 13px;">
            <div className="row" styleName="margin-bottom: 11px;">
                <div className="form-group col-md-12">
                <div styleName="display: flex;">
                <div className="col">Account Balance Protection Insurer : Guardrisk Life Ltd</div>
                <div className="col"><img src="Img2.png" className="img-fluid" alt="..."/></div>
                <div className="col">
                    <input type="radio" name="rd1" formControlName="ch6" value="yes"/> Yes <br/>
                    <input type="radio"  name="rd1" formControlName="ch6" value="no"/> No
                </div>
                <div className="col"><a href="#">Click here for full Policy and Disclosure Notice</a></div>
            </div>
                </div>
            </div>
        </div>
        <div className="emptxt" styleName="font-size: 13px;">
            <div className="row" styleName="margin-bottom: 11px;">
                <div className="form-group col-md-12">
                <div styleName="display: flex;">
                <div className="col">Funeral Plan Insurer : Guardrisk Life Ltd</div>
                <div className="col"><img src="Img3.png" className="img-fluid" alt="..."/></div>
                <div className="col">
                    <input  type="radio" name="rd2" formControlName="ch7" value="yes"/>Yes<br/>
                    <input type="radio" name="rd2" formControlName="ch7" value="no"/>No
                </div>
                <div className="col"><a href="#">Click here for full Policy and Disclosure Notice</a></div>
            </div>
                </div>
            </div>
        </div>
        <div className="emptxt" styleName="font-size: 13px;">
            <div className="row" styleName="margin-bottom: 11px;">
                <div className="form-group col-md-12">
                <div styleName="display: flex;">
                <div className="col" >TFG Legal Plan Gold Insurance Benefits underwritten by Guardriek insurance Co Ltd</div>
                <div className="col"><img src="Img2.png" className="img-fluid" alt="..."/></div>
                <div className="col">
                    <input  type="radio" name="rd3" formControlName="ch8" value="yes"/>Yes<br/>   
                    <input type="radio" name="rd3" formControlName="ch8" value="no"/>No
                </div>
                <div className="col"><a href="#">Click here for full Policy and Disclosure Notice</a></div>
            </div>
        </div>  
            </div></div>         
    </div>
   </div>
<br/>
 <div className="row justify-content-md-center">
  <div className="col col-lg-12">
    <div className="emptxt">
      <input formControlName="ch9" className="form-check-input" type="checkbox" value=""/>
        <span styleName="text-indent: 0.1cm;">
            I confirm that I have read, understood & accepted the insurance policy & disclosure notice/s and/or
            Membership Guide (as applicable), & in particular, the policy exclusions in respect of the insurance
            benefits and /or products selected
  </span><br/>
 
    </div>
  </div>     
</div>
<br/>
    <h5 className="topic" styleName="color:grey">Optional Value-Affored Service</h5>

    <h6 className="emptxt">Please indicate if you would like to activate our optional alert service</h6>
    <div className="emptxt" styleName="font-size: 13px;">
    <div className="row">
        <div className="col" styleName="text-align: left;">Fraud Alert Service</div>
        <div className="col"><img src="Img5.png" className="img-fluid" alt="..."/></div>
        <div className="col">
            <input  type="radio" name="rd4" formControlName="ch10" value="yes"/>Yes<br/>
            <input type="radio" name="rd4" formControlName="ch10" value="no"/>No
        </div>
        <div className="col"><a href="#">Click here for full Policy and Disclosure Notice</a></div>
    </div>
    </div>
</form>
</div>
);
}

export default Form2;