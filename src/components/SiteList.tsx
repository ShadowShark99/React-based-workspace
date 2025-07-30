import Button from './Button'
import "./SiteList.css"
interface Props{
  siteL: string[][];
}

const SiteList = ({siteL}: Props) => {
  return (
    <div>
          <h1>Website List</h1>
          <div className="web-list">
            {siteL.map((site, index) => (
              <Button key={index} url={site[1]}>{site[0]}</Button>
            ))}
            </div>
            
        </div>
  )
}

export default SiteList