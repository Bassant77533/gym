import AboutUs from "./components/AboutUs"
import Coaches from "./components/Coaches"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { Hero } from "./components/Hero"
import { NavBar } from "./components/NavBar"
import PricingPlans from "./components/PricingPlans"
import Statistics from "./components/statistics"
import Testmonials from "./components/Testmonials"
import Trainers from "./components/Trainers"

function App() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Statistics/>
      <AboutUs/>
      <Coaches/>
      <Trainers/>
      <PricingPlans/>
      <Testmonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
