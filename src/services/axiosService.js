import axios from "axios";

class Axios {
  constructor() {
    return axios.create({
      baseURL: "https://api.thecatapi.com/v1",
    });
  }
}

export default class AxiosService extends Axios {
  constructor() {
    super();
    this.defaults.headers.common["x-api-key"] = "live_3kQ8upGfeFr85XdWfNs1QyTTIiL51KZAS88QcZIIZDKRIqkpP4ZGqxziqNbweXgn"
  }
}