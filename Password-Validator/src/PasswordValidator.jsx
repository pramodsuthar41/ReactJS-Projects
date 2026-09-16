import { useState } from 'react';
import validator from 'validator';
function PasswordValidator(){
    const [errorMessage, setErrorMessage] = useState("");
    
    const validate = (value) => {
        if(validator.isStrongPassword(value, {minLength : 8, minLowercase : 1, minUpperCase : 1, minNumbers : 1, minSymbol: 1})){
            setErrorMessage("Strong Password")
        }
        else{
            setErrorMessage("Not a Strong Password");
        }
    }
    return(
        <>
            <span>Enter Password : <span><input type="text" onChange={(e) => validate(e.target.value)}/><br/>{
                errorMessage === '' ? null : <span style={{fontWeight: 'bold', color: 'red'}}>{errorMessage}</span>
            }</span></span>
        </>
    )
}

export default PasswordValidator;