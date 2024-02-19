import { FC } from "react";
import "./CardStyle.css"

interface Card {
    url: string;
    price:string;
    header:string;
    by:string;
}
const CardImg: FC<{ card: Card }> = ({ card }) => {
    const style_for_lg_block =  {
        height: "49vmin",
        //width:"15vmax"

    }
    const style_for_md_block = {
        height: "100vmin",
        //width:"15vmax"

    }
    const style_for_images = {
        maxWidth: "none",
        minHeight: "40vmin",

        width: "100%",

        objectFit: "cover"
    }
    const style_for_images_md = {
        maxWidth: "none",
        minHeight: "70vmin",

        width: "100%",

        objectFit: "cover"
    }
    const wrapper_card = {
        //height: "1vmax"
    }
    /*
    There is 2 caeds in 1 div: lg type Dand other (mobile)
    */
    return (
        <div className='container-fluid'>
            <div className='row d-none d-lg-block'>
                <div className="card border-0 text-white" style={style_for_lg_block}>
                    <img className="img-fluid rounded rounded-5" style={style_for_images} src={card.url} />
                    <div className=' row align-items-end flex-fill flex h-100 w-100'>
                        <div className='flex-row d-flex on_top '>
                            <div className='mx-auto border-0 card shadow p-3 mb-5 bg-white rounded rounded-5' style={{ height: "10vmax", width: "90%", marginBottom: "2vmax" }}>
                                <div className='row h-100'>
                                    <div className='col-9 card border-0'>
                                        <h1 className='my-auto poppins-semibold' style={{ fontSize: "20px" }}> ${card.price} </h1>
                                        <br /><span className='my-auto poppins-regular' style={{ fontSize: "18px" }}> {card.header} </span>
                                        <span className='my-auto poppins-regular' style={{ fontSize: "14px", color: "#8F8F8F" }}> By: {card.by} </span> <br />
                                        <span className='my-auto' style={{ color: "#8F8F8F" }}> <i className="fa-solid fa-bed"></i> 3 <i className="fa-solid fa-bath"></i> 3 <i className="fa-solid fa-up-right-and-down-left-from-center"></i> 2000m2 </span>
                                    </div>
                                    <div className='col-3'>
                                        <div className='h-100 w-100 d-flex justify-content-center'>
                                            <button style={{ backgroundColor: "#FFFFFFFF" }} className='border-1 border border-gray my-auto mx-auto btn p-2 btn-rounded btn-icon'>
                                                <i style={{ color: "#B5B8BB", fontSize: "25px", padding: "0px 2px 0px 2px", textAlign: "center" }} className="fa-solid fa-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row d-block d-lg-none'>
                <div className="card border-0 text-white" style={style_for_md_block}>
                    <img className="img-fluid rounded rounded-5" style={style_for_images_md} src={card.url} />
                    <div className='row align-items-end flex-fill'>
                        <div className='flex-row d-flex on_top'>
                            <div className='mx-auto border-0 card shadow p-3 bg-white rounded rounded-5' style={{ height: "25vmax", width: "90%", marginBottom: "2vmax" }}>
                                <div className='row h-100'>
                                    <div className='col-9 card border-0'>
                                        <h1 className='my-auto poppins-semibold' style={{ fontSize: "20px" }}> ${card.price} </h1>
                                        <span className='my-auto poppins-regular' style={{ fontSize: "12px" }}> {card.header} </span>
                                        <span className='my-auto poppins-regular' style={{ fontSize: "9px", color: "#8F8F8F" }}> By: {card.by} </span>
                                        <span className='my-auto' style={{ color: "#8F8F8F" }}> <i className="fa-solid fa-bed"></i> 3 <i className="fa-solid fa-bath"></i> 3 <i className="fa-solid fa-up-right-and-down-left-from-center"></i> 2000m2 </span>
                                    </div>
                                    <div className='col-3'>
                                        <div className='h-100 w-100 d-flex justify-content-center'>
                                            <button style={{ backgroundColor: "#FFFFFFFF" }} className='border-1 border border-gray my-auto mx-auto btn p-2 btn-rounded btn-icon'>
                                                <i style={{ color: "#B5B8BB", fontSize: "25px", padding: "0px 2px 0px 2px", textAlign: "center" }} className="fa-solid fa-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardImg;