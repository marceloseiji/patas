<template>
  <div class="q-pa-md">
    <h4>
      Donos de pet
      <q-btn class="q-mx-sm" unelevated round color="positive" icon="add" @click="prompt = true" />
    </h4>

    <q-list bordered separator>
      <q-item class="q-pa-md" v-for="item in lista" v-bind:key="item.id" v-ripple>
        <q-item-section avatar>
          <q-avatar color="teal" text-color="white" icon="person" />
        </q-item-section>
        <q-item-section>{{ item.nome }}</q-item-section>
        <q-btn
          class="q-mx-sm"
          unelevated
          round
          color="primary"
          icon="create"
          @click="promptUpdate = true; update_dono.dono_id = item.id"
        />
        <q-btn
          class="q-mx-sm"
          unelevated
          round
          color="warning"
          icon="visibility"
          v-bind:to="`/donos/${item.id}`"
        />
        <q-btn
          class="q-mx-sm"
          unelevated
          round
          color="red"
          icon="delete"
          v-on:click="deleteDono(item.id, item.nome)"
        />
      </q-item>
    </q-list>

    <!-- Modal Add -->
    <q-dialog v-model="prompt">
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Adicionar dono</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            dense
            v-model="novo_dono.dono_nome"
            autofocus
            @keyup.enter="prompt = false; addDono()"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancelar" v-close-popup />
          <q-btn color="positive" label="Adicionar" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Modal Update Dono -->
    <q-dialog v-model="promptUpdate">
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Atualizar dono</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            dense
            v-model="update_dono.dono_nome"
            autofocus
            @keyup.enter="updateDono(); promptUpdate = false"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancelar" v-close-popup />
          <q-btn color="positive" label="Atualizar" v-close-popup v-on:click="updateDono()" />
        </q-card-actions>
      </q-card>
    </q-dialog>
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
        },
        update_dono: {
          dono_id: null,
          dono_nome: null
        },
        alert: false,
        confirm: false,
        prompt: false,
        promptUpdate: false
      };
    },
    methods: {
      confirmAction() {
        this.modalConfim = true;
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
      deleteDono(id, nome) {
        if (confirm(`Excluir ${nome}`)) {
          this.$donoService.deleteDono(id).then(response => {
            if (!response.error) {
              this.listarDonos();
              return;
            } else {
              throw new Error(response.error);
            }
          });
        }
      },
      addDono() {
        this.$donoService.addDono(this.novo_dono).then(response => {
          if (!response.error) {
            this.novo_dono.dono_nome = "";
            this.listarDonos();
            return;
          } else {
            throw new Error(response.error);
          }
        });
      },
      updateDono() {
        this.$donoService
          .updateDono(this.update_dono, this.update_dono.dono_id)
          .then(response => {
            if (!response.error) {
              this.novo_dono.dono_nome = "";
              this.listarDonos();
              return;
            } else {
              throw new Error(response.error);
            }
          });
      },
      findDono(id) {
        this.$donoService.findDono(id).then(response => {
          if (!response.error) {
            this.novo_dono.dono_nome = "";
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