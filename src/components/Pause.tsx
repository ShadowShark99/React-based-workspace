import "./Pause.css"

interface Props{
  setP: any;
  p: boolean;
}
const Pause = ({setP,p}: Props) => {

  //Note: continue working on pause button to stop time and start time
  //add pause variable to useeffect dependency.
  return (
    <div>
      <button 
      onClick={() => {setP(!p);}} 
      type="button" 
      className="btn btn-primary pause-button"
      >
        {p ? ("Start"):("Pause")}
        <div className="pause-button-tooltip">Spacebar - Pause</div>
      </button>
      
    </div>
  )
}

export default Pause