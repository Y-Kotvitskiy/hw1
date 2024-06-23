import { useState } from "react"
import ButtonState from "../ButtonState/ButtonState"
import ButtonDelete from "../ButtonDelete/ButtonDelete"

export default function ListItem({ index, list, deleteItemHandler }) {

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
        <li key={index} style={elementStyle}>
            <span className="icon"> {list.icon} </span>
            <span className="type"> {list.type} </span>
            <ButtonState stateLabel={stateLabel} stateHandler={stateHandler} />
            <ButtonDelete index={index} deleteItemHandler={deleteItemHandler} />
        </li>
    )
}
