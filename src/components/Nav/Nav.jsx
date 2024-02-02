import Logo from "../../assets/img/logo.svg";
import Button from "../utils/Button";

const Nav = () => {
    return (
        <div className="flex justify-center absolute  w-full z-30 ">
            <div className="w-full md:w-[1400px] flex justify-between items-center p-2">
                <div className="logo">
                    <img src={Logo} width={'150px'} height={'150px'} />
                </div>
                <Button bgColor="white">Sign in</Button>
            </div>
        </div>
    )
}

export default Nav;