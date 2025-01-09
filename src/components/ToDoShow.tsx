interface Props{
  tdList: string[];
  setList?: any;

}

const ToDoShow = ({tdList,setList}: Props) => {
  return (
    <>
    <div>cock</div>
    <ul className="list-group">
      {tdList.map((tdItem,index) => (<li className="list-group-item" key={index}>
        {tdItem}
        <button className="btn-close" onClick={()=>setList(tdList.filter((_,i)=>i !== index ))}></button>
      </li>))}
    </ul>
    </>
  )
}

//<button className="btn-close" onClick={onDel(index)}></button>

export default ToDoShow