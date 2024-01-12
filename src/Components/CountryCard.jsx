import { useState } from 'react';
import './CountryCard.css';
import Modale from './Modale';

export default function CountryCard({datum}) {

    const [openModale, setOpenModale] = useState(false)

    const handleClickCard = () => {
        setOpenModale(true)
    }

    return(
        <>
        {/* <Modale datum={datum}/> */}
        <div className="card" onClick={handleClickCard}>
            <p>{datum.name.common}</p>
            <img src = {datum.flags.png} alt={`${datum.name.common}-flag`}></img>
        </div>

        {openModale && (
            <Modale datum={datum} boolean={openModale}/>
        )}
        </>

    )
};