<template>
  <div>
    <q-toolbar class="text-white shadow-2 navbar">
      <img class="q-ma-md" src="../../public/images/patas-logo-simple.png" alt="pata" />
      <span class="material-icons"></span>
      <q-btn to="/" icon="pets" stretch flat label="Início" />
      <q-btn to="/donos" icon="face" stretch flat label="Donos" />
    </q-toolbar>
  </div>
</template>

<script>
  export default {
    name: "Navbar",
    props: {}
  };
</script>