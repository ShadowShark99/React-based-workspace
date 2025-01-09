
interface Props{
  onSub: () => void;
}

const SubSite = ({onSub}:Props) => {
  return (
    <button type="submit" 
                  onClick={onSub}> Add Site </button>
  )
}

export default SubSite