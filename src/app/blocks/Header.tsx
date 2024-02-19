import { FC } from "react";
import logo from "../components/RealEstate.svg";
import Image from 'next/image';
import "./Headder.css"

const Headder: FC = () => {
    /* 
    As always we will have 2 types - 1 for lg 1 for others
     */

    return <>
        <div className="container">
            <div className="d-none d-lg-block">
                <div className="row mt-5 pt-5">
                    <div className="col-12 d-flex justify-content-between  align-items-center">

                        <Image alt="Alt" className="rounded" src={logo} />
                        <div className="d-flex justify-content-end" style={{ width: "60%" }}>
                            <div className="col-7 d-flex">

                                <span className="mx-auto" style={{ fontWeight: "900" }}>Home</span>
                                <span className="mx-auto">About Us</span>
                                <span className="mx-auto">Agents</span>
                                <span className="mx-auto">Services</span>
                            </div>
                        </div>
                        <button className="btn rounded-4 poppins-semibold text-white border-0 p-3" style={{ backgroundColor: "#1371E2" }}> <span style={{ fontSize: "15px", padding: "4px 4px" }}>Contact Us</span></button>
                    </div>


                </div>
                <div className="row">
                    <div className="d-flex justify-content-end">
                        <img style={{ height: "70vmin" }} className='img-fluid custom_image_bordered_top3' src="./images/heder.jfif" />
                    </div>
                    <div className="col-9  on_top">
                        <div className="col-5 pt-5 mt-5">
                            <h1 className="h1-stangith" style={{ fontSize: "70px" }}>Helping people get<br /> their dream home</h1>
                            <p className="p-footer pb-4 mb-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan, donec gravida libero, magnis. Magna a egestas pellentesque gravida. Sollicitudin vita</p>
                        </div>
                        <div className="row pt-5" style={{ width: "56vmax" }}>
                            <div className="row">
                                <div className="col-12">
                                    <button className="btn-rnd-top p-2 btn-icon poppins-semibold text-white border-0" style={{ backgroundColor: "#1371E2" }}> <span className="poppins-medium" style={{ padding: "2vmin", fontSize: "14px" }}>RENT</span></button>
                                    <button className="btn-rnd-topheder p-2 btn-icon poppins-semibold  border-0" style={{}}> <span className="poppins-medium" style={{ padding: "2vmin", fontSize: "14px" }}>SELL</span></button>
                                    <button className="btn-rnd-topheder p-2 btn-icon poppins-semibold  border-0" style={{}}> <span className="poppins-medium" style={{ padding: "2vmin", fontSize: "14px" }}>BUY</span></button>
                                </div>
                            </div>
                            <div className="card shadow border-0">
                                <div className="container">
                                    <div className="row mb-4 mt-4">
                                        <div className="col-3">
                                            <i className="fa-solid fa-location-dot pb-4" style={{ color: " #1371E2", fontSize: "18px" }}></i> <span className="h1_selector"> Location</span>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Select Your City</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>

                                        </div>
                                        <div className="col-3">
                                            <i className="fa-solid fa-house pb-4" style={{ color: " #1371E2", fontSize: "18px" }}></i> <span className="h1_selector"> Property Type</span>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Choose Property Type</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select></div>
                                        <div className="col-3">
                                            <i className="fa-solid fa-dollar-sign pb-4" style={{ color: " #1371E2", fontSize: "18px" }}></i> <span className="h1_selector"> Price Range</span>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Choose Price Range</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select></div>
                                        <div className="col-3">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-block d-lg-none">
                <div className="row mt-5 ">
                    <div className="col-12 d-flex justify-content-between  align-items-center">

                        <Image alt="Alt" className="rounded" src={logo} />
                        <div className="d-flex justify-content-end" style={{ width: "60%" }}>
                        <i className="fa-solid fa-bars" style={{fontSize:"30px",color:"#1371E2"}}></i>
                        </div>
                    </div>


                </div>
                <div className="row">
                    <div className="">
                        <h1 className="h1-stangith mt-5" style={{ fontSize: "40px" }}>Helping people get<br /> their dream home</h1>
                        <div className="d-flex">
                            <img style={{ height: "110vmin" }} className='mx-auto img-fluid custom_image_bordered_top3' src="./images/heder.jfif" />
                        </div>
                        <p className="p-footer mt-5 "> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan, donec gravida libero, magnis. Magna a egestas pellentesque gravida. Sollicitudin vita</p>
                    </div>
                    <div className="col-12  d-flex">

                        <div className="row pt-5 w-100 mx-auto" style={{  }}>
                            <div className="row">
                                <div className="col-12">
                                    <button className="btn-rnd-top p-2 btn-icon poppins-semibold text-white border-0" style={{ backgroundColor: "#1371E2" }}> <span className="poppins-medium" style={{ padding: "2vmin", fontSize: "14px" }}>RENT</span></button>
                                    <button className="btn-rnd-topheder p-2 btn-icon poppins-semibold  border-0" style={{}}> <span className="poppins-medium" style={{ padding: "2vmin", fontSize: "14px" }}>SELL</span></button>
                                    <button className="btn-rnd-topheder p-2 btn-icon poppins-semibold  border-0" style={{}}> <span className="poppins-medium" style={{ padding: "2vmin", fontSize: "14px" }}>BUY</span></button>
                                </div>
                            </div>
                            <div className="card shadow border-0">

                                <div className="row mb-4 mt-4">
                                    <div className="col-12">
                                        <i className="fa-solid fa-location-dot pb-4" style={{ color: " #1371E2", fontSize: "18px" }}></i> <span className="h1_selector"> Location</span>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Select Your City</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>

                                    </div>
                                    <div className="col-12">
                                        <i className="fa-solid fa-house pb-4" style={{ color: " #1371E2", fontSize: "18px" }}></i> <span className="h1_selector"> Property Type</span>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Choose Property Type</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select></div>
                                    <div className="col-12">
                                        <i className="fa-solid fa-dollar-sign pb-4" style={{ color: " #1371E2", fontSize: "18px" }}></i> <span className="h1_selector"> Price Range</span>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Choose Price Range</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select></div>
                                    <div className="col-3">
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}
export default Headder;