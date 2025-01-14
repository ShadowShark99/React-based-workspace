
interface Props{
  setPM: any;
}

const Pomomode = ({setPM}: Props) => {
  return (
    <div>
      <button onClick={()=>setPM(0)}type="button" className="btn btn-danger">Pomodoro</button>
      <button onClick={()=>setPM(1)}type="button" className="btn btn-danger">Short Break</button>
      <button onClick={()=>setPM(2)}type="button" className="btn btn-danger">Long Break</button>
    </div>
  )
}

export default Pomomode