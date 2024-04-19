<template>
  <button class="my-btn" @click="count++">Remote Counter Button: {{ count }}</button>
</template>

<script>
export default{
  data() {
    return {
      count: 0
    };
  }
}
</script>

<style>
.my-btn {
  border: 3px solid aqua;
  background-color: mediumspringgreen;
  border-radius: 5px;
}
</style>