



import { Link } from "react-router-dom"

function Hero10() {
    return (
        <div>


            <div className="hero10-image">
                <div className="hero10-image2">
                    <img src="https://demo-themewinter.com/gloreya/vegan/wp-content/uploads/sites/4/2019/10/logo.png" alt="" />
                    <p>
                        Gloreya is a fast-food restaurant that offers delicious and freshly prepared meals. From juicy burgers and crispy fries to mouthwatering fast-food favorites, we focus on quality, taste, and freshness. Our goal is to provide an enjoyable dining experience with flavorful food and excellent service. Whether you're visiting with friends or family, Gloreya is the perfect place to satisfy your cravings and enjoy every bite.</p>
                </div>

                <div className="hero10-flex">
                    <div className="hero10-para">
                        <h2>Address</h2>
                        <p> 570 8th Ave, New York, NY 10018, United States</p>
                    </div>


                    <div className="hero10-para">
                        <h2>Book a table</h2>
                        <p>Dogfood och Sliders foodtruck. Under Om oss kan ni läsa</p>
                    </div>

                    <div className="hero10-para">
                        <h2>Opening hours</h2>
                        <p>Monday - Friday</p>
                        <p className="hero10-time">10.00 AM – 11.00 PM</p>
                    </div>

                </div>












            </div>

            <div className="hero10-color">
                <div className="hero10-flex2">

            
                  <div className="hero10-link">
                    <Link className="hero10-all">Home</Link>
                </div>

                <div className="hero10-link">
                    <Link className="hero10-all">Menu</Link>
                </div>

                <div className="hero10-link">
                    <Link className="hero10-all">Shop</Link>
                </div>

                <div className="hero10-link">
                    <Link className="hero10-all">Contact</Link>
                </div>
                 </div>

 </div>

           
















        </div>
    )
}

export default Hero10
