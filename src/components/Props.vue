<template>
    <div>
        <div :style="{'color': options.color}">
            <p>{{name}}</p>
            <p>{{secondName}}</p>
            <p v-if="showDetail">Detalhe</p>
            <p>{{options.color}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Props",
    props: {
        name: {
            type: String,
            validator: x =>{
                return x === "Trovarius";
            }
        },
        secondName: {
            type: String,
            required: true
        },
        showDetail: Boolean,
        options: Object
    }
}
</script>

<style>

</style>
