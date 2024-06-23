import { useState } from "react";
import ListItem from "./ListItem/ListItem";


function List({ animals: propsAnimals }) {

    const [animals, setAnimalsList] = useState(propsAnimals)

    const deleteItemHandler = (index) => {
        setAnimalsList((animals) => {
            animals.splice(index, 1, null)
            return [...animals];
        })
    }

    return (
        animals.some(animal => animal) ?
            <ul>
                {animals.map((animal, index) =>
                    animal ? <ListItem key={index} list={animal} deleteItemHandler={() => deleteItemHandler(index)} /> : null
                )}
            </ul>
            : null)
}

export default List;