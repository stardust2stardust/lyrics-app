import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: "https://api.deezer.com/search",
    params: { q: req.query.artist, per_page: "10", page: "1" },
  };
  try {
    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json(error.response.data);
  }
}
