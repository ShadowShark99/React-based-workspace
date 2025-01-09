interface Props{
  onItemChange: (e) => void;
  onAdd: any;
  addTD: string;
  tdList: string[];
}

const ToDoAdd = ({onItemChange,onAdd,addTD,tdList}: Props) => {
  return (
    <>
      <div>ToDoAdd</div>
      <label>Add to List: </label>
      <input type="text" onChange={(e)=>onItemChange(e.target.value)}></input>
      <button type="submit" onClick={()=>onAdd([...tdList,addTD])}> Add item </button>
    </>
  )
}

export default ToDoAdd