<template>
  <div class="sample">
    <h1>Example use of @carbon/vue</h1>
    <cv-text-input
      label="Who are you?"
      v-model="yourName"
      placeholder="your name"
    />
    <cv-button @click="onClick">Hola {{ yourName }}</cv-button>
    <cv-modal :visible="visible" @modal-hidden="modalClosed">
      <template slot="title">Bienvenido a @carbon/vue {{ yourName }}</template>
      <template slot="content">
        <p>
          Al igual que en el deporte, mantener la motivación en el trabajo es
          fundamental para tu rendimiento. Esto es particularmente cierto cuando
          tienes una fecha de entrega muy ajustada, cuando debes preparar una
          presentación importante o cuando tus colegas o clientes dependen de tu
          trabajo. Para ayudarte a mantener la motivación, sin importar las
          dificultades que presente tu trabajo, decidimos recopilar 25 de los
          mejores discursos motivacionales del mundo de los negocios, el deporte
          y el entretenimiento, entre otros.
        </p>
      </template>
    </cv-modal>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      yourName: "",
      visible: false,
    };
  },
  methods: {
    onClick() {
      this.visible = true;
    },
    modalClosed() {
      this.visible = false;
    },
  },
};
</script>

<style>
.sample {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  margin: 5% auto;
}

.cv-text-input {
  margin: 30px 0;
}
</style>
