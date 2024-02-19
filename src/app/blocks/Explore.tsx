import { FC } from "react";
import ThumbnailCarousel from "../components/ThumbnailCarousel";

const ExploreNeighborhood: FC =()=> {
    const images = [
      './images/explore_neighborhood1.png',
      './images/neighbor.jfif',
      //'./images/neighbor1.jfif',
      './images/neighbor2.jfif'
    ];
    return <>
      <div className='container pt-5 pb-5'>
        <div className='row text-center'>
          <h1 className='h1-stangith pb-5'>
            What’s In Neighbour<br /> Explore Below
          </h1>
        </div>
        <div className="container">
          <div className="row">
            <div className='col-12 col-lg-8 pb-4'>
              <ThumbnailCarousel images={images} />
            </div>
            <div className='col-12 col-lg-4 explore-neighboorhood card'>
              <img src='./images/1.jfif'></img>
              <h2 className='my-auto explore-neighboorhood-text'> Kitchen Island and Barstools </h2>
              <p className='my-auto poppins-regular'><span style={{ color: "#1371E2" }}>1,500m</span> / 21 min. walk</p>
              <p className=' my-auto poppins-regular'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                Enim ullamco laboris.</p>
              <a style={{ textDecoration: "none" }} href="#" className='my-auto explore-neighboorhood-text'>View Property <i className="fa-solid fa-arrow-right"></i></a>
            </div>
  
  
          </div>
        </div>
      </div>
    </>;
  }
  export default ExploreNeighborhood