
import './App.css'
import Banner from './components/Banner'
import CoffeeCard from './components/CoffeeCard'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='container mx-auto bg-white'>
      <Navbar></Navbar>
      <Banner></Banner>
      <CoffeeCard></CoffeeCard>

    </div>
  )
}

export default App
