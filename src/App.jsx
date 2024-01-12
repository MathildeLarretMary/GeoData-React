import { useEffect, useState } from 'react';
import './App.css';
import CountryCard from './Components/CountryCard';

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
      </header>
      <main>
        {geodata && (geodata?.map((region) => {
          return <CountryCard key={region.cca3} datum={region}/>
        }))}
      </main>
    </div>
  );
}

export default App;
