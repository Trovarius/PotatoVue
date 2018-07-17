<template>
    <div>
        <p>Oi {{ name | fallback | mention('Sr.', 'Magnânimo') }}!</p>
    </div>
</template>

<script>
export default {
    name: "Trovarius",
    data() {
        return {
            name: null
        }
    },
    filters: {
        fallback: name => {
            return name ? name : "Sumido";
        },
        mention: (name, prefix, postfix) =>{
            return `${prefix} ${name} ${postfix}`;
        }
    }
}
</script>

<style>

</style>
