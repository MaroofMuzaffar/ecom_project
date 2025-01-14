import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import $ from 'jquery';  // Import jQuery
import 'datatables.net-dt/css/dataTables.dataTables.min.css'; // Import DataTables styles
import 'datatables.net';


import Sidebar from '../../Components/Sidebar'
import HeroSection from '../../Components/HeroSection'
import { Link } from 'react-router-dom'

import { deleteTestmonials, getTestmonials } from "../../Redux/ActionCreators/TestmonialsActionCreators"
export default function AdminTestmonials() {
  let [data, setData] = useState([])

  let dispatch = useDispatch()
  let TestmonialsStateData = useSelector((state) => state.TestmonialsStateData)

  function deleteRecord(id) {
    if (window.confirm("Are You Sure to Delete that Item : ")) {
      dispatch(deleteTestmonials({ id: id }))
      getAPIData()
    }
  }

  function getAPIData() {
    dispatch(getTestmonials())

    if (TestmonialsStateData.length)
      setData(TestmonialsStateData)
    else
      setData([])

    let time = setTimeout(() => {
      $('#DataTable').DataTable()
    }, 500);
    return time
  }
  
    useEffect(() => {
      let time = getAPIData()
      return () => clearTimeout(time)
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
            <h5 className='bg-primary text-center text-light p-2'>Testimonials <Link to="/admin/testmonials/create"> <i className='fa fa-plus text-light float-end'></i></Link></h5>
            <table className='table table-bordered table-hover table-striped' id='DataTable'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Message</th>
                  <th>Pic</th>
                  <th>Active</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((item, index) => {
                    return <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.message}</td>
                      <td>
                        <Link to={`${process.env.REACT_APP_SERVER}${item.pic}`} target='_blank' rel='noreferrer'>
                          <img src={`${process.env.REACT_APP_SERVER}${item.pic}`} height={50} width={80} className='rounded' alt="Testmonials Image" />
                        </Link>
                      </td>
                      <td>{item.active ? "Yes" : "No"}</td>
                      <td><Link to={`/admin/testmonials/update/${item.id}`} className='btn btn-primary'><i className='fa fa-edit'></i></Link></td>
                      <td><button className='btn btn-danger' onClick={() => deleteRecord(item.id)}><i className='fa fa-trash'></i></button></td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
