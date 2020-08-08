<template>
  <q-toolbar class="text-white shadow-2 navbar container-proj fixed-top">
    <img
      class="q-ma-md"
      src="../../public/images/patas-logo-simple.png"
      alt="pata"
    />
    <span class="material-icons"></span>

    <router-link class="router-btn" to="/">
      <q-btn v-ripple icon="pets" stretch flat label="Início" color="white" />
    </router-link>

    <router-link class="router-btn" to="/donos">
      <q-btn icon="face" stretch flat label="Donos" color="white" />
    </router-link>
  </q-toolbar>
</template>

<script>
export default {
  name: "Navbar",
  props: {},
  data() {
    return {
      link: null,
    };
  },
  methods: {
    linkClick(e, go) {
      e.navigate = false; // we choose when we navigate

      // console.log('triggering navigation in 3s')
      setTimeout(() => {
        // console.log('navigating as promised 3s ago')
        go();
      }, 3000);
    },

    buttonProps({ href, route, isActive, isExactActive }) {
      const props = {
        color: "black",
        noCaps: true,
        label: `To "${route.fullPath}"`,
        outline: true,
        to: href,
      };

      if (isActive === true) {
        props.color = isExactActive === true ? "primary" : "amber-9";
      } else {
        props.color = "black";
      }

      return props;
    },
  },
  mounted() {},
};
</script>
