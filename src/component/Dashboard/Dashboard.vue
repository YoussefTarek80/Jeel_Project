<template>
    <header-view></header-view>
    <section class="Home ">
        <div class="header">
            <span>بإمكانك إضافة مختصر مفيد وممتع عن الصفحة الرئيسية</span>
            <h4>الصفحة الرئيسية</h4>
        </div>
        <div class="board ">
            <div class="Chooses ">
                <div class="links">
                    <button @click="select('contentList')" :class="{ active: selectedTab === 'contentList'}">المحتوي</button>
                </div>
                <div class="links">
                    <button @click="select('SchoolList')" :class="{ active: selectedTab === 'SchoolList'}">المدارس</button>
                </div>
                <div class="links">
                    <button @click="select('SettingView')" :class="{ active: selectedTab === 'SettingView'}">صلاحيات النظام و المستخدمين</button>
                </div>
            </div> 
            <div class="d-flex flex-wrap flex-row-reverse">
                <component :is="selectedTab" ></component>
            </div>
            
        </div>
    </section>
    <footer-view></footer-view>
</template>
<script>
import contentList from '../../Lists/contentList.vue'
import SchoolList from '../../Lists/schoolList.vue'
import SettingView from './Header-Links/Setting.vue'
import HeaderView from '../Header/header.vue'
import FooterView from '../Footer/footer.vue'
export default{
    inject:['Signedup'],

    components: {
        HeaderView,
        FooterView,
        contentList,
        SchoolList,
        SettingView
    },
    data(){
        return{
            selectedTab:'contentList',
            IsAdmin:false,
            IsStudent:false
        }
    },
    created(){
        // this.Signedup.forEach(element => {
        //     let currentRole = this.getCurrentUserRole(element.email, element.password);  
        // });
        
        
    },
    methods:{
            select(s){
                this.selectedTab=s;
            },
            getCurrentUserRole(email, password) {
                let user = this.Signedup.find(user => user.email === email && user.password === password);
                return user ? user.role : null;
            }
    }
}
</script>
<style scoped>
    *{
        box-sizing: border-box;
        padding: 0;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ;

    }
    .header{
        display: flex;
        flex-direction: column;
        text-align: right;

    }
    .header span{
        color: rgba(226, 81, 153, 1);
        font-size:20px
    }
    .Home{
        margin: 50px;
    }
    .board{
        background-color: rgba(249, 249, 249, 1);
        display: flex;
        flex-direction:column ;
        justify-content: end;
        padding: 40px;
        margin-top: 20px;
        border-radius: 20px;
        position: relative;
        align-items: end;
        

    }
    .Chooses{
        display: flex;
        flex-wrap: wrap;
        
    }
    button{
        text-decoration: none;
        font-size: 20px;
        color: rgba(130, 130, 130, 1);
        border: none;
        outline: none;
        background: none;
        position: relative;
        padding: 50px;
    }
    button.active{
        color: #76236c;
        border-bottom: 3px solid #76236c;
        font-weight: bold;
    }
    button.active::after{
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-right: 20px solid transparent;
        border-left: 20px solid transparent;
        border-top: 20px solid transparent;
        border-bottom: 20px solid #76236c;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
    @media screen and (max-width: 900px) {
        .Chooses{
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .board{
            align-items: center;
        }
      }
</style>