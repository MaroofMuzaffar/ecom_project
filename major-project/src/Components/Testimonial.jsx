import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import { getTestmonials } from "../Redux/ActionCreators/TestmonialsActionCreators"
import { useDispatch, useSelector } from 'react-redux';
export default function Testmonial() {
    let [data, setData] = useState([])

    let dispatch = useDispatch()
    let TestmonialsStateData = useSelector((state) => state.TestmonialsStateData)
    let options = {
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: true,
        navText: ["<button class='btn btn-primary slider-btn' id='slider-btn1'><i class='fa fa-arrow-left'></button>", "<button class='slider-btn btn btn-primary' id='slider-btn2'><i class='fa fa-arrow-right'></button>"],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 4
            },
            4000: {
                items: 5
            },
        }
    }

    useEffect(() => {
        (() => {
            dispatch(getTestmonials())
            if (TestmonialsStateData)
                setData(TestmonialsStateData.filter((x) => x.active))
        })()
    }, [TestmonialsStateData])
    return (
        <>
            <div className="container-xxl py-2">
                <div className="container">
                    <h1 className="display-5 text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Our Clients Say!</h1>
                    <div className=" wow fadeInUp" data-wow-delay="0.1s">
                        <OwlCarousel {...options}>
                            {
                                data?.map((item) => {
                                    return <div key={item.id} className="testmonial-item text-center">
                                        <img className="img-fluid rounded-circle border border-2 p-2 mx-auto mb-4" src={`${process.env.REACT_APP_SERVER}${item.pic}`} style={{ width: "100px", height: "100px" }} />
                                        <div className="testmonial-text rounded text-center p-4">
                                            <p className='testmonial-message'>{item.message}</p>
                                            <h5 className="mb-1">{item.name}</h5>
                                        </div>
                                    </div>
                                })
                            }

                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </>
    )
}
