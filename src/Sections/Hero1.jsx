




import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Hero1() {
    const [open, setOpen] = useState(false)
    useEffect(() => {
        return () => {
            document.body.style.position = "";
            document.body.style.width = "";
            document.body.style.top = "";
        };
    }, []);
    const openMenu = () => {
        const scrollY = window.scrollY
        document.body.style.position = "fixed"
        document.body.style.width = "100%"
        document.body.style.top = `-${scrollY}px`
        setOpen(true)
    }
    const closeMenu = () => {
        const scrollY = Math.abs(parseInt(document.body.style.top || 0))
        document.body.style.position = ""
        document.body.style.width = ""
        window.scrollTo(0, scrollY)
        setOpen(false)
    }

    return (
        <div className="hero1-container">
            <div className="navBar">
                <div className="navImage">
                    <img
                        src="https://demo-themewinter.com/gloreya/wp-content/themes/gloreya/assets/images/logo/logo-v2.png"
                        alt="Logo"
                    />
                </div>
                <div className="navLinks">
                    <Link to={"/"} className="link">Home</Link>
                    <Link to={"/menu-page"} className="link">Menu</Link>
                    <Link className="link">Shop</Link>
                    <Link className="link">Contact</Link>
               
                </div>

                 <div className="navBtn hero1btn">
               <button>Order Online</button>
                </div>
                <div onClick={openMenu} className="hamburger">
                    ☰
                </div>
            </div>
            <div className={`sidebar ${open ? "open" : ""}`}>
                <div className="navImages">
                    <img
                        src="https://demo-themewinter.com/gloreya/wp-content/themes/gloreya/assets/images/logo/logo-v2.png"
                        alt="Logo"
                    />
                </div>
                <div onClick={closeMenu} className="close-btn">
                    ✕
                </div>
                <Link to={"/"} className="side-link">
                    Home
                </Link>
                <Link to={"/menu-page"} className="side-link">
                    Menu
                </Link>
                <Link className="side-link">
                    Shop
                </Link>
                <Link className="side-link">
                Contact
                </Link>

                 <div className="navBtn">
               <button>Order Online</button>
                </div>
            </div>
        </div>
    )
}
export default Hero1;

