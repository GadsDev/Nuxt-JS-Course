<template>
<div>
  <div class="">
      <h2  class="">Making API Request</h2>
  </div>

  <div class="container">
      <h4 v-for="post in posts" :key="post.id" class="">{{ post.title }}</h4>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            posts: '20 posts'
        }
    },
    //Return The data value renedering by server with Nuxt
    async asyncData(context){
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
            return {posts: response.data}         
        } catch (error) {
            console.log("Posts index mounted error", error);
        }
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