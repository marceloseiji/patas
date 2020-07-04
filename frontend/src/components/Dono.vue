<template>
  <div class="dono padding-top container-proj">
    <h4>Cliente: {{ this.dono.nome }}</h4>
    <!-- Btn adicionar pet -->
    <q-btn
      color="positive q-my-sm"
      icon-right="add"
      label="Add Pet"
      @click="
        prompt = true;
        petForm = null;
        pet.pet_nome = null;
        pet.pet_nascimento;
        pet.pet_foto = null;
        pet.pet_raca = null;
        pet.pet_genero = null;
        pet.pet_genero_options.value = null;
        pet.foto_path = null;
      "
    />

    <div class="row">
      <div class="col-12 col-md-4" v-for="item in lista" v-bind:key="item.id">
        <div class="q-pa-md">
          <q-card class="my-card">
            <q-img
              :src="item.foto_path"
              spinner-color="white"
              :ratio="4 / 3"
              style="background-position: center;"
            >
              <div class="absolute-bottom">
                <div class="text-h6">{{ item.pet_nome }}</div>

                <div class="text-subtitle2">Raça: {{ item.pet_raca }}</div>
              </div>
            </q-img>
            <q-card-actions>
              <q-btn
                color="positive"
                icon="import_contacts"
                @click="
                  promptServicos = true;
                  petServicos = item.pet_nome;
                  findAllServices(item.pet_id);
                  servico.servico_pet_id = item.pet_id;
                  servico.servico_texto = null;
                  update_servico.servico_texto = null;
                  showService = false;
                  showServiceUpdate = false;
                  btnCancelar = false;
                  btnConfirmarAgendamento = false;
                  btnConfirmarUpdate = false;
                  btnAgendar = true;
                  pet_id_recarregar_servicos = item.pet_id;
                "
              >
                <q-tooltip
                  content-class="bg-positive"
                  content-style="font-size: 14px"
                  >Histórico do Pet</q-tooltip
                >
              </q-btn>
              <q-btn
                color="primary"
                icon="create"
                @click="
                  promptUpdate = true;
                  pet.pet_id = item.pet_id;
                  pet.pet_nome = item.pet_nome;
                  pet.pet_foto = item.pet_foto;
                  dateFormat(item.pet_nascimento);
                  pet.pet_raca = item.pet_raca;
                  pet.pet_genero = item.pet_genero;
                  pet.foto_path = item.foto_path;
                "
              >
                <q-tooltip
                  content-class="bg-primary"
                  content-style="font-size: 14px"
                  >Atualizar Pet</q-tooltip
                >
              </q-btn>
              <q-btn
                icon="delete"
                color="red"
                @click="deletePet(item.pet_id, item.pet_nome, item.foto_path)"
              >
                <q-tooltip
                  content-class="bg-red"
                  content-style="font-size: 14px"
                  >Excluir Pet</q-tooltip
                >
              </q-btn>
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
                @input="
                  (val) => {
                    pet.pet_foto = val[0];
                  }
                "
                filled
                type="file"
                hint="Selecione a foto"
                name="myFile"
                enctype="multipart/form-data"
                v-model="pet.pet_foto"
              />
              <q-input
                v-model="pet.pet_nascimento"
                filled
                type="date"
                hint="Data de nascimento"
              />
            </div>
          </q-form>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancelar" v-close-popup />
          <q-btn
            color="positive"
            label="Adicionar"
            v-close-popup
            v-on:click="addPet()"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Modal update -->
    <q-dialog v-model="promptUpdate">
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Atualizar Pet</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-form method="post" enctype="multipart/formdata">
            <div class="q-gutter-y-md column" style="max-width: 300px">
              <q-input
                clearable
                filled
                v-model="pet.pet_nome"
                label="Nome"
                :value="pet.pet_nome"
              />
              <q-input clearable filled v-model="pet.pet_raca" label="Raça" />
              <q-option-group
                :options="pet.pet_genero_options"
                label="Notifications"
                type="radio"
                v-model="pet.pet_genero"
              />
              <q-input
                @input="
                  (val) => {
                    pet.pet_foto = val[0];
                  }
                "
                filled
                type="file"
                hint="Selecione a foto"
                name="myFile"
                enctype="multipart/form-data"
                v-model="pet.pet_foto"
              />
              <q-input
                v-model="pet.pet_nascimento"
                filled
                type="date"
                hint="Data de nascimento"
              />
            </div>
          </q-form>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancelar" v-close-popup />
          <q-btn
            color="positive"
            label="Atualizar"
            v-close-popup
            v-on:click="updatePet()"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Modal Servicos -->
    <q-dialog v-model="promptServicos">
      <q-card style="width: 700px">
        <q-card-section>
          <div class="text-h6">
            Histórico de:
            <b>{{ this.petServicos }}</b>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="q-pa-md">
            <q-list bordered separator>
              <q-item
                v-ripple
                v-for="item in this.servicos"
                :key="item.servico_id"
              >
                <q-item-section>
                  <q-item-label>{{ item.servico_descricao }}</q-item-label>
                  <q-item-label caption>Serviço</q-item-label>
                </q-item-section>

                <!-- Abre input text para atualizar o servico -->
                <div class="row avatar">
                  <q-btn
                    class="q-mx-sm"
                    round
                    icon="edit"
                    color="orange"
                    @click="
                      showServiceUpdate = true;
                      btnAgendar = false;
                      btnCancelar = true;
                      btnConfirmarUpdate = true;
                      btnConfirmarAgendamento = false;
                      showService = false;
                      update_servico.servico_id = item.servico_id;
                      update_servico.servico_texto = item.servico_descricao;
                    "
                  ></q-btn>
                  <q-btn
                    round
                    icon="delete"
                    color="red"
                    @click="deleteServico(item.servico_id, item.pet_id)"
                  ></q-btn>
                </div>
              </q-item>
            </q-list>
          </div>
          <q-form method="post" enctype="multipart/formdata"></q-form>
        </q-card-section>

        <!-- Input para adicionar servico -->
        <q-card-section class="q-pt-none" v-if="showService">
          <div class="q-pa-md">
            <q-item-label caption>Adicionar um novo serviço</q-item-label>
            <q-input
              v-model="servico.servico_texto"
              filled
              autogrow
              type="textarea"
            />
          </div>
        </q-card-section>

        <!-- Input para update do servico -->
        <q-card-section class="q-pt-none" v-if="showServiceUpdate">
          <div class="q-pa-md">
            <q-item-label caption>Atualizar serviço</q-item-label>
            <q-input
              v-model="update_servico.servico_texto"
              filled
              autogrow
              type="textarea"
            />
          </div>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <!-- Abre text input para agendar servico -->
          <q-btn
            color="positive"
            label="Agendar"
            v-on:click="
              showService = true;
              btnAgendar = false;
              btnConfirmarAgendamento = true;
              btnCancelar = true;
            "
            v-if="btnAgendar"
          />

          <!-- Confirma agendar novo servico -->
          <q-btn
            color="positive"
            label="Confirmar agendamento"
            v-if="btnConfirmarAgendamento"
            @click="
              addServico(pet_id_recarregar_servicos);
              showService = false;
              btnConfirmarAgendamento = false;
              btnAgendar = true;
              btnCancelar = false;
            "
          />

          <!-- Confirma Atualizar o servico -->
          <q-btn
            color="positive"
            label="Atualizar"
            v-if="btnConfirmarUpdate"
            @click="
              updateServico(pet_id_recarregar_servicos);
              showServiceUpdate = false;
              btnConfirmarAgendamento = false;
              btnConfirmarUpdate = false;
              btnAgendar = true;
              btnCancelar = false;
            "
          />

          <!-- Cancela adicionar servico e atualizar servico -->
          <q-btn
            color="primary"
            label="Cancelar"
            v-on:click="
              showService = false;
              showServiceUpdate = false;
              btnAgendar = true;
              btnConfirmarAgendamento = false;
              btnConfirmarUpdate = false;
              btnCancelar = false;
            "
            v-if="btnCancelar"
          />
          <!-- Fecha modal -->
          <q-btn color="orange" label="Fechar" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
