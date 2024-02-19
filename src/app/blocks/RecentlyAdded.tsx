"use client";
import { FC,useRef } from "react";
import Slider from "react-slick";
import '@fortawesome/fontawesome-svg-core/styles.css'
import CardImg from "../components/CardImg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const RecentlyAdded: FC = () => {
    /*
    I will make 2 controlers for slider. 1 for lg devices and another for sm
     */
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    var settings1 = {
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  
    const slider = useRef(null);
    const slider1 = useRef(null);
    const array_cards = {
      url: "./images/fp_1.png",
      price: "5,200,000",
      header: "Thornidge Cir. Shiloh",
      by: "Lorem ipsum"
    }
    const array_cards1 = {
      url: "./images/fp2.png",
      price: "4,100,000",
      header: "Thornidge Cir. Shiloh",
      by: "Lorem ipsum"
    }
    const array_cards2 = {
      url: "./images/fp3.png",
      price: "3,200,000",
      header: "Thornidge Cir. Shiloh",
      by: "Lorem ipsum"
    }
  
  
    return <>
      <div className='container pb-5 pt-5 mt-5'>
        <div className='row'>
          <div className='col-12 col-lg-5'>
            <div className='row'>
              <h1 style={{ fontSize: "4vmax" }} className='h1-stangith'>Recently Added <br /> Featured Properties</h1>
              <p className='p-footer pt-4 pb-5' style={{ color: "#8B8B8B" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit magna velit bibendum tellus habitasse mi.</p>
            </div>
            <div className='container d-none d-lg-block'>
              <div className='d-flex  justify-content-center'>
                <button onClick={() => slider?.current?.slickPrev()} style={{ color: "#B5B8BB", marginRight: "2vmax", backgroundColor: "#0000000" }} className='on_arrow_hover border-gray border btn p-2 btn-rounded'>
                  <i style={{ fontSize: "25px", padding: "0px 2px 0px 2px" }} className="fa-solid fa-arrow-left"></i>
               </button>
                <button onClick={() => slider?.current?.slickNext()} style={{ color: "#B5B8BB" }} className=' on_arrow_hover border-gray border btn p-2 btn-rounded'>
                  <i style={{ fontSize: "25px", padding: "0px 2px 0px 2px" }} className="border-0 fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-7'>
            <div className='container h-100 w-100'>
              <div className='container flex h-100 w-100 d-none d-lg-block'>
                <Slider ref={slider} {...settings}>
                  <CardImg card={array_cards} />
                  <CardImg card={array_cards1} />
                  <CardImg card={array_cards2} />
                </Slider>
              </div> 
              <div className='container flex h-100 w-100 d-block d-lg-none'>
                <Slider ref={slider1} {...settings1}>
                  <CardImg card={array_cards} />
                  <CardImg card={array_cards1} />
                  <CardImg card={array_cards2} />
                </Slider>
              </div>
            </div>
  
            <div className='row d-block d-lg-none'>
              <div className='d-flex  justify-content-center'>
                <button onClick={() => slider1?.current?.slickPrev()} style={{ color: "#B5B8BB", marginRight: "2vmax", backgroundColor: "#0000000" }} className='on_arrow_hover border-gray border btn p-2 btn-rounded'>
                  <i style={{ fontSize: "25px", padding: "0px 2px 0px 2px" }} className="fa-solid fa-arrow-left"></i>
                </button>
                <button onClick={() => slider1?.current?.slickNext()} style={{ color: "#B5B8BB" }} className=' on_arrow_hover border-gray border btn p-2 btn-rounded'>
                  <i style={{ fontSize: "25px", padding: "0px 2px 0px 2px" }} className="border-0 fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    </>;
  }
  export default RecentlyAdded;