<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  mounted(){
    this.$front.device();
  }
}
</script>
