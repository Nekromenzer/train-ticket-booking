import axios from 'axios'
import urlDoc from './url'

const baseUrl = import.meta.env.VITE_API_URL

const handleApiCall = ({
  variant = 'user',
  urlType,
  data,
  params,
  cb = returnData => {
    console.log(returnData, 'default cb')
  },
  setLoading = state => {
    console.log(state, 'default setLoading')
  }
}) => {
  const url = `${baseUrl}${urlDoc[variant][urlType].url}`
  const type = urlDoc[variant][urlType].type

  async function handelCall () {
    setLoading(true)
    try {
      const response = await axios({
        method: 'get',
        url: 'https://fakestoreapi.com/products',
        data: data,
        params: params,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      setLoading(false)
      return cb(response)
    } catch (error) {
      setLoading(false)
      throw error
    }
  }
  return handelCall()
}

export default handleApiCall
