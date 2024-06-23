import { useState } from "react"
import ButtonState from "./ButtonState/ButtonState"

export default function ListItem({ list = [], deleteItemHandler }) {

    const [stateLabel, setStateLabel] = useState('Activate')
    const [elementStyle, setElementStyle] = useState({})

    const elementStyles =
    {
        Activate: { color: 'green', fontWeight: 'bold' },
        Deactivate: {}
    }

    const stateHandler = () => {

        setStateLabel((stateLabel) =>
            stateLabel === 'Activate' ? 'Deactivate' : 'Activate'
        )

        setElementStyle(() =>
            elementStyles[stateLabel]
        )

    }

    return (
        <li style={elementStyle}>
            <span className="icon"> {list.icon} </span>
            <span className="type"> {list.type} </span>
            <ButtonState stateLabel={stateLabel} stateHandler={stateHandler} />
            <button  onClick ={deleteItemHandler}>Delete</button>
        </li>
    )
}
