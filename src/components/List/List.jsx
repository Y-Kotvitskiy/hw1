import { useState } from "react";


function ButtonState({stateLabel, stateHandler}) {
    return <button onClick={stateHandler}>{stateLabel}</button>
}

function ButtonDelete({index, deleteItemHandler}) {
    return <button onClick={() => deleteItemHandler(index)}>Delete</button>
}


function ListItem({index, animal, deleteItemHandler}) {

    const [stateLabel, setStateLabel ] = useState('Activate')
    const [elementStyle, setElementStyle] =useState({})

    const elementStyles =
        {
            Activate :  {color: 'green', fontWeight: 'bold'},
            Deactivate :  {}
        }

    const stateHandler = () => {

        setStateLabel ( (stateLabel) => 
             stateLabel === 'Activate' ? 'Deactivate' : 'Activate' 
        )

        setElementStyle(() =>  
            elementStyles[stateLabel]
        )

    }

    return (
        <li key={index} style={elementStyle}>
            <span className="icon"> {animal.icon} </span>
            <span className="animal-type"> {animal.type} </span> 
            <ButtonState stateLabel={stateLabel} stateHandler={stateHandler} />
            <ButtonDelete index={index} deleteItemHandler={deleteItemHandler} />
        </li> 
    )
}

function List({animals:propsAnimals}) {

    const [animals, setAnimalsList] = useState(propsAnimals)

    const deleteItemHandler = (index) => {
        console.log(index);
        setAnimalsList((animals) => {
            animals.splice(index, 1, null)
            return [...animals];
        })
    }

    return animals.some( animal => animal) ?  (
            <ul> 
            {animals.map ((animal, index) => 
                animal ? <ListItem key={index} animal={animal} index={index} deleteItemHandler={deleteItemHandler}/> : null
            )} 
        </ul>
    ) : null
}

export default List;