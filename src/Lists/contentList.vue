<template>
  <content-view v-for="element in Lists" :key="element.id" :id="element.id" :title="element.title" :img="element.img" :to="element.to"></content-view>
</template>
<script>
import ContentView from '../component/Dashboard/Header-Links/Content.vue'
export default {
  components:{
    ContentView
  },
  inject: ["Lists"],
  methods:{
    
  }
};
</script>
