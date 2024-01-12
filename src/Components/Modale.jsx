import { useEffect, useState } from 'react';
import'./Modale.css';

export default function Modale({datum, boolean}) {

    let languagesArray = []
    const [lang, setLang] = useState('');
    const [isOpen, setIsOpen] = useState(boolean);

    useEffect(() => {
        for(let i in datum.languages) {
            languagesArray.push(datum.languages[i]);
        }
        setLang(languagesArray.join(', '));
    }, [])

    const handleClickClose = () => {
        setIsOpen(!isOpen);
    }

    return(
        <>
        {isOpen && (
        <div className="modale">
            <div className='modale-card'>
                <button className="close-modale" onClick={handleClickClose}>x</button>
                <h3>Here is {datum.name.common} Informations</h3>
                <ul className='info-list'>
                    <li>Laguage(s) : {lang}</li>
                    <li>Capital : <span>{datum.capital}</span></li>
                    <li>Population : <span>{datum.population}</span></li>
                </ul>
            </div>
        </div>
        )}
        </>
    )
}