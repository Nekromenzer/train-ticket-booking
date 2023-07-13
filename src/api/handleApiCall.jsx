import axios from 'axios'
import urlDoc from './url'

const api = import.meta.env.VITE_API_URL

const handleApiCall = ({ variant, urlType }) => {
  const url = `${api}${urlDoc[variant][urlType].url}`
  const type = urlDoc[variant][urlType].type

  console.log(type, url)
  return <div>handleApiCall</div>
}

export default handleApiCall