// Importa moment.js
import moment from "moment";

export default {
  name: "Dono",
  props: {},
  data() {
    return {
      dono: {
        nome: null,
        id: null,
      },
      lista: null,
      prompt: null,
      promptUpdate: null,
      promptServicos: null,
      petServicos: null,
      pet_id_recarregar_servicos: null,
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
          { label: "não sei", value: "X" },
        ],
        foto_path: null,
        pet_slug: null,
      },
      petForm: "",
      path: null,
      servicos: null,
      showService: false,
      showServiceUpdate: false,
      btnAgendar: true,
      btnCancelar: false,
      btnConfirmarAgendamento: false,
      btnConfirmarUpdate: false,
      servico: {
        servico_texto: null,
        servico_pet_id: null,
      },
      servico_text_temporary: null,
      update_servico: {
        servico_texto: null,
        servico_id: null,
      },
    };
  },
  methods: {
    findDono() {
      this.$donoService.findDono(this.$route.params.id).then((response) => {
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
      this.$donoService.findAllPets(this.$route.params.id).then((response) => {
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

      this.$donoService.addPet(this.petForm).then((response) => {
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
    updatePet() {
      this.petForm = new FormData();
      this.petForm.append("pet_nome", this.pet.pet_nome);
      this.petForm.append("pet_nascimento", this.pet.pet_nascimento);
      this.petForm.append("pet_foto", this.pet.pet_foto);
      this.petForm.append("pet_raca", this.pet.pet_raca);
      this.petForm.append("pet_genero", this.pet.pet_genero);
      this.petForm.append("dono_id", this.dono.id);
      this.petForm.append("foto_path", this.pet.foto_path);

      this.$donoService
        .updatePet(this.petForm, this.pet.pet_id)
        .then((response) => {
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
            location.reload();
            return;
          } else {
            throw new Error(response.error);
          }
        });
    },
    deletePet(id, nome, foto_path) {
      this.path = encodeURIComponent(foto_path);
      if (confirm(`Excluir ${nome}`)) {
        this.$donoService.deletePet(id, this.path).then((response) => {
          if (!response.error) {
            this.findAllPets();
            return;
          } else {
            throw new Error(response.error);
          }
        });
      }
    },
    findAllServices(id) {
      this.$donoService.findAllServices(id).then((response) => {
        if (!response.error) {
          this.servicos = response;
          return;
        } else {
          throw new Error(response.error);
        }
      });
    },
    addServico(pet_id) {
      if (this.servico.servico_texto == null) {
        alert("Serviço está vazio");
      } else {
        this.$donoService.addServico(this.servico).then((response) => {
          if (!response.error) {
            this.servico.servico_texto = "";
            this.findAllServices(pet_id);
            return;
          } else {
            throw new Error(response.error);
          }
        });
      }
    },
    deleteServico(id, pet_id) {
      this.$donoService.deleteServico(id).then((response) => {
        if (!response.error) {
          if (confirm("Remover serviço?")) {
            this.findAllServices(pet_id);
            return;
          }
        } else {
          throw new Error(response.error);
        }
      });
    },
    updateServico(pet_id) {
      if (this.update_servico.servico_texto == null) {
        alert("Preencha o campo de atualização");
      } else {
        this.$donoService
          .updateServico(this.update_servico)
          .then((response) => {
            if (!response.error) {
              this.findAllServices(pet_id);
              this.servico.servico_texto = null;
              this.servico_update.servico_texto = null;
              this.servico_update.servico_id = null;
              return;
            } else {
              throw new Error(response.error);
            }
          });
      }
    },
    dateFormat(pet_nascimento) {
      this.pet.pet_nascimento = moment(pet_nascimento).format("YYYY-MM-DD");
    },
  },
  mounted() {
    this.findDono();
    this.findAllPets();
  },
};
</script>
