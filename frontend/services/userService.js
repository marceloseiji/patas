import { Search } from "../Search";

let apiPath = `${Search.getUrlApi().toString()}`;

//USERS
export default class userService {
  static registerUser() {
    return fetch(`${apiPath}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    }).then((response) => {
      return response;
    });
  }
}
