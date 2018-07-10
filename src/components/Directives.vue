<template>
    <div>
        <h2>Trovarius</h2>
        <div>
            <h4>V-text</h4>
            <p v-text="name"></p>

            <h4>V-once</h4>
            <input v-model="name" placeholder="Enter a message">
            <p v-once>{{name}}</p>

            <h4>V-html</h4>
            <input v-model="html" placeholder="Enter a message">
            <p v-html="html"></p>

            <h4>V-bind</h4>
            <a :href="link">Click bait</a>

            <p v-text="'Oi ' + name + ' bem vindo'"></p>

            <p v-text="name == 'Trovarius' ? 'E ae mano' : 'Oi tudo bem ?'"></p>
            <p v-if="ehTrovarius">Quer uma breja?</p>

            <ul>
                <li v-for="(item, index) in items" :key="index">{{ item }}</li>
            </ul>

            <ul>
                <li v-for="(compra, index) in compras" :key="index" v-text="compra.item"></li>
            </ul>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'Trovarius',
        data(){
            return{
                name: "Januario!",
                date: new Date(),
                html: "<a href=\"htp://clickbait\">Click Aqui</a>",
                link: "http://clickbait",
                ehTrovarius: true,
                items: ["Cão", "Gato", "Passarinho", "Macaco"],
                compras:[{ item: "ovos", qtd: 12}, 
                        {item: "leite", qtd:1}]

            }
        }
    }
</script>

<style scoped>
    h2 {
        font-weight: bold;
    }
</style>
