import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Blogs from "./Blog";
import Footer from "./Footer";
import Industries from "./Industries";
import Product1 from "./Product1";
import Product2 from "./Product2";
import Product3 from "./Product3";


const Home = ()=>{
    return(
        <>
            <Navbar/>
            <Hero/>
            <Industries/>
            <Product1/>
            <Product2/>
            <Product3/>
            <Blogs/>
            <Footer/>
        </>
    )
}

export default Home;