import { Search } from "../Search";

let apiPath = `${Search.getUrlApi().toString()}/donos`;

export default class donoService {
  static getAll() {
    return fetch(apiPath).then((response) => {
      return response.json();
    });
  }

  static deleteDono(id) {
    return fetch(`${apiPath}/delete/${id}`, {
      method: "DELETE",
    }).then((response) => {
      return response;
    });
  }

  static addDono(id) {
    return fetch(`${apiPath}/donos/insert`, {
      method: "INSERT",
    }).then((response) => {
      return response;
    });
  }
}
