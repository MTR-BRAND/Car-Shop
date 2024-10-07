import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'
import Navbar from './component/nav';
import Hero from './component/hero';
import Filter from './component/filter';
import Trending from './component/trending';
import Selling from './component/selling';
import Review from './component/review';
import Map from './component/map';
import Footer from './component/footer';
function App() {


  return (
    <>
     <Navbar/>
     <Hero/>
     <Filter/>
     <Trending/>
     <Selling/>
     <Review/>
     <Map/>
     <Footer/>

    </>
  )
}

export default App
