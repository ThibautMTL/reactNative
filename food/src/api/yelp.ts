import axios from "axios";
import { environment } from "../../env";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: "Bearer " + environment.CONST_YELPAPIKEY,
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: false,
});
