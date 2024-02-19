import { FC } from "react"
import ThumbnailCarousely from "../components/ThumbnailCarousely"
const FeaturedProjects: FC = () => {
    /*
    So here we are making an Photo Galery or making slider
    */
    const array_to_pass = [
      {
        url: "./images/fp_1.png",
        num: "01",
        header: "ReHomes Riverside",
        description: "West Virginia, USA"
      },
      {
        url: "./images/fp2.png",
        num: "02",
        header: "Zoitox",
        description: "Kentuky Ohaio"
      },
      {
        url: "./images/fp3.png",
        num: "03",
        header: "Neverland",
        description: "Heaven"
      },
      {
        url: "./images/fp4.png",
        num: "04",
        header: "Foxtrot",
        description: "Red Alert 3"
      },
      {
        url: "./images/fp5.png",
        num: "05",
        header: "Armageddon",
        description: "Fury"
      }
    ]
    const style_for_lg_block = {
      height: "22vmax",
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
    return <>
      <div className='container pb-5'>
        <div className='row'>
          <h1 className='h1-stangith'>
            FEATURED PROJECTS
          </h1>
        </div>
        <div className="d-none d-lg-block">
          <div className='row'>
            <div className='col-lg-4'>
              <div className="card bg-dark border-0 text-white rounded rounded-5" style={style_for_lg_block}>
                <img className="img-fluid rounded rounded-5" style={style_for_images} src="./images/fp_1.png" />
                <div className="gradient_hover rounded rounded-5 card-img-overlay">
                  <div className=' row align-items-end flex-fill flex h-100 w-100'>
                    <div className='flex-row d-flex'>
                      <div className='col-9'>
                        <h1 className='poppins-semibold' style={{ fontSize: "24px" }}>ReHomes Riverside</h1>
                        <p className='poppins-medium'>West Virginia, USA</p>
                      </div>
                      <div className='col-3 justify-content-end d-flex'>
                        <h1 className='h1-stangith'> 01 </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card bg-dark border-0 text-white rounded rounded-5" style={style_for_lg_block}>
                <img className="img-fluid rounded rounded-5" style={style_for_images} src="./images/fp2.png" />
                <div className="gradient_hover rounded rounded-5 card-img-overlay">
                  <div className=' row align-items-end flex-fill flex h-100 w-100'>
                    <div className='flex-row d-flex'>
                      <div className='col-9'>
                        <h1 className='poppins-semibold' style={{ fontSize: "24px" }}>Zoitox</h1>
                        <p className='poppins-medium'>Kentuky Ohaio</p>
                      </div>
                      <div className='col-3 justify-content-end d-flex'>
                        <h1 className='h1-stangith'> 02 </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className="card bg-dark border-0 text-white rounded rounded-5" style={{ height: "45vmax" }}>
                <img className="img-fluid rounded rounded-5" style={style_for_images} src="./images/fp3.png" />
                <div className="gradient_hover rounded rounded-5 card-img-overlay">
                  <div className=' row align-items-end flex-fill flex h-100 w-100'>
                    <div className='flex-row d-flex'>
                      <div className='col-9'>
                        <h1 className='poppins-semibold' style={{ fontSize: "24px" }}>Neverland</h1>
                        <p className='poppins-medium'>Heaven</p>
                      </div>
                      <div className='col-3 justify-content-end d-flex'>
                        <h1 className='h1-stangith'> 03 </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className="card bg-dark border-0 text-white rounded rounded-5" style={style_for_lg_block}>
                <img className="img-fluid rounded rounded-5" style={style_for_images} src="./images/fp4.png" />
                <div className="gradient_hover rounded rounded-5 card-img-overlay">
                  <div className=' row align-items-end flex-fill flex h-100 w-100'>
                    <div className='flex-row d-flex'>
                      <div className='col-9'>
                        <h1 className='poppins-semibold' style={{ fontSize: "24px" }}>Foxtrot</h1>
                        <p className='poppins-medium'>Red Alert 3</p>
                      </div>
                      <div className='col-3 justify-content-end d-flex'>
                        <h1 className='h1-stangith'> 04 </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card bg-dark border-0 text-white rounded rounded-5" style={style_for_lg_block}>
                <img className="img-fluid rounded rounded-5" style={style_for_images} src="./images/fp5.png" />
                <div className="gradient_hover rounded rounded-5 card-img-overlay">
                  <div className=' row align-items-end flex-fill flex h-100 w-100'>
                    <div className='flex-row d-flex'>
                      <div className='col-9'>
                        <h1 className='poppins-semibold' style={{ fontSize: "24px" }}>Armageddon</h1>
                        <p className='poppins-medium'>Fury</p>
                      </div>
                      <div className='col-3 justify-content-end d-flex'>
                        <h1 className='h1-stangith'> 05 </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='d-block d-lg-none'>
          <div className='row'>
            <ThumbnailCarousely images={array_to_pass} />
          </div>
        </div>
      </div>
    </>
  }
  export default FeaturedProjects;
  