import './App.css'
import Card from './Components/Cards/Card'
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar'
import Slider from './Components/Slider'
import { Data } from './Data';

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <div className='smartphones'>
        <h2>Smartphones & Accessories</h2>
      </div>
      {Data.map((e, i) => (
        <Card key={i} imgSrc={e.imgSrc} name={e.name} features={e.features} price={e.price} />
      ))}
      <Footer />
    </>
  )
}

export default App
