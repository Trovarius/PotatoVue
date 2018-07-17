<template>
    <div>
        <button @click="handleclick"> Clicar aqui </button>
        <button @click="handleGlobalClick"> Evento Global </button>
    </div>
</template>

<script>
export default {
    name: "EventChild",
    methods: {
        handleclick(){
            this.$emit('clickOnParent', "OI", "Pessoal da live");
        },
        handleGlobalClick(){
            this.$root.$emit('clickedSomething');
        }
    }
}
</script>

<style>

</style>
