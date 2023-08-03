<template>
    <section >

            <router-link :to="to">
                <div class="card" >
                    <div class="Image">
                        <img :src="img" alt="error">
                        
                    </div>
                    <div class="Title">
                        <span>{{ title }}</span>
                    </div>
                </div>
            </router-link>

       
    </section>
    
</template>
<script>
    export default{
        props:['title','img','id','to'],
        methods:{
            
        }
    }

</script>
<style scoped>
    section{
        margin-top: 60px;
        margin-right: 30px;
        margin-left: 30px;
    }
    a{
        text-decoration: none;
    }
    .card{
        background: url('data:image/png;base64,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');
        background-size: cover;
        background-position: 50%;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin-bottom: 1.5rem;
        width: 250px;
        height: 250px;
        border-radius: 40px;
        text-align: center;
        overflow: hidden;
    }
    .Title{
        padding: 20px;
        width: 200px;
    }
    span{
        font-size: 20px;
    }
</style>