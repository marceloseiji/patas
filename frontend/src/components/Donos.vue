<template>
  <div class="donos">
    <div class="container">
      <div class="d-flex my-5">
        <h2>Donos</h2>
        <button class="btn btn-primary ml-2">Adicionar</button>
      </div>
      <div class="list-group" v-for="item in lista" v-bind:key="item.id">
        <a class="list-group-item list-group-item-action list-group-item-info" :href="`donos/${item.id}`">{{ item.nome }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Donos",
    props: {
    },
    data() {
      return {
        exibirLista: true,
        lista: null
      }
    },
    methods: {
      listarDonos() {
        this.$donoService.getAll().then(response => {
          if(response.error) {
            return;
          } else {
            this.lista = response.data.map((obj) => {
              return {
                nome: obj.dono_nome,
                id: obj.dono_id
              }
            })
          }
        })
      }
    },
    mounted() {
      this.listarDonos();
    }
  };
</script>