import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "GET",
    // url: "https://api.deezer.com/search",
    url: "https://api.musixmatch.com/ws/1.1/artist.albums.get",
    params: {
      apikey: process.env.MUSIXMATCH_API_KEY,
      artist_id: req.query.artistId,
      //q_track: req.query.track,
      per_page: "10",
      page: "1",
    },
  };
  try {
    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json(error.response.data);
  }
}
