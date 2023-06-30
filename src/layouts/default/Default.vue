<template>
  Default
  <v-app>
    <!-- <default-bar /> -->

    <!-- <default-view /> -->
  </v-app>
</template>

<script>
// import DefaultBar from './AppBar.vue'
// import DefaultView from './View.vue'

export default {
  name: 'DefaultTdas',
  components:{
    // DefaultBar,
    // DefaultView
  },
  mounted(){
    this.$router.push("/guide/ListGuide");
  }
}
</script>
