export default function ButtonDelete({ index, deleteItemHandler }) {
    return <button onClick={() => deleteItemHandler(index)}>Delete</button>
}