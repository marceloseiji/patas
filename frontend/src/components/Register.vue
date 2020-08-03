<template>
  <section class="register container-proj">
    <div class="register-form">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="fixed-center shadow-10 q-pa-md rounded-borders"
        style="min-width: 300px"
        action="/register"
        method="POST"
      >
        <div class="text-primary text-h5 q-my-md">Register</div>
        <q-input
          color="primary"
          filled
          v-model="email"
          label="E-mail *"
          hint="Seu e-mail"
          lazy-rules
          type="email"
          name="email"
          :rules="[(val) => (val && val.length > 0) || 'Digite seu e-mail']"
        />

        <q-input
          color="primary"
          filled
          v-model="username"
          label="Nome de usuário *"
          hint="Seu nome de usuário"
          lazy-rules
          type="text"
          name="username"
          :rules="[
            (val) => (val && val.length > 0) || 'Digite seu nome de usuário',
          ]"
        />

        <q-input
          color="primary"
          v-model="password"
          filled
          label="Senha *"
          :type="isPwd ? 'password' : 'text'"
          name="password"
          hint="Sua senha"
          :rules="[(val) => (val && val.length > 0) || 'Digite sua senha']"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

        <q-toggle color="primary" v-model="accept" label="Eu aceito os termos de uso *" />

        <div>
          <q-btn label="Registrar" type="submit" color="primary" />
          <q-btn label="Resetar" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
  </section>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      email: null,
      username: null,
      password: null,
      accept: false,
      isPwd: true,
      userForm: null
    };
  },

  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first"
        });
      } else {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted"
        });
        this.userForm = new FormData();
        this.userForm.append("user_name", this.username);
        this.userForm.append("user_email", this.email);
        this.userForm.append("user_password", this.password);

        // Exibição dos valores chave/valor
        for (var pair of this.userForm.entries()) {
          console.log(pair[0] + ", " + pair[1]);
        }

        this.$userService.registerUser(this.userForm).then(response => {
          if (!response.error) {
            (this.userForm = null),
              (this.username = null),
              (this.email = null),
              (this.password = null);
          } else {
            throw new Error(response.error);
          }
        });
      }
    },

    onReset() {
      this.email = null;
      this.password = null;
      this.accept = false;
    }
  }
};
</script>
