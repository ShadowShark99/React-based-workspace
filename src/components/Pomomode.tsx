
interface Props{
  setPM: any;
  pMode: number;
}

const Pomomode = ({setPM, pMode}: Props) => {
  return (
    <div>
      {(pMode === 0) ? (
        <button onClick={()=>setPM(0)}type="button" className="btn btn-secondary">Pomodoro</button>
      ) 
      : 
      ( 
        <button onClick={()=>setPM(0)}type="button" className="btn btn-danger">Pomodoro</button>
      )}
      {(pMode === 1) ? (
        <button onClick={()=>setPM(1)}type="button" className="btn btn-secondary">Short Break</button>
      ) 
      : 
      ( 
        <button onClick={()=>setPM(1)}type="button" className="btn btn-danger">Short Break</button>
      )}
      {(pMode === 2) ? (
        <button onClick={()=>setPM(2)}type="button" className="btn btn-secondary">Long Break</button>
      ) 
      : 
      ( 
        <button onClick={()=>setPM(2)}type="button" className="btn btn-danger">Long Break</button>
      )}
    </div>
  )
}

export default Pomomode