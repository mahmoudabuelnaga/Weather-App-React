import React from "react";

const Form = (props) =>{
    return(
        <form onSubmit={props.getWeather}>
            <input name="city" type='text' placeholder='City...' />
            <input name="country" type='text' placeholder="Country..." />
            <button>Get Weather</button>
        </form>
    )
}

export default Form;