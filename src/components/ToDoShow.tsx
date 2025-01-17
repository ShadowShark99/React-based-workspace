import "./ToDoShow.css"

interface Props{
  tdList: string[];
  setList?: any;

}

const ToDoShow = ({tdList,setList}: Props) => {
  return (
    <div className="tdListDiv">
    <ul className="list-group">
      {tdList.map((tdItem,index) => (<li className="list-group-item" key={index}>
        <div className="todo-item">
          <input type="checkbox"/>
        {tdItem}
        <button className="btn-close" onClick={()=>setList(tdList.filter((_,i)=>i !== index ))}></button>
        </div>
        
      </li>))}
    </ul>
    </div>
  )
}

//<button className="btn-close" onClick={onDel(index)}></button>

export default ToDoShow