<template>
<div>
  <h1>Users Page</h1>

  <input type="text" v-model="id">
  <button @click="loadUser">Load User</button>
</div>
</template>

<script>
export default {
    data(){
        return {
            id: ''
        }
    },
    methods: {
        loadUser(){
            //this.$router.push Joga para a rota do parametro
            this.$router.push(`/users/${this.id}`)
        }
    }
}
</script>

<style>

</style>