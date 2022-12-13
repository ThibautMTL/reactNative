import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer s_Ns6K1R4Q4kwaH87c7UGkMlqxGfKTvvqfkA5-vH1JPoDiy3L7eZGJDLoTWaSyiNIfsMbSIKiRVA5jmksg_EXIuVUbIn37OuFZVKJSnP4JdArQmeBvF2NxnO5YYjY3Yx",
  },
});
