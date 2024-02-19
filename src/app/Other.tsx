import { FC } from "react";

interface Propps{
    title:string;
}

const Nigga: FC<Propps> = ({title}) => {
    return <>
    Nigga<br></br>
    {title}
    </>
}

export default Nigga;