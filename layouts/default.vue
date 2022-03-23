<template>
  <div id="app">
      <heade/>
      <nuxt/>
      <foot/>
  </div>
</template>

<script>
import heade from "~/components/Header.vue";
import foot from "~/components/Footer.vue";
export default {
    components:{
        heade,
        foot
    }
}
</script>