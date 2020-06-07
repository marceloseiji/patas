import { Search } from "../Search";

let apiPath = `${Search.getUrlApi().toString()}/donos`;

export default class donoService {
  static getAll() {
    return fetch(apiPath).then((response) => {
      return response.json();
    });
  }
}
