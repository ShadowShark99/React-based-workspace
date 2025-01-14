
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
      className="btn btn-primary">Pause</button>
    </div>
  )
}

export default Pause