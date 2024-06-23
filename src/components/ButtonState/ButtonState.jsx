export default function ButtonState({ stateLabel, stateHandler }) {
    return <button onClick={stateHandler}>{stateLabel}</button>
}


