<template>
  <section class="register container-proj">
    <div
      class="register-form absolute-center q-pa-md rounded-borders shadow-11"
      style="min-width: 300px"
    >
      <div class="text-h5 q-mb-xl text-primary">Cadastro</div>
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          color="primary"
          filled
          v-model="email"
          label="E-mail *"
          hint="Seu e-mail"
          lazy-rules
          type="email"
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

        <q-toggle
          color="primary"
          v-model="accept"
          label="I accept the license and terms"
        />

        <div>
          <q-btn label="Registrar" type="submit" color="primary" />
          <q-btn
            label="Resetar"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
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
    };
  },

  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first",
        });
      } else {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted",
        });
      }
    },

    onReset() {
      this.email = null;
      this.password = null;
      this.accept = false;
    },
  },
};
</script>
