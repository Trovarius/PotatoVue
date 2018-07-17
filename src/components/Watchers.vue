<template>
    <div>
        <p>Meu nome é {{name}}</p>
        <p>Está {{status}}</p>
        <button @click="changeName()">Mudar de nome!</button>
    </div>
</template>

<script>
export default {
  name: "Watchers",
  data() {
    return {
      name: "Trovarius",
      status: "Offline"
    };
  },
  methods: {
    changeName() {
      this.name = "Marco Bruno";
    }
  },
  watch: {
    name: function() {
      if (this.name == "Marco Bruno") this.status = "Online";
    }
  }
};
</script>

<style>
</style>