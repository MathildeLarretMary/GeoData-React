import { useEffect, useState } from 'react';
import './App.css';
import CountryCard from './Components/CountryCard';
// import Modale from './Components/Modale';

function App() {

  const [geodata, setGeodata] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/region/europe')
    .then(res => res.json())
    .then((data) => {setGeodata(data)})
    .catch(err => console.log('Error:', err.message))
  }, [])

  return (
    <div className="App">
      <header>
        <h1>Europe Countries</h1>
        <p>Click on a card to reveal information</p>
      </header>
      {/* {console.log(geodata)} */}
      {geodata?.map((region) => {
        console.log(region);
        <CountryCard name={region.name.common} img={region.flags.png}/>
      })}
      {/* <Modale /> */}
    </div>
  );
}

export default App;
