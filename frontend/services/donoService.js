import { Search } from "../Search";

let apiPath = `${Search.getUrlApi().toString()}`;

export default class donoService {
  static getAll() {
    return fetch(`${apiPath}/donos`).then((response) => {
      return response.json();
    });
  }

  static deleteDono(id) {
    return fetch(`${apiPath}/donos/delete/${id}`, {
      method: "DELETE",
    }).then((response) => {
      return response;
    });
  }

  static addDono(nome) {
    return fetch(`${apiPath}/donos/insert`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nome),
    }).then((response) => {
      return response;
    });
  }

  static updateDono(nome, id) {
    return fetch(`${apiPath}/donos/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nome),
    }).then((response) => {
      return response;
    });
  }
}
