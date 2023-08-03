<template>
    <div class="d-flex flex-column logoutBox">
        <svg @click="logOut" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 0.818);transform: ;msFilter:;"><path d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z"></path></svg>
        <div class="button-field" v-if="logout">
            <router-link to="/login" >تسجيل الخروج</router-link>
        </div>
    </div>

</template>
<script>
export default{
    data(){
        return{
            logout:false
        }
    },
    methods:{
        logOut() {
            this.logout=!this.logout;
        }
    }
}
</script>
<style scoped>
    .button-field{
        background: white;
        padding:20px 0px 20px 0px;
        border-radius: 10px;
    }
    a{

        background: white;
        padding: 10px;
        text-align: center;
        text-decoration: none;
        color: black;
    }
    a:hover{
        background: rgba(128, 128, 128, 0.2);
    }
    svg {
        cursor: pointer;
        margin-top: 50px;
      }
      .logoutBox{
        
        height: 10rem;
        

      }
</style>