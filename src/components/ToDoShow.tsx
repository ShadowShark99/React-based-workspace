interface Props{
  tdList: string[];
}

const ToDoShow = ({tdList}: Props) => {
  return (
    <ul className="list-group">
      {tdList.map((tdItem,index) => (<li className="list-group-item" key={index}>{tdItem}</li>))}
    </ul>
  )
}

export default ToDoShow