<template>
  <div class="home-page wow fadeInUp">
    <tutorial/>
  </div>
</template>

<script>
import page from "~/plugins/mixin/page";
import Tutorial from "~/components/Tutorial";
if (process.browser) { // 在这里根据环境引入wow.js
    var {WOW} = require('wowjs')
}
export default {
  name: "home",
  mixins: [page],
  data() {
    return {}
  },
  components:{
    Tutorial
  },
  mounted(){
    if (process.browser) {  // 在页面mounted生命周期里面 根据环境实例化WOW
        new WOW({
            live: true, 
            mobile: false,
            offset: 0
        }).init()
    } 
  }
};
</script>
