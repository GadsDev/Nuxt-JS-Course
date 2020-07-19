<template>
<div>
  <div class="">
      <h2  class="">Making API Request</h2>
  </div>

  <div class="container row">
      <Card
        v-for="post in posts" :key="post.id"  :post="post"
        class="ml-auto mr-auto"
      />     
      <button class="btn btn-danger" v-scroll-to="'body'" >Back to Top</button>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import Card from '@/components/Card'
import {mapGetters} from 'vuex'
export default {
    components: {
        Card,
    },   
    computed: {
        ...mapGetters(['posts'])      
    },
    //Return The data value renedering by server with Nuxt
    //asyncData Use the local data() é o melhor para interagir com o data() local
    //fetch use the specific data é o melhor para fazer só uma consulta na api e dispara no Vuex
    // async fetch({store}){
    //     try {
    //         let {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
    //         store.dispatch("setPosts", data);             
    //     } catch (error) {
    //         console.log("Posts index mounted error", error);
    //     }
    // },
    head: {
        title: "List Of Posts"
    }
}
</script>
<!--
<script>
import axios from 'axios'
export default {  
    data() {
        return {
            posts: []
        }
    },
    async mounted() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
            this.posts = response.data            
        } catch (error) {
            console.log("Posts index mounted error", error);
        }
       
    }
}
</script>
-->

<style>

</style>