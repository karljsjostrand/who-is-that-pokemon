import Axios from 'axios'

const API = Axios.create({
  baseURL: 'http://xkcd.com/'
})

const Current = () => {
  try {
   return API.get('info.0.json')
  } catch (error) {
    console.log(error)
  }
}

const Episode = async (episodeNumber) => {
  const ENDPOINT = `${episodeNumber}/info.0.json`
  return await fetch(ENDPOINT)
}

export default {
  Current,
  Episode,
}