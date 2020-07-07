<template>
  <section class="register container-proj">
    <div class="register-form">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="fixed-center shadow-10 q-pa-md rounded-borders"
        style="min-width: 300px"
      >
        <div class="text-primary text-h5 q-my-md">Acessar</div>
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

        <div>
          <q-btn label="Logar" type="submit" color="primary" class="q-my-md" />
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
      isPwd: true
    };
  },
  methods: {
    onSubmit() {
      this.$q.notify({
        color: "green-4",
        textColor: "white",
        icon: "cloud_done",
        message: "Submitted"
      });
    }
  }
};
</script>
