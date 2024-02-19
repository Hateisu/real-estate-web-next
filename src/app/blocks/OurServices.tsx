"use client";
import { FC } from "react";
import { useCollapse } from 'react-collapsed'
const OurServices: FC = () => {
    const coll:{ getCollapseProps, getToggleProps, isExpanded } = useCollapse()
    const col:{ getCollapseProps, getToggleProps, isExpanded } = useCollapse()
    const col1:{ getCollapseProps, getToggleProps, isExpanded } = useCollapse()
 //   const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

    return <>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-lg-6'>
                    <h1 className='h1-stangith'>
                        Our Services
                    </h1>
                </div>
                <div className='col-12 col-lg-6'>
                    <p className='p-footer' style={{ color: "#8B8B8B" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit magna velit bibendum tellus habitasse mi. Diam quam iaculis lobortis enim aliquam volutpat pellentesque non. Justo interdum id id eu nulla blandit nec enim. Tellus elit facilisis amet in sapien semper.
                    </p>
                </div>
            </div>
            <hr className="hr" />
            <div className=' d-flex justify-content-between'>
                <div>
                    {coll.isExpanded ?
                        <h1 className="poppins-semibold" style={{ fontSize: "2.5vmax", color: "#1371E2" }}>Full Project Delivery</h1>
                        :
                        <h1 className="poppins-semibold" style={{ fontSize: "2.5vmax" }}>Full Project Delivery</h1>
                    }
                    <section {...coll.getCollapseProps()}>

                        <p className="p-footer" style={{ color: "#8B8B8B" }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit magna velit bibendum tellus habitasse mi.</p>
                    </section>
                </div>
                <div className="align-self-start d-flex justify-content-center" >
                    <button  {...coll.getToggleProps()} style={{ color: "#B5B8BB" }} className=' on_arrow_hover border-gray border btn p-2 btn-rounded'>
                        <i style={{ fontSize: "25px", padding: "0px 2px 0px 2px" }} className="my-auto mx-auto border-0 fa-solid fa-arrow-right"></i>
                    </button></div>
                <div className="collapse" id="collapseExample">

                </div>

            </div>
            <hr className="hr" />
            <div className=' d-flex justify-content-between'>
                <div>
                    {col.isExpanded ?
                        <h1 className="poppins-semibold" style={{ fontSize: "2.5vmax", color: "#1371E2" }}>Rapid Cost monitoring</h1>
                        :
                        <h1 className="poppins-semibold" style={{ fontSize: "2.5vmax" }}>Rapid Cost monitoring</h1>
                    }
                    <section {...col.getCollapseProps()}>

                        <p className="p-footer" style={{ color: "#8B8B8B" }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit magna velit bibendum tellus habitasse mi.</p>
                    </section>
                </div>
                <div className="align-self-start d-flex justify-content-center" >
                    <button  {...col.getToggleProps()} style={{ color: "#B5B8BB" }} className=' on_arrow_hover border-gray border btn p-2 btn-rounded'>
                        <i style={{ fontSize: "25px", padding: "0px 2px 0px 2px" }} className="my-auto mx-auto border-0 fa-solid fa-arrow-right"></i>
                    </button></div>
                <div className="collapse" id="collapseExample">

                </div>

            </div>
            <hr className="hr" />
            <div className=' d-flex justify-content-between'>
                <div>
                    {col1.isExpanded ?
                        <h1 className="poppins-semibold" style={{ fontSize: "2.5vmax", color: "#1371E2" }}>construction cost estimating</h1>
                        :
                        <h1 className="poppins-semibold" style={{ fontSize: "2.5vmax" }}>construction cost estimating</h1>
                    }
                    <section {...col1.getCollapseProps()}>

                        <p className="p-footer" style={{ color: "#8B8B8B" }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit magna velit bibendum tellus habitasse mi.</p>
                    </section>
                </div>
                <div className="align-self-start d-flex justify-content-center" >
                    <button  {...col1.getToggleProps()} style={{ color: "#B5B8BB" }} className=' on_arrow_hover border-gray border btn p-2 btn-rounded'>
                        <i style={{ fontSize: "25px", padding: "0px 2px 0px 2px" }} className="my-auto mx-auto border-0 fa-solid fa-arrow-right"></i>
                    </button></div>
                <div className="collapse" id="collapseExample">

                </div>

            </div>
            <hr className="hr" />
        </div>
    </>;
};
export default OurServices;