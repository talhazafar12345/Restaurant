import Footer from "../Footer/Footer"
import Hero1 from "../Sections/Hero1"
import Hero20 from "../Sections/Hero20"
import Hero21 from "../Sections/Hero21"
import Hero22 from "../Sections/Hero22"
import { useEffect } from "react"





function Contact() {

useEffect(()=>{
window.scrollTo(0,0)
})
  return (
    <div>

    <Hero1 />
    <Hero20 />
    <Hero21 />
    <Hero22 />
    <Footer />
      
    </div>
  )
}

export default Contact
