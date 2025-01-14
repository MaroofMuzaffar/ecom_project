import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'


import Sidebar from '../../Components/Sidebar'
import HeroSection from '../../Components/HeroSection'

import formValidators from '../../Components/Validators/formValidators'
import imageValidators from '../../Components/Validators/imageValidators'

import { createTestmonials, getTestmonials } from "../../Redux/ActionCreators/TestmonialsActionCreators"
export default function AdminCreateTestmonials() {
  let [data, setData] = useState({
    name: "",
    pic: "",
    message:"",
    active: true
  })
  let [errorMessage, setErrorMessage] = useState({
    name: "Name Field is Mendatory",
    pic: "Pic Field is Mendatory",
   message: "message Field is Mendatory"
  })
  let [show, setShow] = useState(false)
  let navigate = useNavigate()

  let dispatch = useDispatch()
  let TestmonialsStateData = useSelector((state) => state.TestmonialsStateData)

  function getInputData(e) {
    let name = e.target.name
    let value = e.target.files ? "/testmonials/" + e.target.files[0].name : e.target.value
    // let value = e.target.files ? e.target.files[0] : e.target.value
    if (name !== "active") {
      setErrorMessage((old) => {
        return {
          ...old,
          [name]: e.target.files ? imageValidators(e) : formValidators(e)
        }
      })
    }
    setData((old) => {
      return {
        ...old,
        [name]: name === "active" ? (value === "1" ? true : false) : value
      }
    })
  }
  function postData(e) {
    e.preventDefault()
    let error = Object.values(errorMessage).find((x) => x !== "")
    if (error)
      setShow(true)
    else {
      let item = TestmonialsStateData.find((x) => x.name.toLocaleLowerCase() === data.name.toLocaleLowerCase())
      if (item) {
        setShow(true)
        setErrorMessage((old) => {
          return {
            ...old,
            'name': "Testmonials Name is Already Exist"
          }
        })
      }
      else {
        //this line is used in both dumy server and real server if form has no file field
        dispatch(createTestmonials({ ...data }))

        //but in case of real server and if form has file field
        // var formData = new FormData()
        // formData.append("name",data.name)
        // formData.append("pic",data.pic)
        // formData.append("active",data.active)
       // formData.append("message",data.message)
        // dispatch(createTestmonials(formData))

        navigate("/admin/testmonials")
      }
    }
  }

  useEffect(() => {
    (() => {
      dispatch(getTestmonials())
    })()
  }, [TestmonialsStateData.length])
  return (
    <>
      <HeroSection title="Admin" />
      <div className="container-fluid">
        <div className='row'>
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <h5 className='bg-primary text-center text-light p-2'>Create Testmonials <Link to="/admin/testmonials"> <i className='fa fa-backward text-light float-end'></i></Link></h5>
            <form onSubmit={postData}>

              <div className="mb-3">
                <label>Name*</label>
                <input type="text" name="name" onChange={getInputData} className={`form-control border-3 ${show && errorMessage.name ? 'border-danger' : 'border-primary'}`} placeholder='Testmonials Name' />
                {show && errorMessage.name ? <p className='text-danger text-capitalize'>{errorMessage.name}</p> : null}
              </div>
              
              <div className="mb-3">
                <label>Message*</label>
                <textarea name="message" onChange={getInputData} className={`form-control border-3 ${show && errorMessage.message ? 'border-danger' : 'border-primary'}`} rows={5} placeholder='Message...'></textarea>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>Pick*</label>
                  <input type="file" name="pic" onChange={getInputData} className={`form-control border-3 ${show && errorMessage.pic ? 'border-danger' : 'border-primary'}`} placeholder='Testmonials Name' />
                  {show && errorMessage.pic ? <p className='text-danger text-capitalize'>{errorMessage.pic}</p> : null}
                </div>

                <div className="col-md-6 mb-3">
                  <label>Active*</label>
                  <select name="active" onChange={getInputData} className='form-select border-3 border-primary'>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>
              </div>

              <div className="mb-3">
                <button type="submit" className='btn btn-primary w-100'>Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
