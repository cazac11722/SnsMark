import { Link } from "react-router-dom";

import Img from "../../assets/logo/logo.png"

const Logo = () => {
    return (
        <Link to={'/'} className="flex justify-center ml-10 md:mr-14">
            <img src={Img} className="h-8 mr-3" alt="FlowBite Logo"></img>
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">SNS 샵</span>
        </Link>
    );
}

export default Logo;