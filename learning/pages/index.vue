<template>
  <div>
    <h1>Hello World</h1>
    <client-only>
      <v-select
        v-model="selected"
        placeholder="Select Category"
        :options="['foo', 'bar']"
      ></v-select>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: ""
    };
  }
};
</script>

<style></style>
