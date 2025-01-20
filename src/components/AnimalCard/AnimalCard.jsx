import Button from '../Button/Button';
import './styles.css';

function AnimalCard({animal_name, animal_species, animal_image, children }) {

    return(
        <div className="animal-card-wrapper">
        <h3>{animal_name}</h3>
        <div>{animal_species}</div>
        <img src={animal_image} className='card-image' />
       {children}
        </div>
    );
}

export default AnimalCard;