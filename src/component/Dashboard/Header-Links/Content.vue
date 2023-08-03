<template>
    <section>
        <base-board  :title="title" :img="img" :id="id" :to="to" ></base-board>
    </section>
</template>
<script>
import BaseBoard from '../../../UI/BaseBoard.vue'

export default{
  components: { BaseBoard },
    props:['title','img','id','to'],
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>
