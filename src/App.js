import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Sale_Slider from './Components/Sale_Slider/Sale_Slider';
import DogMaps from './Components/DogMaps/DogMaps';
import DRC_20 from './Components/DRC_20/DRC_20';
import Collection from './Components/Collection/Collection';
import { useState } from 'react';
import { MyContext } from './MyContext';

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  return (
    <div className="App">
      <MyContext.Provider value={{ modalShow, setModalShow,modalShow2,setModalShow2 }}>

        <Header  />
        <DogMaps />
        <Collection />
        <DRC_20 />
        <Sale_Slider />

        <Footer />
      </MyContext.Provider>
    </div>
  );
}

export default App;
