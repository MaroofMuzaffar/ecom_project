import React, { useEffect,useState } from 'react'
import About from './About'
import Facts from './Facts'

import Products from './Products'
import Testmonials from'./Testmonial'


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom'
import{useSelector,useDispatch}from   "react-redux"
import{getMaincategory}from "../Redux/ActionCreators/MaincategoryActionCreators"
import { getBrand } from '../Redux/ActionCreators/BrandActionCreators'
import { getSubcategory } from '../Redux/ActionCreators/SubcategoryActionCreators'
import{getProduct}from "../Redux/ActionCreators/ProductActionCreators"
import CategorySlider from "../Components/categorySlider"

export default function Home() {

    let [maincategory, setMaincategory] = useState([])
    let [subcategory, setSubcategory] = useState([])
    let [brand, setBrand] = useState([])
    let [product, setProduct] = useState([])

    let dispatch = useDispatch()
    let ProductStateData = useSelector((state) => state.ProductStateData)
    let MaincategoryStateData = useSelector((state) => state.MaincategoryStateData)
    let SubcategoryStateData = useSelector((state) => state.SubcategoryStateData)
    let BrandStateData = useSelector((state) => state.BrandStateData)
  
  let options = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: false,
    items:1
}
useEffect(()=>{
 (()=>{
dispatch(getMaincategory())
  if (MaincategoryStateData.length) 
  setMaincategory(MaincategoryStateData.filter((x)=>x.active))
})()
} ,[MaincategoryStateData.length])
useEffect(()=>{
  (()=>{
 dispatch(getProduct())
   if (ProductStateData.length) 
   setProduct(ProductStateData.filter((x)=>x.active))
 })()
 } ,[ProductStateData.length])
 useEffect(() => {
  (() => {
      dispatch(getSubcategory())
      if (SubcategoryStateData.length)
          setSubcategory(SubcategoryStateData.filter((x) => x.active))
  })()
}, [SubcategoryStateData.length])


useEffect(() => {
  (() => {
      dispatch(getBrand())
      if (BrandStateData.length)
          setBrand(BrandStateData.filter((x) => x.active))
  })()
}, [BrandStateData.length])
  return (
    <>
     <div className="container-fluid bg-dark p-0 mb-5">
      <div className="row g-0 flex-column-reverse flex-lg-row">
        <div className="col-lg-6 p-0 wow fadeIn" data-wow-delay="0.1s">
          <div
            className="header-bg h-100 d-flex flex-column justify-content-center p-5"
          >
            <h2 className=" text-light mb-5 text-center">CheckOut Our Latest Collections Of Top Brands</h2>
           
          
            <div className=" pt-4 animated slideInDown text-center">
              <Link to="/shop" className="btn btn-primary py-sm-3 px-3 px-sm-5"
                >Read More</Link>
             
            </div>
          </div>
        </div>
       
       <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
             
          <div className=" header-carousel">
          <OwlCarousel {...options}>
            <div className="owl-carousel-item">
              <img className="img-fluid" src="img/img8.jpg"style={{height:400}} alt="" />
            </div>
            <div className="owl-carousel-item">
              <img className="img-fluid" src="img/img2.jpg"style={{height:400}} alt="" />
            </div>
            <div className="owl-carousel-item">
              <img className="img-fluid" src="img/img3.jpg"style={{height:400}} alt="" />
            </div>
            <div className="owl-carousel-item">
              <img className="img-fluid" src="img/img4.jpg"style={{height:400}} alt="" />
            </div>
            <div className="owl-carousel-item">
              <img className="img-fluid" src="img/img5.jpg"style={{height:400}} alt="" />
            </div>
            <div className="owl-carousel-item">
              <img className="img-fluid" src="img/img6.jpg"style={{height:400}} alt="" />
            </div>
            </OwlCarousel>
          </div>
       
        </div>
      </div>
    </div>
   
    <div
      className="modal modal-video fade"
      id="videoModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content rounded-0">
          <div className="modal-header">
            <h3 className="modal-title" id="exampleModalLabel">Youtube Video</h3>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
         
        </div>
      </div>
    </div>
    <CategorySlider data={maincategory} title="Maincategory" />
         <div className="container ">
         {
                maincategory.map((item) => {
                    return <Products key={item.id} title={item.name} data={product.filter((x) => x.maincategory === item.name).slice(0, 12)} />
                })
            }
         </div>
            <CategorySlider data={subcategory} title="Subcategory" />
   <About/>
            <CategorySlider data={brand} title="Brand" />
   <Facts/>  
  
   <Products/>
   <Testmonials/>
   

    </>
  )
}
