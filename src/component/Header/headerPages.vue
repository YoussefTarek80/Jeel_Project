<template>
    <nav> 
        <div class="main-head">
            <div class="data">
                <div class="logout">
                    <logout-click></logout-click>
                </div>
                <div class="information d-flex">
                    <div class="p-3 title" > 
                        <p class="text-light fs-4">سعد بن عبدالرحمن الغامدي</p>
                        <span class="fw-bold fs-4">جيل ادمن</span>
                    </div>
                </div>
                <div class="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 0.744);transform: ;msFilter:;"><path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z"></path></svg>
                </div>
            </div>
            <img  src="http://jeel.suredemos.com/img/logo-white.fed3a031.png" alt="">
        </div>
        <!-- navigation -->

        <div class="navigation">
            <li><router-link to="/dashboard">الرئيسيه</router-link></li>

            <li @mouseenter="showDropdown = true" @mouseleave="showDropdown = false"> صلاحيات النظام و المستخدمين
                <span class="arrow"> <i class="fa-solid fa-chevron-down"></i> </span>
                <ul id="dropdown1" v-show="showDropdown" class="shadow-lg">
                    <router-link to="/dashboard">صلاحيات النظام</router-link>
                    <router-link to="/dashboard">صلاحيات النظام</router-link>
                    <router-link to="/dashboard">صلاحيات النظام</router-link>
                </ul> 
            </li>

            <li><router-link to="/dashboard">المدارس</router-link></li>
            <li><router-link to="/dashboard">المحتوي</router-link></li>
            <li><router-link to="/dashboard">اعدادات النظام</router-link> </li>
            <li><router-link to="/dashboard">لوحه المعلومات</router-link></li>
            <li><router-link to="/dashboard">التقارير</router-link></li>
        </div>
    </nav>

</template>
<script>
import logoutClick from '../Logout/logout.vue'
export default{
    data(){
        return{
            showDropdown:false,
        }
    },
    components:{
        logoutClick
    }
}
</script>
<style scoped>
    *{
        padding: 0;
        margin: 0;
        
    }
    #dropdown1{
        position: absolute;
        bottom: 0;
        display: flex;
        flex-direction: column;
        transform: translateY(100%);
        background: white;
        border-radius: 1.56rem;
        min-width: 240px;
        transition: all .3s ease-in-out;
        z-index: 2;
        
    }
    ul a:hover{
        background: rgba(118,35,108,.76);
        color: #fff
    }
    ul a{
        color: #76236c;
        border-bottom: 1px solid hsla(0,0%,91.4%,.74);
        width: 100%;
        text-align: end;
        overflow: hidden;
        padding: 1.5rem;
        position: relative;
        z-index: 2;
        transition: all .3s ease-in-out;
        border-radius: 1.56rem;
    }
    nav{
        background-image: url(http://jeel.suredemos.com/img/header-bg.c4243121.png);
        
    }
    .main-head{
        display: flex;
        justify-content: space-between;
        padding: 30px;
        flex-wrap: wrap;
    }

    img{
        width: 10%;
        -o-object-fit: contain;
        object-fit: contain;
        -o-object-position: center;
        object-position: center;
        margin-right: 100px;
    }
    .data{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 100px ;
        padding: 10px;
    }
    .title span{
        color:goldenrod
    }
    svg {
        cursor: pointer;
    }
    li{
        color: white;
        font-size: 20px;
        padding: 40px;
        text-decoration: none;
        cursor: pointer;
    }
    a{
        color: white;
        font-size: 20px;
        text-decoration: none;
        padding: 10px;
    }

    .navigation{
        display: flex;
        justify-content: space-around;
        direction: rtl;
        text-align: right;
        list-style: none;
        flex-wrap: wrap;
        position: relative;

    }
    .arrow {
        transition: transform 0.3s ease-in-out;
        display: inline-block; 
        
    }
    li:hover .arrow {
        transform: rotate(180deg);
    }
    @media screen and (max-width: 900px) {
        nav{
            margin: 0;
            padding: 0;
        }
        img{
            margin: auto;
            width: 20%;
            padding: 15px;
        }
        .data{
            margin: 0;
            padding: 0;
            display: none;
        }
    }

</style>