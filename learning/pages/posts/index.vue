<template>
<div>
  <div class="">
      <h2  class="">Making API Request</h2>
  </div>

  <div class="container">
      <h2 v-for="post in posts" :key="post.id" class="">{{ post.title }}</h2>
  </div>
</div>
</template>

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

<style>

</style>