<template>
    <div class="recipe">
        <router-link to="/">&lt; Back Home</router-link>
        <h1>{{ $route.params.slug }}</h1>
    </div>
</template>

<script>
// export default {
//     computed:{
//         recipe()
//     }
// };
</script>

<style>
.recipe {
    padding: 1rem;
    max-width: 768px;
    margin: 0 auto;
}
.desc {
    font-size: 1.125rem;
    line-height: 1.4;
    margin-bottom: 1rem;
}
hr {
    margin-bottom: 1rem;
}
h3 {
    margin-bottom: 1rem;
}
.ingredients {
    padding: 1rem;
    background-color: #081c33;
    border-radius: 0.5rem;
    margin-bottom: 2rem;
}
.ingredients ul li {
    list-style-position: inside;
    line-height: 1.4;
    margin-bottom: 1rem;
}
.method ol li {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    list-style-position: inside;
    border-bottom: 1px solid #eee;
}
</style>
