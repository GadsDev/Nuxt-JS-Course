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
  </div>
</div>
</template>

<script>
import axios from 'axios'
import Card from '@/components/Card'
export default {
    components: {
        Card,
    },
    data() {
        return {
            posts: '20 posts'
        }
    },
    //Return The data value renedering by server with Nuxt
    async asyncData(context){
        try {
            let {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
            return {posts: data}         
        } catch (error) {
            console.log("Posts index mounted error", error);
        }
    },
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