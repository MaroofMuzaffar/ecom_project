import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from '../Components/Navbar'
import Footer from '../Components/Fotter'

import Home from '../Components/Home'
import AboutUsPage from './AboutUsPage'

import ShopPage from './ShopPage'
import TestmonialPage from"./TestmonialPage"
import ErrorPage from './ErrorPage'
import ContactUsPage from './ContactUsPage'
import Signup from './SignUp'
import Login from './Login'

import ProfilePage from './ProfilePage'
import UpdateProfile from './UpdateProfile'
import CartPage from './CartPage'
import CheckoutPage from './CheckoutPage'
import Confirmation from './Confirmation'


import AdminHome from '../Admin/Home/AdminHome'

import AdminMaincategory from '../Admin/Maincategory/AdminMainCategory'
import AdminCreateMaincategory from '../Admin/Maincategory/AdminCreatMainCategory'
import AdminUpdateMaincategory from '../Admin/Maincategory/AdminUpdateMainCategory'

import AdminSubcategory from '../Admin/Subcategory/AdminSubcategory'
import AdminCreateSubcategory from '../Admin/Subcategory/AdminCreatSubcategory'
import AdminUpdateSubcategory from '../Admin/Subcategory/AdminUpdateSubcategory'

import AdminBrand from '../Admin/Brand/AdminBrand'
import AdminCreateBrand from '../Admin/Brand/AdminCreatBrand'
import AdminUpdateBrand from '../Admin/Brand/AdminUpdateBrand'

import AdminTestmonial from '../Admin/Testmonials/AdminTestmonials'
import AdminCreateTestmonial from '../Admin/Testmonials/AdminCreatTestmonials'
import AdminUpdateTestmonial from '../Admin/Testmonials/AdminUpdateTestmonials'

import AdminProduct from '../Admin/Product/AdminProduct'
import AdminCreateProduct from '../Admin/Product/AdminCreateProduct'
import AdminUpdateProduct from '../Admin/Product/AdminUpdateProduct'
import SingleProductPage from './SingleProductPage'

import AdminNewsletter from '../Admin/Newsletter/AdminNewsletter'

import AdminUser from '../Admin/User/AdminUser'

import AdminContactUs from '../Admin/ContactUs/AdminContactUs'
import AdminContactUsShow from '../Admin/ContactUs/AdminContactUsShow'

import AdminCheckout from '../Admin/Checkout/AdminCheckout'
import AdminCheckoutShow from '../Admin/Checkout/AdminCheckoutShow'
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/product/:id' element={<SingleProductPage />} />
        <Route path='/testmonial' element={<TestmonialPage />} />
        <Route path='/contactus' element={<ContactUsPage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />

        {/* Buyer Routes */}
        {
          localStorage.getItem("login") ?
            <>
              <Route path='/profile' element={<ProfilePage />} />
              <Route path='/update-profile' element={<UpdateProfile />} />
              <Route path='/cart' element={<CartPage />} />
              <Route path='/checkout' element={<CheckoutPage />} />
              <Route path='/confirmation' element={<Confirmation />} />
            </> : null
        }

        {/* Admin Routes */}
        {
          localStorage.getItem("login") && localStorage.getItem("role") === "Admin" ?
            <>
              <Route path='/admin' element={<AdminHome />} />

              <Route path='/admin/maincategory' element={<AdminMaincategory />} />
              <Route path='/admin/maincategory/create' element={<AdminCreateMaincategory />} />
              <Route path='/admin/maincategory/update/:id' element={<AdminUpdateMaincategory />} />

              <Route path='/admin/subcategory' element={<AdminSubcategory />} />
              <Route path='/admin/subcategory/create' element={<AdminCreateSubcategory />} />
              <Route path='/admin/subcategory/update/:id' element={<AdminUpdateSubcategory />} />

              <Route path='/admin/brand' element={<AdminBrand />} />
              <Route path='/admin/brand/create' element={<AdminCreateBrand />} />
              <Route path='/admin/brand/update/:id' element={<AdminUpdateBrand />} />

              <Route path='/admin/testimonial' element={<AdminTestmonial />} />
              <Route path='/admin/testimonial/create' element={<AdminCreateTestmonial />} />
              <Route path='/admin/testimonial/update/:id' element={<AdminUpdateTestmonial />} />

              <Route path='/admin/product' element={<AdminProduct />} />
              <Route path='/admin/product/create' element={<AdminCreateProduct />} />
              <Route path='/admin/product/update/:id' element={<AdminUpdateProduct />} />

              <Route path='/admin/newsletter' element={<AdminNewsletter />} />

              <Route path='/admin/user' element={<AdminUser />} />

              <Route path='/admin/contactus' element={<AdminContactUs />} />
              <Route path='/admin/contactus/show/:id' element={<AdminContactUsShow />} />

              <Route path='/admin/checkout' element={<AdminCheckout />} />
              <Route path='/admin/checkout/show/:id' element={<AdminCheckoutShow />} />
            </> : null
        }

        <Route path='/*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
