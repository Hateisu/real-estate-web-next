import { url } from "inspector";
import { FC } from "react";
interface Propps{
    url:string;
}
const CardImgS: FC<Propps> = (url) => {
    return <>
        <div className="container custom_image_h_w mb-5">
            <img className='img-fluid custom_image_bordered_top2' src={url.url} />
        </div>
    </>;
};
export default CardImgS;