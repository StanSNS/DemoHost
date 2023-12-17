import NavBar from "./Components/STATIC/Header/NavBar";
import PricingCards from "./Components/Pricing/Pricing";
import Footer from "./Components/STATIC/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";

function App() {
    return (
        <>
            <NavBar/>

            <Hero/>

            <About/>

            <PricingCards/>

            <Gallery/>

            <Footer/>
        </>
    );
}

export default App;
