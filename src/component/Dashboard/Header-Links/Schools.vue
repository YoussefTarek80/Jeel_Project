<template>
    <base-board :title="title" :img="img" :to="to"></base-board>
</template>
<script>
import BaseBoard from '../../../UI/BaseBoard.vue'
export default{
  components: { BaseBoard },
    props:['title','img','to']
}
</script>