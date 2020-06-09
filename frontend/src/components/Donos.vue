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
      <button type="button" class="btn btn-success my-2" v-on:click="show()">
        <i class="fas fa-plus-circle"></i>Adicionar
      </button>

      <!-- Modal -->
      <modal name="modalAdd">
        <div class="modal-header">
          <h5 class="modal-title" id="modalDono">Adicionar Dono</h5>
          <button type="button" class="close" v-on:click="hide()" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <input
            class="form-control my-2"
            type="text"
            placeholder="Nome"
            v-model="novo_dono.dono_nome"
          />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" v-on:click="hide()">Cancelar</button>
          <button type="button" class="btn btn-primary" v-on:click="addDono()">Salvar</button>
        </div>
      </modal>
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
        lista: null,
        novo_dono: {
          dono_nome: null
        }
      };
    },
    methods: {
      show() {
        this.$modal.show("modalAdd");
      },
      hide() {
        this.$modal.hide("modalAdd");
      },
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
      addDono() {
        this.$donoService.addDono(this.novo_dono).then(response => {
          this.$alert(`run`);
          if (!response.error) {
            this.hide();
            this.novo_dono.dono_nome = "";
            this.$alert(`${this.novo_dono.dono_nome} adicionado(a)`);
            this.listarDonos();
            return;
          } else {
            throw new Error(response.error);
          }
        });
      }
    },
    mounted() {
      this.listarDonos();
    }
  };
</script>