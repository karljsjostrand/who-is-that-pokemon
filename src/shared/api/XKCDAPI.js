const XKCDAPICurrent = () => 'http://xkcd.com/info.0.json'
const XKCDAPIEpisode = (episodeNumber) => `http://xkcd.com/${episodeNumber}/info.0.json`

export default { 
  XKCDAPICurrent, 
  XKCDAPIEpisode,
}