export default {
    async asyncData({ route,$axios }) {
        console.log(route.name)
        return { title: '111' }
      }
}