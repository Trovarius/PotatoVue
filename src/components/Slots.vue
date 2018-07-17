<template>
    <div>
        <p>
            Oi aqui vc coloca o seu conteúdo.
            <slot></slot>
        </p>
        <hr>
        <p>
            <slot name="description"></slot>
        </p>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
