import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Sale_Slider from './Components/Sale_Slider/Sale_Slider';
import DogMaps from './Components/DogMaps/DogMaps';
import DRC_20 from './Components/DRC_20/DRC_20';
import Collection from './Components/Collection/Collection';

function App() {
  return (
    <div className="App">
     <Header/>
     <DogMaps/>
     <Collection/>
     <DRC_20/>
     <Sale_Slider/>
     
     <Footer/>
    </div>
  );
}

export default App;
