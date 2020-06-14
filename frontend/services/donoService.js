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

  //Add Pet
  static addPet(petForm) {
    return fetch(`${apiPath}/donos/pets/insert`, {
      method: "POST",
      body: petForm,
    }).then((response) => {
      return response;
    });
  }

  //Update Pet
  static updatePet(petForm, id) {
    return fetch(`${apiPath}/donos/pets/update/${id}`, {
      method: "PUT",
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

  //SERVICOS
  //Busca todos os serviços
  static findAllServices(id) {
    return fetch(`${apiPath}/donos/servicos/${id}`).then((response) => {
      return response.json();
    });
  }
  //Add Sereviço
  static addServico(servico) {
    console.log("SERVICE addServico");
    return fetch(`${apiPath}/donos/pets/servicos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(servico),
    }).then((response) => {
      return response;
    });
  }

  static deleteServico(id) {
    console.log("DeleteServico", id);
    return fetch(`${apiPath}/donos/pets/servico/delete/${id}`, {
      method: "DELETE",
    }).then((response) => {
      return response;
    });
  }
}
