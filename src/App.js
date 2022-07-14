import './App.css';
import Form from './components/Form';
import People from './views/People';
import Planets from './views/Planets';
import Films from './views/Films';
import Species from './views/Species';
import Vehicles from './views/Vehicles';
import Starships from './views/Starships';
import ErrorPage from './views/ErrorPage';
import {Route, Routes} from 'react-router-dom'


// const ErrorPage = () => {
//   return (
//     <div>
//       <h1>These are not the droids you're looking for.</h1>
//       <img src="https://lumiere-a.akamaihd.net/v1/images/62bf0e03e8459d0001f4881b-image_71900d89.jpeg?region=192%2C0%2C1152%2C864&width=960" alt='obi-wan kenobi'/>
//     </div>
//   )
// }


function App() {
  return (
    <div className="App">
      <Form/>
      <Routes>
        <Route path="/people/:id" element={<People/>}/>
        <Route path="/planets/:id" element={<Planets/>}/>
        <Route path="/films/:id" element={<Films/>}/>
        <Route path="/species/:id" element={<Species/>}/>
        <Route path="/vehicles/:id/" element={<Vehicles/>}/>
        <Route path="/starships/:id" element={<Starships/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
