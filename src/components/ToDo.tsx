import { useState } from "react";
import ToDoShow from "./ToDoShow";
import "./ToDo.css";
import ToDoAdd from "./ToDoAdd";

const ToDo = () => {
  const [todoList,setTodoList] = useState(["wake up","eat food","play MC","sleep"]);
  const [todoItem,setTodoItem] = useState("");

  // const handleDelete = (index) => {
  //     setTodoList(todoList.filter((_,i)=> i !== index));
  // }
  return (
    <>
    <div className="tdTitle">ToDo</div>
    <ToDoShow tdList={todoList} setList={setTodoList}></ToDoShow>
    <ToDoAdd onItemChange={setTodoItem} onAdd={setTodoList} addTD={todoItem} tdList={todoList}></ToDoAdd>
    </>
  )
}
export default ToDo