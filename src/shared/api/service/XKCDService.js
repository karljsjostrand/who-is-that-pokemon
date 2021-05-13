// cors :(

const Current = async () => {

  const ENDPOINT = 'http://xkcd.com'
  try {
   // https://xkcd.now.sh
   // { headers: { 'Access-Control-Allow-Origin': '*' }}
   // https://cors-anywhere.herokuapp.com/
   // {mode: 'no-cors'}
   // { allowMethods: ['GET'] }
   return await fetch(ENDPOINT).then(res => res.json())
  } catch (error) {
    console.log(error)
  }
}

const Episode = async (episodeNumber) => {
  const ENDPOINT = `http://xkcd.com/${episodeNumber}/info.0.json`
  return await fetch(ENDPOINT)
}

export default {
  Current,
  Episode,
}