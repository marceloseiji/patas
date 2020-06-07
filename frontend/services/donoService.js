import { Search } from "../Search";

let apiPath = `${Search.getUrlApi().toString()}/dono`;

export default class donoService {
  static getAll() {
    fetch(apiPath).then((response) => {
      return response.json();
    });
  }
}
