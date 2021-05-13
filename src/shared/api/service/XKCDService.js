const XKCDCurrent = async () => {
  const ENDPOINT = 'http://xkcd.com/info.0.json'
  return await fetch(ENDPOINT)
}

const XKCDEpisode = async (episodeNumber) => {
  const ENDPOINT = `http://xkcd.com/${episodeNumber}/info.0.json`
  return await fetch(ENDPOINT)
}

export default {
  XKCDCurrent,
  XKCDEpisode,
}