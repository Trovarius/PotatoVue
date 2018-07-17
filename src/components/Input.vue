<template>
    <div>
        <label for="flavor">Escolha o tema da próxima live.</label>
        <input type="text" @input="changed" name="flavor"/>
    </div>
</template>

<script>
export default {
    name: "Input",
    methods:{
        changed(event){
            this.$store.commit('change', event.target.value);
        }
    }
}
</script>

<style>

</style>