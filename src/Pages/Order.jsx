import Footer from "../Footer/Footer"
import Hero1 from "../Sections/Hero1"
import Hero23 from "../Sections/Hero23"
import Hero24 from "../Sections/Hero24"
import { useEffect } from "react"






function Order() {
useEffect(()=>{
  window.scrollTo(0,0)
})
  return (
    <div>
    <Hero1 />
    <Hero23 />
    <Hero24 />
    <Footer />
      
    </div>
  )
}

export default Order
