<template>
  <div class="q-pa-md container">
    <h4>Cliente: {{this.dono.nome}}</h4>
  </div>
</template>

<script>
  export default {
    name: "Donos",
    props: {},
    data() {
      return {
        dono: {
          nome: null
        }
      };
    },
    methods: {
      findDono() {
        this.$donoService.findDono(this.$route.params.id).then(response => {
          if (!response.error) {
            this.dono.nome = response[0].dono_nome;
            return;
          } else {
            throw new Error(response.error);
          }
        });
      }
    },
    mounted() {
      this.findDono();
    }
  };
</script>