<template>
  <div class="home">
    <div class>
      <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        autoplay
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
      >
        <q-carousel-slide :name="1" img-src="http://localhost:3000/uploads/img-carousel01.jpg" />
        <q-carousel-slide :name="2" img-src="http://localhost:3000/uploads/img-carousel02.jpg" />
        <q-carousel-slide :name="3" img-src="http://localhost:3000/uploads/img-carousel03.jpg" />
      </q-carousel>
    </div>
    <div class="container-proj">
      <div class="row">
        <h2 class="title">PetShop Patas</h2>
        <img class="logo img-responsive" src="../../public/images/patas-logo.png" alt />
      </div>

      <div class="row">
        <div class="col">
          <h6 class="text text-weight-bold">Sistema para PetShop</h6>
          <div class="col-sm-9 col-12 text-body1">
            <b>Curso:</b> Análise e Desenvolvimento de Sistemas
          </div>
          <div class="col-sm-9 col-12 text-body1">
            <b>Disciplina:</b> Oficina de Projeto de Sistemas de Informação para WEB
          </div>
          <div class="col-sm-9 col-12 text-body1">
            <b>Professor:</b> Galbas Milleo Filho
          </div>
          <div class="col-sm-9 col-12 text-body1">
            <b>Aluno:</b> Marcelo Seiji Ikuta
          </div>

          <h6 class="text text-weight-bold">Tecnologias utilizadas</h6>
          <div class="col-sm-9 col-12 text-body1">
            <b>Front End:</b> Vue JS + Quasar Framework
          </div>
          <div class="col-sm-9 col-12 text-body1">
            <b>Back End:</b> Node JS
          </div>
        </div>
        <div class="col">
          <h6 class="text text-weight-bold">Objetivo</h6>
          <div
            class="col-sm-9 col-12 text-body1"
          >Desenvolver um sistema para um PetShop que atenda pelo menos três requisitos de sistema.</div>
          <div
            class="col-sm-9 col-12 text-body1"
          >O sistema deve permitir adicionar consultas que são guardadas em um histórico.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    props: {},
    data() {
      return {
        slide: 1
      };
    }
  };
</script>