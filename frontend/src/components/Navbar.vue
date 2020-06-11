<template>
  <div>
    <q-toolbar class="bg-primary text-white shadow-2 navbar">
      <img src="../../public/images/patas-logo-simple.png" alt="pata" />
      <span class="material-icons"></span>
      <q-btn to="/" icon="pets" stretch flat label="Início" />
      <q-btn to="/donos" icon="face" stretch flat label="Donos" />
      <q-btn stretch flat label="Link" />
    </q-toolbar>
  </div>
</template>

<script>
  export default {
    name: "Navbar",
    props: {}
  };
</script>