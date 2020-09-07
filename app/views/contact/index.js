import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react';
import Wrapper from '../../components/wrapper';
import './index.css';

function Contact(props){

    const handleLink = (e)=>{
        e.preventDefault();
        console.log(e.target.id);
        switch (e.target.id) {
            case 'readmore':
                return props.history.push(`/about`);
            case 'contact':
                return props.history.push(`/contact`);
            case 'portfolio':
                return props.history.push(`/portfolio`);
            default:
                return;
        }
    }

    return(
        <Wrapper title={`Contact Us`} viewId='contact' desc={`Desmond Ademiluyi -  hands-on React (& Redux) and NodeJS Engineer, I have over 7 years’ experience working with JavaScript.`}>
           <div className="container">
           <div className="site-title text-center">
				<h3>Contact Me</h3>
			</div>
<div className="col-md-offset-3 col-md-6">
    <div className="form-area"> 
    <p style={{textAlign:'center'}} className='text-success' > desmondtoyus@gmail.com</p> 
    {/* <p style={{textAlign:'center'}} className='text-success' > +1 949 328 7310</p>  */}
        <form role="form">
        <br style={{clear:'both'}}/>
                    <h3 className="form-title">Contact Form</h3>
    				<div className="form-group">
						<input type="text" className="form-control" id="name" name="name" placeholder="Name" required/>
					</div>
					<div className="form-group">
						<input type="text" className="form-control" id="email" name="email" placeholder="Email" required/>
					</div>
					<div className="form-group">
						<input type="text" className="form-control" id="mobile" name="mobile" placeholder="Mobile Number" required/>
					</div>
					<div className="form-group">
						<input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" required/>
					</div>
                    <div className="form-group">
                    <textarea className="form-control" type="textarea" id="message" placeholder="Message" maxLength="140" rows="7"></textarea>
                        <span className="help-block"><p id="characterLeft" className="help-block ">You have reached the limit</p></span>                    
                    </div>
            
        <button type="button" id="submit" name="submit" className="btn btn-primary pull-right">Submit Form</button>
        </form>
    </div>
</div>
</div>
         </Wrapper>
    )
}

export default memo(Contact);