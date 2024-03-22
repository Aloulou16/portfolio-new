import React from "react";
import './contact.css';
import { useForm, ValidationError } from '@formspree/react';
import lottie from "lottie-react";
import doneanimation from "../../../public/done.json"

const Contact  =()=>{
    const [state, handleSubmit] = useForm("xbjnawpl");

    if (state.succeeded) {
        return <p><lottie animationData={doneanimation}/>Thanks for joining!</p>;
    }

return (
    <section className="contact-us">
        <h1 className="title"><span ><i class="fa-regular fa-envelope"></i></span>
contact us
</h1>
<p className="subtitle">Contact us for more information and get notified when i publish something new</p>



<div className="flex">
<form onSubmit={handleSubmit} className="">
    <div className="flex">
    <label htmlFor="email"> email adress   :</label>
    <input required type="email" name="email" id="email" />
    <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
    </div>

    <div className="flex" style={{marginTop:"24px"}} >
    <label htmlFor="message">Your message:</label>
    <textarea required name="Message" id="message" ></textarea>
    <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
    </div>
    <button type="submit" disabled={state.submitting}>submit</button></form>
    <div className="border animation">animation</div>
</div>
    </section>
);
}
export default Contact ;