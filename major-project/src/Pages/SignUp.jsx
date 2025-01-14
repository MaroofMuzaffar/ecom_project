import React, { Link,useNavigate }from 'react-router-dom'
import { useState } from 'react'
import HeroSection from "../Components/HeroSection"
import formValidators from "../Components/Validators/formValidators"

export default function SignUp() {
    let navigate = useNavigate()
    let [data, setData] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        password:"",
        cpassword:""
        })
    let [errorMessage, setErrorMessage] = useState({
            name:"Name Field Is Mandatory",
            username:"UserName Field Is Mandatory",
            email:"Email Field Is Mandatory",
            phone:"Phone Field Is Mandatory",
            password:"Password Field Is Mandatory"
            })
    let [show, setShow] = useState(false)


    function getInputData(e) {
        var { name, value } = e.target
        setErrorMessage((old) => {
            return {
                ...old,
                [name]: formValidators(e)
            }
        })
        setData((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    async function postData(e) {
        e.preventDefault()
        let error = Object.values(errorMessage).find((x) => x !== "")
        if (error)
            setShow(true)
        else if (data.password !== data.cpassword) {
            setErrorMessage((old) => {
                return {
                    ...old,
                    "password": "Password and Confirm Password Doesn't Matched"
                }
            })
            setShow(true)
        }
        else {
            let response = await fetch(`${process.env.REACT_APP_SERVER}/user`, {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                }
            })
            response = await response.json()
            let item = response.find((x) => x.username === data.username || x.email === data.email)
            if (item) {
                setErrorMessage((old) => {
                    return {
                        ...old,
                        'username': data.username === item.username ? "Username is Already Taken" : "",
                        'email': data.email === item.email ? "Email is Already Registered" : "",
                    }
                })
                setShow(true)
            }
            else {
                response = await fetch(`${process.env.REACT_APP_SERVER}/user`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        name: data.name,
                        username: data.username,
                        email: data.email,
                        phone: data.phone,
                        password: data.password,
                        role: "Buyer"
                    })
                })
                response = await response.json()
                if (response) {
                    localStorage.setItem("login", true)
                    localStorage.setItem("name", response.name)
                    localStorage.setItem("userid", response.id)
                    localStorage.setItem("role", response.role)
                    navigate("/profile")
                }
                else
                    alert("Something Went Wrong!!!")
            }
        }
    }

  return (
    <>
      <HeroSection title= "signup -create your account"/>

    <div className="container my-3 m-auto">
        <div className="col-md-8 col-sm-10">
            <h5 className='bg-primary text-light text-center p-2'> Create Your Free Acount</h5>
             <form onSubmit={postData}>
              <div className="row">
                <div className="col-md-6 mb-3">
                    <label>Name*</label>
                    <input type="text" name="name" onChange={getInputData} className={`form-control border-3 ${show && errorMessage.name ? 'border-danger' : 'border-primary'}`} placeholder='Full Name' />
                    {show && errorMessage.name?<p className='text-danger'>{errorMessage.name}</p>:null}
                </div>
                <div className="col-md-6 mb-3">
                    <label>UserName*</label>
                    <input type="text" name='username'  onChange={getInputData} className={`form-control border-3 ${show&&errorMessage.username?'border-danger':'broder-primary'}`} placeholder='Your UserName'/>
                    
                    {show && errorMessage.username?<p className='text-danger'>{errorMessage.username}</p>:null}
                </div>          
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                    <label>Email*</label>
                    <input type="text" name='email'onChange={getInputData} className={`form-control border-3 ${show&&errorMessage.email?'border-danger':'broder-primary'}`} placeholder='Your Email Name'/>
                    {show && errorMessage.email?<p className='text-danger'>{errorMessage.email}</p>:null}
                </div>
                <div className="col-md-6 mb-3">
                <input type="text" name="phone" onChange={getInputData} className={`form-control border-3 ${show && errorMessage.phone ? 'border-danger' : 'border-primary'}`} placeholder='Phone Number' />
                {show && errorMessage.phone ? <p className='text-danger'>{errorMessage.phone}</p> : null}
                </div>          
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                    <label>Password*</label>
                    <input type="text" name='password' onChange={getInputData} className={`form-control border-3 ${show&&errorMessage.password?'border-danger':'broder-primary'}`} placeholder='Your Password'/>
                    {show && errorMessage.password?<p className='text-danger'>{errorMessage.password}</p>:null}
                </div>
                <div className="col-md-6 mb-3">
                    <label>ConfirmPassword*</label>
                    <input type="text" name='cpassword' onChange={getInputData} className={"form-control border-3 border-danger broder-primary"} placeholder='Your Confirmed Password'/>
                    </div> 
                    </div>
                <div className="md-3">
                    <button type="submit"className='btn btn-primary w-100'>SignUp</button>
                </div>
             </form>
             <Link to="/login"> Already Have An Account?login</Link>
        </div>

    </div>
    </>
  )
 }
