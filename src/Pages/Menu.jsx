import Footer from "../Footer/Footer"
import Hero1 from "../Sections/Hero1"
import Hero11 from "../Sections/Hero11"
import Hero12 from "../Sections/Hero12"
import Hero13 from "../Sections/Hero13"
import Hero14 from "../Sections/Hero14"
import Hero15 from "../Sections/Hero15"
import Hero16 from "../Sections/Hero16"
import { useEffect } from "react"





function Menu() {
useEffect(()=>{
window.scrollTo(0,0)
})
  return (
    <div>
    <Hero1 />
    <Hero11 />
    <Hero12 />
    <Hero13 />
    <Hero14 />
    <Hero15 />
    <Hero16 />
    <Hero13 />
    <Footer />


      
    </div>
  )
}

export default Menu
