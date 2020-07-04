<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-secondary text-white">
      <q-toolbar class="text-white navbar container-proj">
        <img class="q-ma-md" src="../../public/images/patas-logo-simple.png" alt="pata" />
        <span class="material-icons"></span>

        <router-link class="router-btn" to="/">
          <q-btn v-ripple icon="pets" stretch flat label="Início" color="white" />
        </router-link>

        <router-link class="router-btn" to="/donos">
          <q-btn icon="face" stretch flat label="Donos" color="white" />
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
  name: "Layout"
};
</script>