import { FC } from "react";
import   logo  from "../components/RealEstate.svg";
import Image from 'next/image';

const Footer:FC = () => {

    return <>
      <div className='container-fluid'>
        <div className='row footer-p-top-btm'>
          <div className='col-12 col-lg-3 col-center footer-p-top-inner'>
            <div className='mx-auto'>
            <Image alt="Alt" className="rounded mx-auto d-block" src={logo}/></div>
            <p className='p-footer' style={{ color: "#8B8B8B", textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
            <div className='row'>
              <div className='col-4 mx-auto d-block text-center '>
                <button style={{ backgroundColor: "#F0F0F0" }} className='btn p-2 btn-rounded btn-icon'>
                  <i style={{ color: "#1371E2", fontSize: "25px", padding: "0px 2px 0px 2px", textAlign: "center" }} className="fa-brands fa-facebook"></i>
                </button>
              </div>
              <div className='col-4 mx-auto d-block text-center '>
                <button style={{ backgroundColor: "#F0F0F0" }} className='btn p-2 btn-rounded btn-icon'>
                  <i style={{ color: "#1371E2", fontSize: "25px", padding: "0px 2px 0px 2px", textAlign: "center" }} className="fa-brands fa-twitter"></i>
                </button>
              </div>
              <div className='col-4 mx-auto d-block text-center '>
                <button style={{ backgroundColor: "#F0F0F0" }} className='btn p-2 btn-rounded btn-icon'>
           
                  <i style={{ fontSize: "25px", padding: "0px 2px 0px 2px" }} className="fa-brands fa-instagram"></i>
                </button>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-6 row footer-p-top-inner'>
            <div className='col-6 col-lg-12 row mx-auto text-center'>
              <div className='col-md-6'>
                <h4>Phone</h4>
                <p className='p-footer'>(01) 1234 5678</p>
              </div>
              <div className='col-md-6'>
                <h4>Email</h4>
                <p className='p-footer'>example@gmail.org</p>
              </div>
            </div>
  
            <div className='col-6 col-lg-12 row mx-auto text-center'>
              <div className='col-md-6'>
                <h4>Fax</h4>
                <p className='p-footer'>(01) 1234 5678</p>
              </div>
              <div className='col-md-6'>
                <h4 >Adress</h4>
                <p className='p-footer'>NY USA</p>
              </div>
            </div>
  
          </div>
          <div className='col-12 col-lg-3 footer-p-top-inner' style={{ textAlign: "center" }}>
            <h4>Opening Hours</h4>
            <p className='p-footer'>Mon - Fri 10:00 to 7:00</p>
            <p className='p-footer'>Sat - Sun Closed</p>
          </div>
        </div>
        <hr className="hr" />
        <div className='row'>
          <div className='col-12 col-lg-3 order-2 order-lg-1 text-center'>
            <p className='p-footer-300' style={{ padding: "5px 0px 5px 0px", color: "#000000" }}>&copy; Copyright 2022 all rights reserved.</p>
          </div>
          <div className='col-12 col-lg-9 order-1 order-lg-2 row d-flex justify-content-center text-center mx-auto' align="center">
            <div className='col-lg-6 row text-center'>
              <div className='col-6'><p className='p-footer-300'>Privacy</p></div>
              <div className='col-6'><p className='p-footer-300'>Terms</p></div>
            </div>
            <div className='col-lg-6 row text-center'>
              <div className='col-6'><p className='p-footer-300'> Book an Appraisal</p></div>
              <div className='col-6'><p className='p-footer-300'>Maintenance Request</p></div>
            </div>
  
  
          </div>
          <footer>
  
          </footer>
        </div>
      </div>
    </>;
  }
  export default Footer;