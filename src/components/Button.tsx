interface Props{
  children: string;
}

const Button = ({children}: Props) => {
  return (
    <form target="_blank" action={children}>
      <button className="btn btn-primary">Website</button>
    </form>
  )
}

export default Button