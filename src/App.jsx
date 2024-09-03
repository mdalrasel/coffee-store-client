
import './App.css'
import Banner from './components/Banner'
import CoffeeCard from './components/CoffeeCard'
import ExtraBanner from './components/ExtraBanner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='container mx-auto bg-white'>
      <Navbar></Navbar>
      <Banner></Banner>
      <CoffeeCard></CoffeeCard>
      <ExtraBanner></ExtraBanner>
      <Footer></Footer>

    </div>
  )
}

export default App
