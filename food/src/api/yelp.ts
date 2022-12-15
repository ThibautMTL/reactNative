import axios from "axios";
import { CONST_YELPAPIKEY } from "../../env";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: "Bearer " + CONST_YELPAPIKEY,
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: false,
});
