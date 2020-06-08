<template>
  <div class="donos">
    <div class="container">
      <div class="d-flex my-3">
        <h2>Donos</h2>
      </div>
      <div class="list-group" v-for="item in lista" v-bind:key="item.id">
        <a class="list-group-item list-group-item-action list-group-item-info my-1">
          <span class="align-middle">{{ item.nome }}</span>
          <div class="row float-right">
            <a class="btn btn-secondary mx-2 btn-sm" :href="`donos/${item.id}`">
              <i class="fas fa-arrow-circle-right"></i>
              Ver
            </a>
            <button class="btn btn-info mx-2 btn-sm">
              <i class="fas fa-pen"></i>
              Atualizar
            </button>
            <button class="btn btn-danger mx-2 btn-sm" v-on:click="deleteDono(item.id, item.nome)">
              <i class="fas fa-trash-alt"></i>
              Excluir
            </button>
          </div>
        </a>
      </div>

      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-success my-2"
        data-toggle="modal"
        data-target="#modalAdd"
      >
        <i class="fas fa-plus-circle"></i>Adicionar
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="modalAdd"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalDono"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalDono">Adicionar Dono</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-primary">Salvar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Donos",
    props: {},
    data() {
      return {
        exibirLista: true,
        lista: null
      };
    },
    methods: {
      listarDonos() {
        this.$donoService.getAll().then(response => {
          if (!response.error) {
            this.lista = response.map(obj => {
              return {
                nome: obj.dono_nome,
                id: obj.dono_id
              };
            });
          } else {
            throw new Error(response.error);
          }
        });
      },
      deleteDono(id, name) {
        this.$confirm(`Deseja excluir ${name}?`).then(() => {
          this.$donoService.deleteDono(id).then(response => {
            if (!response.error) {
              this.$alert(`${name} foi removida`);
              this.listarDonos();
              return;
            } else {
              throw new Error(response.error);
            }
          });
        });
      },
      addDono(id, name) {}
    },
    mounted() {
      this.listarDonos();
    }
  };
</script>