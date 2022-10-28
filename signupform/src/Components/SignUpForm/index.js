import { useState } from "react"

const SignUpForm = () => {
    const [firstName, setFirstName] = useState('')
    const [firstNameValidate, setFirstNameValidate] = useState(null)
    const [lastName, setLastName] = useState('')
    const [lastNameValidate, setLastNameValidate] = useState(null)
    const [email, setEmail] = useState('')
    const [emailValidate, setEmailValidate] = useState(null)
    const validEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const [phone, setPhone]= useState('')
    const [phoneValidate, setPhoneValidate] = useState(null)
    const validPhone = /[0-9]{10,11}/;
    const [password, setPassword] = useState('')
    const [passwordValidate, setPasswordValidate] = useState(null)
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [passwordConfirmValidate, setPasswordConfirmValidate] = useState(null)
    const [selects, setSelects]= useState('')
    const [formSentSuccess, setFormSentSuccess] = useState(null)

    const validateFirstName = () => {
        if(firstName === ""){
            setFirstNameValidate(false)
        } else {
            setFirstNameValidate(true)
        }
    }

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }

    const validateLastName = () => {
        if(lastName === ""){
            setLastNameValidate(false)
        } else {
            setLastNameValidate(true)
        }
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
    }

    const validateEmail = (e) => {
        let emailAddresses = e.target.value.trim().split(' ')
        emailAddresses.map((emailAddress) => {
            if (!emailAddress.match(validEmail) || emailAddress === '') {
                return setEmailValidate(false)
            } else {
                return setEmailValidate(true)
            }
        })
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    
    const validatePhone = () => {
        if ((!phone.match(validPhone)) || (phone === "")) {
            return setPhoneValidate(false)
        } else {
            return setPhoneValidate(true)
        }
    }
    
    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }

    const validatePassword = () => {
        if(password === ""){
            setPasswordValidate(false)
        } else {
            setPasswordValidate(true)
        }
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const validatePasswordConfrim = () => {
        if(passwordConfirm === "" || passwordConfirm !== password){
            setPasswordConfirmValidate(false)
        } else {
            setPasswordConfirmValidate(true)
        } 
    }

    const handlePasswordConfirmChange = (e) => {
        setPasswordConfirm(e.target.value)
    }

    const handleSelectsChange = (e) => {
        setSelects(e.target.value)
    }

    const handleSubmit = (e) => {
        let newUser = {}
        e.preventDefault()
        if (firstNameValidate && 
            lastNameValidate && 
            emailValidate &&
            phoneValidate &&
            passwordValidate && 
            passwordConfirmValidate){
                newUser = {firstName, lastName, email, phone, password, selects}
                console.log(newUser)
                setFormSentSuccess(true)
            } else {
                setFormSentSuccess(false)
            }  
    } 

    return (
        <div className="p-3 m-lg-5">
        <h2 className="pb-4">Register</h2>
        <form onSubmit ={handleSubmit}>
            <div className="row py-2">
                <div className="form-group col-mg-6 col-lg-6 col-sm-12">
                    <label for="firstNameInput" className="py-1">First Name</label>
                    <span className="primaryColor">  *</span>
                    <input onBlur={validateFirstName} onChange={handleFirstNameChange} value={firstName} name="firstNameInput" type="text" className="form-control"/>
                    <span className='text-danger'>{firstNameValidate === false ? "First name is required" : ''}</span>
                </div>
                <div className="form-group col-mg-6 col-lg-6 col-sm-12">
                    <label for="lastNameInput" className="py-1">Last Name</label>
                    <span className="primaryColor">  *</span>
                    <input onBlur={validateLastName} onChange={handleLastNameChange} value={lastName} type="text" name="lastNameInput" className="form-control"/>
                    <span className='text-danger'>{lastNameValidate === false ? "Last name is required" : ''}</span>
                </div>
            </div>
            <div className="form-group py-2">
                <label for="emailInput" className="py-1">Email address</label>
                <span className="primaryColor">  *</span>
                <input onBlur={validateEmail} onChange={handleEmailChange} value={email} type="email" className="form-control" id="emailInput"/>
                <span className='text-danger'>{emailValidate === false ? "valid email address is required" : ''}</span>
            </div>
            <div className="form-group py-2">
                <label for="phoneNumberInput" className="py-1">Phone Number</label>
                <span className="primaryColor">  *</span>
                <input onBlur={validatePhone} onChange={handlePhoneChange} value={phone} type="number" className="form-control" id="phoneNumberInput"/>
                <span className='text-danger'>{phoneValidate === false ? "valid phone number is required" : ''}</span>
            </div>
                <div className="row py-2">
                    <div className="form-group col-mg-6 col-lg-6 col-sm-12">
                    <label for="passwordInput" className="py-1">Password</label>
                    <span className="primaryColor">  *</span>
                    <input onBlur={validatePassword} onChange={handlePasswordChange} value={password} type="password" className="form-control" id="passwordInput"/>
                    <span className='text-danger'>{passwordValidate === false ? "password is required" : ''}</span>
                </div>
                <div className="form-group col-mg-6 col-lg-6 col-sm-12">
                    <label for="confirmPasswordInput" className="py-1">Confirm Password</label>
                    <span className="primaryColor">  *</span>
                    <input onBlur={validatePasswordConfrim} onChange={handlePasswordConfirmChange} value={passwordConfirm} type="password" className="form-control" id="confirmPasswordInput"/>
                    <span className='text-danger'>{passwordConfirmValidate === false ? "need to confirm password" : ''}</span>
                </div>
            </div>
            <div className="form-group py-2">
                <label for="hearAboutUsFeedback" className="py-1">Where did you hear about us?</label>
                <span className="primaryColor">  *</span>
                <select value={selects} onChange={handleSelectsChange} className="form-select form-select-md mb-3" aria-label="hearAboutUsFeedback">
                    <option value="Option one">Option one</option>
                    <option value="Option two">Option two</option>
                    <option value="Option three">Option three</option>
                </select>
            </div>
            <div className="d-flex justify-content-center">
                <button type="submit" className="btn primaryBackgroundColor text-white rounded-pill primarybtnhover">Sign up</button>
            </div>
            <p className={formSentSuccess ? 'text-success text-end text-center pt-3' : 'text-danger text-end text-center pt-3'}>{formSentSuccess === true ? 'form submitted' : formSentSuccess === false ? 'Failed to send, all fields must be filled' : ''}</p>
        </form>
        </div>
    )
}

export default SignUpForm