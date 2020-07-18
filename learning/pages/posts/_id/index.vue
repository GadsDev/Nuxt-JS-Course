<template>
  <div class="container">
   <h1>{{ post.title }}</h1>
   <pre>{{ post.body }}</pre>
   <nuxt-link to="/posts">Back to posts</nuxt-link>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      post: ""
    };
  },
  //Return The data value renedering by server with Nuxt
  async asyncData({params}) {
    try {
      let { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
      );
      return { post: data };
    } catch (error) {
      console.log("Posts index mounted error", error);
    }
  },
  head() {
      return {
        title: this.post.title 
      }
    
  }
};
</script>

<style></style>
