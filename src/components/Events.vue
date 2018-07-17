<template>
    <div> 
        <h4>Eventos no VUE</h4>
        <button @click.prevent="handleClick($event)">Foi clicado {{contador}} vezes</button>
    </div>
</template>

<script>
export default {
    name: "Events",
    data(){
        return{
            contador: 0
        }
    },
    methods: {
        handleClick() {
            this.contador++;
        }
    }
}
</script>

<style>

</style>
