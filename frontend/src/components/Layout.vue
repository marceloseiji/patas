<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-secondary text-white">
      <q-toolbar class="navbar container-proj xs">
        <q-btn color="primary" icon="menu" label="Menu">
          <q-menu>
            <q-list style="min-width: 100px" class="bg-secondary text-white">
              <q-item clickable v-close-popup>
                <router-link class="router-btn" to="/">
                  <q-btn
                    v-ripple
                    icon="pets"
                    stretch
                    flat
                    label="Início"
                    color="white"
                  />
                </router-link>
              </q-item>

              <q-item clickable v-close-popup>
                <router-link class="router-btn" to="/donos">
                  <q-btn icon="face" stretch flat label="Donos" color="white" />
                </router-link>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <img
          class="q-ma-md"
          src="../../public/images/patas-logo-simple.png"
          alt="pata"
          style="width: 100px"
        />
      </q-toolbar>
      <q-toolbar class="text-white navbar container-proj gt-xs">
        <img
          class="q-ma-md"
          src="../../public/images/patas-logo-simple.png"
          alt="pata"
        />

        <router-link class="router-btn" to="/">
          <q-btn
            v-ripple
            icon="pets"
            stretch
            flat
            label="Início"
            color="white"
          />
        </router-link>

        <router-link class="router-btn" to="/donos">
          <q-btn icon="face" stretch flat label="Donos" color="white" />
        </router-link>

        <router-link class="router-btn" to="/register">
          <q-btn
            icon="how_to_reg"
            stretch
            flat
            label="Registro de usuário"
            color="white"
          />
        </router-link>

        <router-link class="router-btn" to="/login">
          <q-btn icon="login" stretch flat label="Logar" color="white" />
        </router-link>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-secondary text-white container-proj">
      <q-toolbar>
        <q-toolbar-title>Patas©</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: "Layout",
};
</script>
