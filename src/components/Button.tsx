interface Props{
  children: string;
  url: string;
}

const Button = ({children,url}: Props) => {
  return (
    <form target="_blank" action={url}>
      <button className="btn btn-primary">{children}</button>
    </form>
  )
}

export default Button