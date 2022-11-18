import axios from "axios";

export default axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  headers: {
    "x-api-key":
      "live_3kQ8upGfeFr85XdWfNs1QyTTIiL51KZAS88QcZIIZDKRIqkpP4ZGqxziqNbweXgn",
  },
});
