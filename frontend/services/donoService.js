import { Search } from "../Search";

let apiPath = `${Search.getUrlApi().toString()}`;

//DONOS
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

  static findDono(id) {
    return fetch(`${apiPath}/donos/${id}`, {
      method: "GET",
    }).then((response) => {
      return response.json();
    });
  }

  //PETS
  static findAllPets(id) {
    return fetch(`${apiPath}/donos/pets/${id}`).then((response) => {
      return response.json();
    });
  }

  //AddPet
  static addPet(petForm) {
    console.log("donoService");
    return fetch(`${apiPath}/donos/pets/insert`, {
      method: "POST",
      body: petForm,
    }).then((response) => {
      return response;
    });
  }

  //Delete Pet
  static deletePet(id, path) {
    return fetch(`${apiPath}/donos/pets/delete/${id}/${path}`, {
      method: "DELETE",
    }).then((response) => {
      return response;
    });
  }
}
