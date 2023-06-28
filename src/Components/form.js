import React from "react";
import { useForm } from "react-hook-form";



function Form(){

    const {
        register, 
        formState: {errors},
        handleSubmit,
        reset
      } = useForm({mode: "onTouched"})
    
      const submit = (value) => {
        console.log(value)
        reset();
      }
    return(
        <div className="form_block">
            <div className="form_text">
                <div className="form_title">
                    <p>JOIN HYDRA</p>
                </div>
                <div className="form_subtitle">
                    <p>Let’s Build Your VR Experiences</p>
                </div>
            </div>
            
            <form onSubmit={handleSubmit(submit)}>
            <div className="form_block_one">
                <input placeholder="First Name" {...register('name',{
                    required: "Required",
                    minLength: {
                    value: 2,
                    message: "Minimum 2 characters"}
                    ,
                    pattern: {
                    value: /[A-Z]$/i,
                    message: "Invalid name"},
          
                    })} 
                className={errors.name ? "invalid" : ""}/>
                
            <input placeholder="Last Name" {...register('lastName',{
                    required: "Required",
                    minLength: {
                    value: 2,
                    message: "Minimum 2 characters"}
                    ,
                    pattern: {
                    value: /[A-Z]$/i,
                    message: "Invalid Last Name"},
          
                    })} 
                className={errors.lastName ? "invalid" : ""}/>
                
            
            <input placeholder="Email"></input>
            
            <input placeholder="Phone"></input>
            </div>
            <input className="input_sub" placeholder="Subject"></input>
            <input className="input_tell" placeholder="Tell Us Something..."></input>
            <button type="submit">SEND TO HYDRA</button>
            </form>
        </div>
    )
}
export default Form