import React, { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import validator from 'validator';
import { inputhandler, resetErrors, resetReducers } from '../../redux/actions/mail';
import Wrapper from '../../components/wrapper';
import Loader from '../../components/loader'
import './index.css';

function Contact(props){
const {
    name,
    email,
    mobile,
    subject,
    message,
    nameErr,
    emailErr,
    mobileErr,
    subjectErr,
    messageErr,
    responseMsg,
    loading
} = useSelector(state=>state.mails);
//key state to store the keyboard key last pressed
const [key, setKey] = useState(0);
const dispatch = useDispatch();

useEffect(()=>{
      //Add event listener for all keyboard key
      // used to read backspace and delete when
      // message text area reaches max
      let ele = document.getElementById('message');
      if(ele) ele.addEventListener("keydown", handleKeyDown, true);
      // componentWillUnmount, reset all inputs
    return ()=>{
        if(ele)  ele.removeEventListener("keydown", handleKeyDown, true);
        dispatch(resetReducers());
    }
}, [])

const handleKeyDown= (event) => {
    console.log(event.keyCode)
    setKey((key)=>key = event.keyCode)
  }
const handleChange=(e)=>{
    e.preventDefault();
    // check if test bigger than max, only allow backspace and delete keys
    if(e.target.name === 'message' && message.trim().length > 500 && !(key== 8 || key == 46 )){
        dispatch(inputhandler({prop:'messageErr', value:'You have reached the limit'}));
        return;
    }
    dispatch(inputhandler({prop:[e.target.name], value:validator.escape(e.target.value)}))
}

const  isValidPhoneNumber = (inputtxt)=>{
  const phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,8}$/;
return (inputtxt.match(phoneno)) ?  true : false;
}

const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(resetErrors());

    if(!name.trim().length){
        dispatch(inputhandler({prop:'nameErr', value:'Invalid Name'}));
        return;
    }
    if(!validator.isEmail(email) || !email.trim().length){
        dispatch(inputhandler({prop:'emailErr', value:'Invalid Email'}));
        return;
    }
    if(!mobile.trim().length || !isValidPhoneNumber(mobile.trim())){
        dispatch(inputhandler({prop:'mobileErr', value:'Invalid Mobile Number'}));
        return;
    }
    if(!subject.trim().length){
        dispatch(inputhandler({prop:'subjectErr', value:'Invalid Subject'}));
        return;
    }
    if(!message.trim().length){
        dispatch(inputhandler({prop:'messageErr', value:'Invalid Sessage'}));
        return;
    }
    if(message.trim().length > 500){
        dispatch(inputhandler({prop:'messageErr', value:'You have reached the limit'}));
        return;
    }
    dispatch(inputhandler({prop:'loading', value:true}))
    const payload ={
        name: name.trim(),
        email: email.trim(),
        mobile: mobile.trim(),
        subject: subject.trim(),
        message: message.trim(),
    }

    console.log('Payload = ', JSON.stringify(payload));
    setTimeout(()=>{
        dispatch(resetReducers());
        dispatch(inputhandler({prop:'responseMsg', value:'Message successfully sent!'}))
    },3000)

}


    return(
        <Wrapper title={`Contact Us`} viewId='contact' desc={`Desmond Ademiluyi -  hands-on React (& Redux) and NodeJS Engineer, I have over 7 years’ experience working with JavaScript.`}>
           <div className="container">
           <div className="site-title text-center">
				<h3><i className="fa fa-phone" aria-hidden="true"></i> Contact Me</h3>
			</div>
<div className="col-md-offset-3 col-md-6">
    <div className="form-area"> 
    <p style={{textAlign:'center'}} className='text-primary'><i className="fa fa-envelope" aria-hidden="true"></i> desmondtoyus@gmail.com</p> 
    <br/>
    {responseMsg.length ? <p style={{textAlign:'center'}} className='text-success' ><i className="fa fa-check" aria-hidden="true"></i> {responseMsg}</p>: null} 
        <form role="form">
        <br style={{clear:'both'}}/>
                    <h3 className="form-title">Contact Form</h3>
    				<div className="form-group">
						<input type="text" className={`form-control ${nameErr? `err`:``}` }  value ={name} id="name" name="name" placeholder="Name" onChange={handleChange} required/>
                        {nameErr?<span className="help-block"><p id="characterLeft" className="help-block ">{nameErr}</p></span>:null} 
					</div>
					<div className="form-group">
						<input type="text" className={`form-control ${emailErr? `err`:``}` } value ={email} id="email" name="email" placeholder="Email" onChange={handleChange} required/>
                        {emailErr?<span className="help-block"><p id="characterLeft" className="help-block ">{emailErr}</p></span>:null} 
					</div>
					<div className="form-group">
						<input type="text" className={`form-control ${mobileErr? `err`:``}` } value ={mobile} id="mobile" name="mobile" placeholder="Mobile Number" onChange={handleChange} required/>
                        {mobileErr?<span className="help-block"><p id="characterLeft" className="help-block ">{mobileErr}</p></span>:null} 
					</div>
					<div className="form-group">
						<input type="text" className={`form-control ${subjectErr? `err`:``}` } value ={subject} id="subject" name="subject" placeholder="Subject" onChange={handleChange} required/>
                        {subjectErr?<span className="help-block"><p id="characterLeft" className="help-block ">{subjectErr}</p></span>:null}     
					</div>
                    <div className="form-group">
                    <textarea className={`form-control ${messageErr? `err`:``}` } type="textarea" value ={message} name="message" id="message" placeholder="Message" maxLength="140" onChange={handleChange} rows="7"></textarea>
                        {messageErr?<span className="help-block"><p id="characterLeft" className="help-block ">{messageErr}</p></span>:null}                   
                    </div>
            
        <button type="button" id="submit" name="submit" className="btn btn-primary pull-right" onClick={handleSubmit}>{loading&&<Loader size='10px' text=''/>}Submit Form</button>
        </form>
    </div>
</div>
</div>
         </Wrapper>
    )
}

export default memo(Contact);