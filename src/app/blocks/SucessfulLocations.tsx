"use client";
import { FC, useRef } from "react";
import Slider from "react-slick";
import CardImgS from "../components/CardImgS";
import './Sucessful.css';
const SucessfulLoactions: FC = () => {
  const slider = useRef(null);
  var settings = {
    infinite: false,
    speed: 500,
    dots:true,
    appendDots: (dots:any) => <ul>{dots}</ul>,
    customPaging: (i:any) => (
      <div className="long_dot" ></div>
    ),
    slidesToShow: 1,
    slidesToScroll: 1
  };
  /*
  Here is two different blocks 1 for lg 2 for md
   */
  return <>
    <div className='container mb-5 pb-5'>
      <div className='d-none d-lg-block'>
        <div className='row'>
          <div className='col-lg-8'>
            <div className='row'>
              <h1 style={{ fontSize: "70px" }} className='h1-stangith'>
                Successful Locations<br />for Living
              </h1>
            </div>
            <div className='row'>
              <div className='col-lg-4'>
                <div className='container'>
                  <img className='img-fluid custom_image_bordered_top' src="./images/abt_us_2.png" />
                </div>
              </div>
              <div className='col-lg-8'>
                <div className="row align-items-end flex-fill flex h-100" style={{ margin: "0px 3vmax" }}>
                  <span className='p-footer' style={{ color: "#8B8B8B", fontSize: "18px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit magna velit bibendum tellus habitasse mi. Diam quam iaculis lobortis enim aliquam volutpat pellentesque non. Justo interdum id id eu nulla blandit nec enim. Tellus elit facilisis amet in sapien semper.</span>
                  <div className="col-12">
                    <button className="btn p-3 rounded-4 btn-icon poppins-semibold text-white border-0 mx-auto" style={{ backgroundColor: "#1371E2" }}> <span style={{ padding: "2vmin", fontSize: "18px" }}>More About Us</span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 d-flex'>
            <img className='img-fluid custom_image_bordered_top2 my-auto' style={{ height: "70%" }} src="./images/abt_us_1.png" />
          </div>
        </div>
      </div>
      <div className="d-block d-lg-none">

        <div className="row">
          <h1 style={{ fontSize: "30px" }} className='h1-stangith'>
            Successful Locations<br />for Living
          </h1>
          <span className='p-footer' style={{ color: "#8B8B8B", fontSize: "13px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit magna velit bibendum tellus habitasse mi. Diam quam iaculis lobortis enim aliquam volutpat pellentesque non. Justo interdum id id eu nulla blandit nec enim. Tellus elit facilisis amet in sapien semper.</span>
          <div className="container-fluid mt-5" style={{ height: "70vmax" }}>
            <Slider ref={slider} {...settings}>
              <CardImgS url="./images/abt_us_2.png" />
              <CardImgS  url="./images/abt_us_1.png"/>
            </Slider>
          </div>
          <div className="col-12">
            <button className="btn p-3 rounded-5 btn-icon poppins-semibold text-white border-0 mx-auto" style={{ backgroundColor: "#1371E2" }}> <span style={{ padding: "2vmin", fontSize: "16px" }}>More About Us</span></button>
          </div>
        </div>
      </div>
    </div>
  </>
}
export default SucessfulLoactions;