<template>
    <school-view v-for="element in SchoolList" :key="element.id" :id="element.id" :title="element.title" :img="element.img" :to="element.to"></school-view>
</template>
<script>
import SchoolView from '../component/Dashboard/Header-Links/Schools.vue'
export default{
    components:{
        SchoolView
    },
    inject:['SchoolList']
}
</script>