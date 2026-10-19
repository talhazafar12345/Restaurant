import Footer from "../Footer/Footer"
import Hero1 from "../Sections/Hero1"
import Hero17 from "../Sections/Hero17"
import Hero18 from "../Sections/Hero18"
import Hero19 from "../Sections/Hero19"
import { useEffect } from "react"





function Shop() {
useEffect(()=>{
window.scrollTo(0,0)
})
  return (
    <div>

    <Hero1 />
    <Hero17 />
    <Hero18 />
    <Hero19 />
    <Footer />
      
    </div>
  )
}

export default Shop
