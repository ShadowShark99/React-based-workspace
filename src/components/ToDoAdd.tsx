interface Props{
  onItemChange: (e) => void;
  onAdd: any;
  addTD: string;
  tdList: string[];
}

const ToDoAdd = ({onItemChange,onAdd,addTD,tdList}: Props) => {
  return (
    <>
      <label>Add to List: </label>
      <input type="text" onChange={(e)=>onItemChange(e.target.value)} value={addTD}></input>
      <button type="submit" onClick={
        ()=>{
          if(addTD !== "")
            onAdd([...tdList,addTD]); 
          onItemChange("");
        }
        }> Add item </button>
    </>
  )
}

export default ToDoAdd