import Image from "next/image";
import styles from "./page.module.css";
import Nigga from "./Other"

//import { config } from '@fortawesome/fontawesome-svg-core'
import 'bootstrap/dist/css/bootstrap.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import "bootstrap/dist/js/bootstrap.bundle.min";

import Headder from "./blocks/Header";
import SucessfulLoactions from "./blocks/SucessfulLocations";
import OurServices from "./blocks/OurServices";
import FeaturedProjects from "./blocks/FeaturedProducts";
import RecentlyAdded from "./blocks/RecentlyAdded";
import ExploreNeighborhood from "./blocks/Explore";
import Footer from "./blocks/Footer";

export default function Home() {

  return <>
    <div className='container-fluid'>
      <Headder/>
      <SucessfulLoactions />
      <OurServices /> 
      <FeaturedProjects />
      <RecentlyAdded />
      <ExploreNeighborhood />
      <Footer />
    </div>
  </>;
}