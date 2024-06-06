
import './App.scss'
import Header from './components/Header/Header'
import Regions from './components/Regions/Regions'
import TripInfo from './components/TripInfo/TripInfo'

function App() {

  return (
    <>
    <div className="main-container">
      <Header/>
      <TripInfo/>
      <Regions />
    </div>
    </>
  )
}

export default App
