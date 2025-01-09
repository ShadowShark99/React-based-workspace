import Button from './Button'

interface Props{
  siteL: string[][];
}

const SiteList = ({siteL}: Props) => {
  return (
    <div>
          <h1>Website List</h1>
            {siteL.map((site, index) => (
              <Button key={index} url={site[1]}>{site[0]}</Button>
            ))}
        </div>
  )
}

export default SiteList