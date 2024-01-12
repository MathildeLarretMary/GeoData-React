import'./Modale.css';

export default function Modale() {

    const handleClickClose = () => {
        console.log('click close');
    }

    return(
        <div className="modale">
            <div className='modale-card'>
                <button className="close-modale" onClick={handleClickClose}>x</button>
                <h3>Here is Country Informations</h3>
                <ul className='info-list'>
                    <li>Laguage(s) : <span>language</span></li>
                    <li>Capital : <span>capital</span></li>
                    <li>Population : <span>3</span></li>
                </ul>
            </div>
        </div>
    )
}