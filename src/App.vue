<template>
  <v-app>
    <v-main>
      <father-component/>
    </v-main>
  </v-app>
</template>

<script>
import FatherComponent from './components/FatherComponent.vue'
export default {
  name: 'App',

  components: {
    
    FatherComponent
  },

  data: () => ({
    //
  }),
}
</script>
