import axios from "axios";

const URL = "https://eonet.gsfc.nasa.gov/api/v3/events?category=wildfires";

export const fetchWildfires = async () => {
  const res = await axios.get(URL);
  return res.data.events;
};