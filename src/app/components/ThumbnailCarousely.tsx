"use client";
import { FC,useState } from "react";
interface ThumbInst  {
    url:string;
    header:string;
    description:string;
    num:string;
}

const ThumbnailCarousely: FC<{ images: ThumbInst[] }> = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0); 

    const handleThumbnailClick = (index:number) => {
        setActiveIndex(index);
    };
    /*
    So we have an carousel to make it work we need to have an background image and current thumbnails
    Alse we are using Bootstrap to make it look better
     */
    const style_thumbnail = {
        height: "5vmax",
        //border: "2px solid white"
    }
    const thumbs = [activeIndex]

    const background_style = {
        height: "40vmax"
    }

    const style_for_lg_block = {
        height: "40vmax",
        //width:"15vmax"
        marginBottom: "1vmax",
        backgroundColor: "#0E2B4EB2"
      }
      const style_for_images = {
        maxWidth: "none",
        minHeight: "100%",
        height: "100%",
        width: "100%",
    
        objectFit: "cover"
      }
    return (
        <div className='container-fluid h-100 w-100 d-flex flex-column position-relative' >
            {/* Here will be an background */}
            <div>
                <div className="card bg-dark border-0 text-white rounded rounded-5" style={style_for_lg_block}>
              <img className="img-fluid rounded rounded-5" style={style_for_images} src={images[activeIndex].url} />
              <div className="gradient_hover_mobile rounded rounded-5 card-img-overlay">
                <div className=' row align-items-end flex-fill flex h-100 w-100'>
                  <div className='flex-row d-flex'>
                    <div className='col-9'>
                      <h1 className='poppins-semibold' style={{ fontSize: "24px" }}>{images[activeIndex].header}</h1>
                      <p className='poppins-medium'>{images[activeIndex].description}</p>
                    </div>
                    <div className='col-3 justify-content-end d-flex'>
                      <h1 className='h1-stangith'> {images[activeIndex].num} </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            
            <div className='flex-row d-flex'>
                {images.map((images, index) => (
                    <div onClick={() => handleThumbnailClick(index)} key={index} className='pad_courusely'>
                        <div key={index}>
                            <img key={index} className="border-3 border rounded-4 border-white image-fluid" src={images.url} style={style_thumbnail} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ThumbnailCarousely;