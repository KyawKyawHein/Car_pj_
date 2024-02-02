import HeroCar from "../../assets/img/hero.png";
import HeroBg from "../../assets/img/hero-bg.png";
import "./hero.css";
import Button from "../utils/Button";

const Hero = () => {
    return (
        <div className="hero-container min-h-screen flex flex-col md:flex-row justify-around md:justify-between overflow-hidden items-center">
            <div className="left-hero-container px-3 ml-10 mt-10 md:mt-0">
                <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold mt-[100px] md:mt-[140px]'>Find, book,<br/>rent a car-<br/>quick and<br/>super easy!</h1>
                <p className="mt-3 md:mt-8 text-1xl md:text-2xl text-gray-500">Streamline your car rental experience<br/>with our effortless booking process.</p>
                <Button bgColor="blue" className="mt-10">Explore Cars</Button>
            </div>
            <div className="hero__image-container mt-10 md:my-0">
                <img src={HeroCar} className="right-hero-img w-[600px]  " alt="" />
                {/* <img src={HeroBg} className="absolute z-0 right-[-20px] top-[30px] md:top-[370px] lg:left-[125px] lg:bottom-[170px] w-[400px] md:w-[500px]  lg:w-[1400px] h-[250px] md:h-[300px] lg:h-[500px]" /> */}
            </div>
        </div>
    )
}

export default Hero;