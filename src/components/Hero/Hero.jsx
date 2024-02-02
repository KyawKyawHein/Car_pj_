import HeroCar from "../../assets/img/hero.png";
import HeroBg from "../../assets/img/hero-bg.png";
import "./hero.css";
import Button from "../utils/Button";

const Hero = () => {
    return (
        <div className="hero-container block lg:flex justify-between overflow-hidden">
            <div className="left-hero-container px-3 ml-10">
                <h1 className='text-3xl lg:text-7xl font-bold mt-[100px] lg:mt-[140px]'>Find, book,<br/>rent a car-<br/>quick and<br/>super easy!</h1>
                <p className="mt-3 lg:mt-8 text-1xl lg:text-2xl text-gray-500">Streamline your car rental experience<br/>with our effortless booking process.</p>
                <Button bgColor="blue" className="mt-10">Explore Cars</Button>
            </div>
            <div className="hero__image-container w-full md:w-[800px] relative h-screen">
                <img src={HeroCar} className="right-hero-img z-20 object-contain absolute w-[700px] h-full bottom-[30px] right-0" alt="" />
                <img src={HeroBg} className="absolute z-0 left-0 md:left-[125px] bottom-0 md:bottom-[170px] w-[1400px] h-[500px]" />
            </div>
        </div>
    )
}

export default Hero;