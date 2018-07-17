<template>
    <div>
        <p>{{ finalCountDown }}</p>
        <p>{{ now }}</p>
        <p>{{ showStatus }}</p>
        <p>{{ status }}</p>
        <input v-model="status"/>
    </div>
</template>

<script>
export default {
  name: "Computed",
  data() {
    return {
      count: 2,
      status: 3
    };
  },
  computed: {
    finalCountDown() {
      return this.count + " times 10 equals " + this.count * 10;
    },
    now() {
      return new Date();
    },
    showStatus() {
      switch (this.status) {
        case 1:
          return "Online";
        case 2:
          return "Away";
        case 3:
          return "Streamming";
        default:
          return "offline";
      }
    }
  },
  mounted() {
    this.$root.$on("clickedSomething", () => {
      this.status = 5;
    });
  }
};
</script>

<style>
</style>
