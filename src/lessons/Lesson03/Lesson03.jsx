import AnimalCard from '../../components/AnimalCard/AnimalCard';
import Button from '../../components/Button/Button';
import { lionData, zebraData, hippoData } from './data';
import './styles.css';

function Lesson03() {
    return (
        <div className="lesson03-wrapper">
            <AnimalCard
                animal_name={lionData.name}
                animal_species={lionData.species}
                animal_image={lionData.image}
            />

            {/*      если мы используем prop children при создании компонента, 
        у нас появляется возмодность добавить доп структуру и компонент,
        передавая межлу открывающим и закрвающим тегом вызова компонента */}


            <AnimalCard
                animal_name={zebraData.name}
                animal_species={zebraData.species}
                animal_image={zebraData.image}
            >
                <div>Один из главных персонажей</div>
                <Button  name='Get more info'/>

            </AnimalCard>

            <AnimalCard
                animal_name={hippoData.name}
                animal_species={hippoData.species}
                animal_image={hippoData.image}
            />






            {/*  при вызове компонента Button передается значение для свойства name объекта props*/}
            <Button name='Sent data' />
            <Button name='GET' />
            <Button />
        </div>
    )
}

export default Lesson03;