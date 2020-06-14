<template>
  <div class="q-pa-md container dono">
    <h4>Cliente: {{this.dono.nome}}</h4>
    <q-btn color="positive q-my-sm" icon-right="add" label="Add Pet" @click="prompt = true" />
    <div class="row">
      <div class="col-12 col-md-4" v-for="item in lista" v-bind:key="item.id">
        <div class="q-pa-md">
          <q-card class="my-card">
            <q-img
              :src="item.foto_path"
              spinner-color="white"
              :ratio="4/3"
              style="background-position: center;"
            >
              <div class="absolute-bottom">
                <div class="text-h6">{{item.pet_nome}}</div>
                <div class="text-subtitle2">Raça: {{item.pet_raca}}</div>
              </div>
            </q-img>
            <q-card-actions>
              <q-btn flat>Action 1</q-btn>
              <q-btn
                icon="delete"
                color="red"
                @click="deletePet(item.pet_id, item.pet_nome, item.foto_path)"
              ></q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>

    <!-- Modal Add -->
    <q-dialog v-model="prompt">
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Adicionar Pet</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-form method="post" enctype="multipart/formdata">
            <div class="q-gutter-y-md column" style="max-width: 300px">
              <q-input clearable filled v-model="pet.pet_nome" label="Nome" />
              <q-input clearable filled v-model="pet.pet_raca" label="Raça" />
              <q-option-group
                :options="pet.pet_genero_options"
                label="Notifications"
                type="radio"
                v-model="pet.pet_genero"
              />
              <q-input
                @input="val => { pet.pet_foto = val[0] }"
                filled
                type="file"
                hint="Selecione a foto"
                name="myFile"
                enctype="multipart/form-data"
                v-model="pet.pet_foto"
              />
              <q-input v-model="pet.pet_nascimento" filled type="date" hint="Data de nascimento" />
            </div>
          </q-form>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancelar" v-close-popup />
          <q-btn color="positive" label="Adicionar" v-close-popup v-on:click="addPet()" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
  export default {
    name: "Dono",
    props: {},
    data() {
      return {
        dono: {
          nome: null,
          id: null
        },
        lista: null,
        prompt: null,
        pet: {
          pet_nome: null,
          pet_nascimento: null,
          pet_foto: null,
          pet_raca: null,
          pet_genero: null,
          pet_id: null,
          pet_genero_options: [
            { label: "macho", value: "M" },
            { label: "fêmea", value: "F" },
            { label: "não sei", value: "X" }
          ],
          foto_path: null,
          pet_slug: null
        },
        petForm: "",
        path: null
      };
    },
    methods: {
      findDono() {
        this.$donoService.findDono(this.$route.params.id).then(response => {
          if (!response.error) {
            this.dono.nome = response[0].dono_nome;
            this.dono.id = response[0].dono_id;
            return;
          } else {
            throw new Error(response.error);
          }
        });
      },
      findAllPets() {
        this.$donoService.findAllPets(this.$route.params.id).then(response => {
          if (!response.error) {
            this.lista = response;
            return;
          } else {
            throw new Error(response.error);
          }
        });
      },
      addPet() {
        if (this.pet.pet_foto !== null) {
          this.pet.foto_path = `
                            http://localhost:3000/uploads/${Date.now()}-${
            this.pet.pet_foto.name
          }`;
          this.pet.foto_path = this.pet.foto_path.replace(/\s/g, "");
        } else {
          this.pet.foto_path = "";
        }
        this.petForm = new FormData();
        this.petForm.append("pet_nome", this.pet.pet_nome);
        this.petForm.append("pet_nascimento", this.pet.pet_nascimento);
        this.petForm.append("pet_foto", this.pet.pet_foto);
        this.petForm.append("pet_raca", this.pet.pet_raca);
        this.petForm.append("pet_genero", this.pet.pet_genero);
        this.petForm.append("dono_id", this.dono.id);
        this.petForm.append("foto_path", this.pet.foto_path);

        this.$donoService.addPet(this.petForm).then(response => {
          if (!response.error) {
            (this.petForm = null),
              (this.pet.pet_nome = ""),
              (this.pet.pet_nascimento = ""),
              (this.pet.pet_foto = null),
              (this.pet.pet_raca = ""),
              (this.pet.pet_genero = ""),
              (this.pet.pet_genero_options.value = null);
            this.pet.foto_path = "";
            this.findAllPets();
            return;
          } else {
            throw new Error(response.error);
          }
        });
      },
      deletePet(id, nome, foto_path) {
        this.path = encodeURIComponent(foto_path);
        if (confirm(`Excluir ${nome}`)) {
          this.$donoService.deletePet(id, this.path).then(response => {
            if (!response.error) {
              this.findAllPets();
              return;
            } else {
              throw new Error(response.error);
            }
          });
        }
      }
    },
    mounted() {
      this.findDono();
      this.findAllPets();
    }
  };
</script>