import NavBar from "./Components/STATIC/Header/NavBar";
import PricingCards from "./Components/Pricing/Pricing";
import Footer from "./Components/STATIC/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";
import Hero from "./Components/Hero/Hero";

function App() {
    return (
        <>
            <NavBar/>

            <Hero/>

            <PricingCards/>

            <Gallery/>

            <Footer/>
        </>
    );
}

export default App;
