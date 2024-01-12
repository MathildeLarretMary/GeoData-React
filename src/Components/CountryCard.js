import './CountryCard.css';

export default function CountryCard() {

    const handleClickCard = () => {
        console.log('handleClickCard');
    }

    return(
        <div className="card" onClick={handleClickCard}>
            <p>CardName</p>
            <img src = '/OIP.jpg' alt={`CardName-flag`}></img>
        </div>
    )
};