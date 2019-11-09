import Axios from "axios";

const baseUrl = "http://127.0.0.1:5000";

export default class RecommendationsService {

  getNewsRecs(username) {
    return Axios.get(`${baseUrl}/news/${username}`);
  }

  getTVRecs(username) {
    return Axios.get(`${baseUrl}/tv/${username}`);
  }

}
