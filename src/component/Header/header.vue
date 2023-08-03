<template>
    <nav> 
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
    </nav>
</template>
<script>
import logoutClick from '../Logout/logout.vue'
export default{
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
    nav{
        background-image: url(http://jeel.suredemos.com/img/header-bg.c4243121.png);
        display: flex;
        justify-content: space-between;
        padding: 30px;
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