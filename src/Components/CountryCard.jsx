import './CountryCard.css';

export default function CountryCard({name, img}) {

    const handleClickCard = () => {
        console.log('handleClickCard');
    }

    return(
        <div className="card" onClick={handleClickCard}>
            <p>{name}</p>
            <img src = {img} alt={`${name}-flag`}></img>
        </div>
    )
};