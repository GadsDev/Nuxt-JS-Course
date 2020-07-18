<template>
  <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
    <div class="card-header">Post: {{post.id}}</div>
    <div class="card-body">
      <h5 class="card-title">{{post.title}}</h5>     
    </div>
  </div>
</template>

<script>
export default {
    props: {
        post: Object
    }
};
</script>

<style></style>
